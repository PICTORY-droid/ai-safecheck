import { REGEX_RISK_PATTERNS } from "../../constants/risk-patterns";
import { RISK_POLICY } from "../../constants/risk-policy";
import type { RiskFinding } from "../../types/risk.types";

const PERSONAL_INFO_KEYS = new Set([
  "personalPhone",
  "personalEmail",
  "residentNumber",
  "cardNumber",
]);

export function detectPersonalInfo(text: string): RiskFinding[] {
  const findings: RiskFinding[] = [];

  for (const pattern of REGEX_RISK_PATTERNS) {
    if (!PERSONAL_INFO_KEYS.has(pattern.key)) {
      continue;
    }

    const policy = RISK_POLICY[pattern.key];
    const matches = text.matchAll(pattern.pattern);

    for (const match of matches) {
      const value = match[0];
      const startIndex = match.index ?? 0;
      const endIndex = startIndex + value.length;

      findings.push({
        id: `${pattern.key}:${startIndex}:${endIndex}`,
        category: policy.category,
        label: policy.label,
        description: policy.description,
        value,
        startIndex,
        endIndex,
        weight: policy.weight,
        severity: policy.severity,
        source: policy.source,
        action: policy.action,
      });
    }
  }

  return findings;
}
