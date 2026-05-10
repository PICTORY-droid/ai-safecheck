import type { RiskFinding, RiskSeverity } from "../types/risk.types";

const SEVERITY_ORDER: Record<RiskSeverity, number> = {
  low: 1,
  medium: 2,
  high: 3,
  critical: 4,
};

function getFindingDedupeKey(finding: RiskFinding): string {
  return [
    finding.category,
    finding.value,
    finding.startIndex,
    finding.endIndex,
  ].join(":");
}

function shouldReplaceFinding(current: RiskFinding, next: RiskFinding): boolean {
  const currentSeverityRank = SEVERITY_ORDER[current.severity];
  const nextSeverityRank = SEVERITY_ORDER[next.severity];

  if (nextSeverityRank > currentSeverityRank) {
    return true;
  }

  if (nextSeverityRank < currentSeverityRank) {
    return false;
  }

  return next.weight > current.weight;
}

export function mergeRiskFindings(findingGroups: RiskFinding[][]): RiskFinding[] {
  const findingMap = new Map<string, RiskFinding>();

  for (const group of findingGroups) {
    for (const finding of group) {
      const key = getFindingDedupeKey(finding);
      const existingFinding = findingMap.get(key);

      if (!existingFinding) {
        findingMap.set(key, finding);
        continue;
      }

      if (shouldReplaceFinding(existingFinding, finding)) {
        findingMap.set(key, finding);
      }
    }
  }

  return Array.from(findingMap.values()).sort((a, b) => {
    if (a.startIndex !== b.startIndex) {
      return a.startIndex - b.startIndex;
    }

    return b.weight - a.weight;
  });
}
