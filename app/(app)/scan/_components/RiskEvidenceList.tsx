import type { RiskFinding } from "@/features/scan/types/risk.types";

export default function RiskEvidenceList({ matches }: { matches: RiskFinding[] }) {
  if (matches.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-base font-semibold text-slate-950">탐지 근거</h2>
        <p className="mt-2 text-sm text-slate-500">표시할 탐지 근거가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h2 className="text-base font-semibold text-slate-950">탐지 근거</h2>
      <div className="mt-4 divide-y divide-slate-100">
        {matches.map((match) => (
          <div key={match.id} className="py-3 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-medium text-slate-900">{match.label}</p>
              <span className="text-xs text-slate-500">
                {match.severity} · {match.weight}점
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-600">{match.description}</p>
            <code className="mt-2 block rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700">
              {match.value}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
}
