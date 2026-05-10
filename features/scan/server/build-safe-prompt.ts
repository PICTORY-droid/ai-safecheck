import type { RiskFinding } from "../types/risk.types";

function getReplacementText(finding: RiskFinding): string {
  if (finding.action === "block" || finding.action === "mask") {
    return `[${finding.label} 삭제]`;
  }

  if (finding.action === "generalize") {
    return `[${finding.label} 일반화]`;
  }

  if (finding.action === "soften") {
    return "단정하지 않는 표현";
  }

  if (finding.action === "warn") {
    return `[${finding.label} 확인 필요]`;
  }

  return finding.value;
}

export function buildSafePrompt(text: string, findings: RiskFinding[]): string {
  if (findings.length === 0) {
    return text;
  }

  const sortedFindings = [...findings].sort((a, b) => b.startIndex - a.startIndex);
  let safePrompt = text;

  for (const finding of sortedFindings) {
    const before = safePrompt.slice(0, finding.startIndex);
    const after = safePrompt.slice(finding.endIndex);
    const replacement = getReplacementText(finding);

    safePrompt = `${before}${replacement}${after}`;
  }

  return safePrompt;
}
