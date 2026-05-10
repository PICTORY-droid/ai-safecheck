import type { RiskLevel } from "@/features/scan/types/scan.types";

const LEVEL_LABELS: Record<RiskLevel, string> = {
  safe: "입력 가능",
  warning: "수정 필요",
  blocked: "입력 금지",
};

const LEVEL_DESCRIPTIONS: Record<RiskLevel, string> = {
  safe: "현재 기준에서 외부 AI 입력 전 차단이 필요한 항목은 발견되지 않았습니다.",
  warning: "외부 AI 입력 전에 일부 표현을 수정하는 것이 안전합니다.",
  blocked: "개인정보, 민감정보, 회사기밀 등 제거가 필요한 항목이 포함되어 있습니다.",
};

export default function RiskDecisionBanner({ level }: { level: RiskLevel }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm font-medium text-slate-500">최종 판정</p>
      <strong className="mt-2 block text-2xl font-bold text-slate-950">
        {LEVEL_LABELS[level]}
      </strong>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {LEVEL_DESCRIPTIONS[level]}
      </p>
    </div>
  );
}
