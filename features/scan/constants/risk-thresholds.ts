import type { RiskLevel } from "../types/scan.types";

export const RISK_SCORE_MIN = 0;
export const RISK_SCORE_MAX = 100;

export const RISK_LEVEL_THRESHOLDS: Record<RiskLevel, { min: number; max: number; label: string }> = {
  safe: {
    min: 0,
    max: 30,
    label: "입력 가능",
  },
  warning: {
    min: 31,
    max: 70,
    label: "수정 필요",
  },
  blocked: {
    min: 71,
    max: 100,
    label: "입력 금지",
  },
};

export const WARNING_SCORE = RISK_LEVEL_THRESHOLDS.warning.min;
export const BLOCKED_SCORE = RISK_LEVEL_THRESHOLDS.blocked.min;
