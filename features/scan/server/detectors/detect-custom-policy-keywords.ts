import { RISK_POLICY } from "../../constants/risk-policy";
import type { RiskFinding } from "../../types/risk.types";

export function detectCustomPolicyKeywords(text: string, keywords: string[] = []): RiskFinding[] {
  const findings: RiskFinding[] = [];
  const policy = RISK_POLICY.customPolicyKeyword;

  const uniqueKeywords = Array.from(
    new Set(
      keywords
        .map((keyword) => keyword.trim())
        .filter((keyword) => keyword.length > 0)
    )
  );

  for (const keyword of uniqueKeywords) {
    let searchIndex = 0;

    while (searchIndex < text.length) {
      const startIndex = text.indexOf(keyword, searchIndex);

      if (startIndex === -1) {
        break;
      }

      const endIndex = startIndex + keyword.length;

      findings.push({
        id: `customPolicyKeyword:${startIndex}:${endIndex}`,
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

  return findings;
}
