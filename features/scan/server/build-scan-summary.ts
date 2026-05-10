import { RISK_CATEGORY_LABELS } from "../constants/risk-categories";
import type { RiskCategorySummary } from "../types/risk.types";
import type { RiskLevel } from "../types/scan.types";

function getLevelLabel(level: RiskLevel): string {
  if (level === "blocked") {
    return "입력 금지";
  }

  if (level === "warning") {
    return "수정 필요";
  }

  return "입력 가능";
}

export function buildScanSummary(level: RiskLevel, risks: RiskCategorySummary[]): string {
  const levelLabel = getLevelLabel(level);

  if (risks.length === 0) {
    return `${levelLabel} 상태입니다. 현재 기준에서 탐지된 위험 항목이 없습니다.`;
  }

  const categoryLabels = risks
    .map((risk) => RISK_CATEGORY_LABELS[risk.category])
    .join(", ");

  if (level === "blocked") {
    return `${categoryLabels} 항목이 포함되어 외부 AI 입력 전 제거가 필요합니다.`;
  }

  if (level === "warning") {
    return `${categoryLabels} 항목이 포함되어 외부 AI 입력 전 수정이 필요합니다.`;
  }

  return `${categoryLabels} 항목이 일부 탐지되었지만 현재 기준에서는 입력 가능 범위입니다.`;
}
