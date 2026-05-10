import { RISK_LEVEL_THRESHOLDS } from "../constants/risk-thresholds";
import type { RiskLevel } from "../types/scan.types";

export function decideRiskLevel(score: number): RiskLevel {
  if (
    score >= RISK_LEVEL_THRESHOLDS.blocked.min &&
    score <= RISK_LEVEL_THRESHOLDS.blocked.max
  ) {
    return "blocked";
  }

  if (
    score >= RISK_LEVEL_THRESHOLDS.warning.min &&
    score <= RISK_LEVEL_THRESHOLDS.warning.max
  ) {
    return "warning";
  }

  return "safe";
}
