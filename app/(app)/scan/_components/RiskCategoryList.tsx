import type { RiskCategorySummary } from "@/features/scan/types/risk.types";

export default function RiskCategoryList({ risks }: { risks: RiskCategorySummary[] }) {
  if (risks.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-base font-semibold text-slate-950">탐지된 위험 항목</h2>
        <p className="mt-2 text-sm text-slate-500">탐지된 위험 항목이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h2 className="text-base font-semibold text-slate-950">탐지된 위험 항목</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {risks.map((risk) => (
          <span
            key={risk.category}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
          >
            {risk.label} {risk.count}건
          </span>
        ))}
      </div>
    </div>
  );
}
