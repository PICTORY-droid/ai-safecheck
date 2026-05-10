import {
  DETECTOR_VERSION,
  RISK_SCORE_VERSION,
  SCAN_POLICY_VERSION,
} from "../constants/policy-version";
import { RISK_CATEGORY_LABELS } from "../constants/risk-categories";
import { scanResultSchema } from "../schemas/scan-result.schema";
import type { RiskCategory, RiskCategorySummary, RiskFinding, RiskSeverity } from "../types/risk.types";
import type { ScanResult } from "../types/scan.types";
import { buildSafePrompt } from "./build-safe-prompt";
import { buildScanSummary } from "./build-scan-summary";
import { calculateRiskScore } from "./calculate-risk-score";
import { decideRiskLevel } from "./decide-risk-level";
import { detectCompanySecret } from "./detectors/detect-company-secret";
import { detectContractRisk } from "./detectors/detect-contract-risk";
import { detectCopyrightRisk } from "./detectors/detect-copyright-risk";
import { detectCustomPolicyKeywords } from "./detectors/detect-custom-policy-keywords";
import { detectExaggerationRisk } from "./detectors/detect-exaggeration-risk";
import { detectPersonalInfo } from "./detectors/detect-personal-info";
import { detectSensitiveInfo } from "./detectors/detect-sensitive-info";
import { mergeRiskFindings } from "./merge-risk-findings";
import { normalizeInput } from "./normalize-input";

const SEVERITY_ORDER: Record<RiskSeverity, number> = {
  low: 1,
  medium: 2,
  high: 3,
  critical: 4,
};

interface ScanTextOptions {
  customPolicyKeywords?: string[];
}

function summarizeRiskCategories(findings: RiskFinding[]): RiskCategorySummary[] {
  const summaryMap = new Map<RiskCategory, RiskCategorySummary>();

  for (const finding of findings) {
    const existingSummary = summaryMap.get(finding.category);

    if (!existingSummary) {
      summaryMap.set(finding.category, {
        category: finding.category,
        label: RISK_CATEGORY_LABELS[finding.category],
        count: 1,
        maxSeverity: finding.severity,
      });
      continue;
    }

    const currentSeverityRank = SEVERITY_ORDER[existingSummary.maxSeverity];
    const nextSeverityRank = SEVERITY_ORDER[finding.severity];

    summaryMap.set(finding.category, {
      ...existingSummary,
      count: existingSummary.count + 1,
      maxSeverity:
        nextSeverityRank > currentSeverityRank
          ? finding.severity
          : existingSummary.maxSeverity,
    });
  }

  return Array.from(summaryMap.values()).sort((a, b) => {
    return RISK_CATEGORY_LABELS[a.category].localeCompare(RISK_CATEGORY_LABELS[b.category], "ko");
  });
}

export function scanText(text: string, options: ScanTextOptions = {}): ScanResult {
  const normalizedText = normalizeInput(text);

  const matches = mergeRiskFindings([
    detectPersonalInfo(normalizedText),
    detectSensitiveInfo(normalizedText),
    detectCompanySecret(normalizedText),
    detectContractRisk(normalizedText),
    detectCopyrightRisk(normalizedText),
    detectExaggerationRisk(normalizedText),
    detectCustomPolicyKeywords(normalizedText, options.customPolicyKeywords),
  ]);

  const score = calculateRiskScore(matches);
  const level = decideRiskLevel(score);
  const risks = summarizeRiskCategories(matches);
  const safePrompt = buildSafePrompt(normalizedText, matches);
  const summary = buildScanSummary(level, risks);

  const result: ScanResult = {
    score,
    level,
    summary,
    risks,
    matches,
    safePrompt,
    metadata: {
      policyVersion: SCAN_POLICY_VERSION,
      scoreVersion: RISK_SCORE_VERSION,
      detectorVersion: DETECTOR_VERSION,
      llmUsed: false,
      llmModel: null,
      llmPromptVersion: null,
      temperature: null,
      structuredOutput: false,
    },
  };

  return scanResultSchema.parse(result);
}
