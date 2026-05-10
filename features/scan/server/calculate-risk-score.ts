import { RISK_SCORE_MAX, RISK_SCORE_MIN } from "../constants/risk-thresholds";
import type { RiskFinding } from "../types/risk.types";

export function calculateRiskScore(findings: RiskFinding[]): number {
  const totalScore = findings.reduce((score, finding) => {
    return score + finding.weight;
  }, 0);

  if (totalScore < RISK_SCORE_MIN) {
    return RISK_SCORE_MIN;
  }

  if (totalScore > RISK_SCORE_MAX) {
    return RISK_SCORE_MAX;
  }

  return totalScore;
}
