import { KEYWORD_RISK_PATTERNS } from "../../constants/risk-patterns";
import { RISK_POLICY } from "../../constants/risk-policy";
import type { RiskFinding } from "../../types/risk.types";

const SENSITIVE_INFO_KEYS = new Set([
  "healthRecord",
  "consultingRecord",
]);

export function detectSensitiveInfo(text: string): RiskFinding[] {
  const findings: RiskFinding[] = [];

  for (const pattern of KEYWORD_RISK_PATTERNS) {
    if (!SENSITIVE_INFO_KEYS.has(pattern.key)) {
      continue;
    }

    const policy = RISK_POLICY[pattern.key];

    for (const keyword of pattern.keywords) {
      let searchIndex = 0;

      while (searchIndex < text.length) {
        const startIndex = text.indexOf(keyword, searchIndex);

        if (startIndex === -1) {
          break;
        }

        const endIndex = startIndex + keyword.length;

        findings.push({
          id: `${pattern.key}:${startIndex}:${endIndex}`,
          category: policy.category,
          label: policy.label,
          description: policy.description,
          value: keyword,
          startIndex,
          endIndex,
          weight: policy.weight,
          severity: policy.severity,
          source: policy.source,
          action: policy.action,
        });

        searchIndex = endIndex;
      }
    }
  }

  return findings;
}
