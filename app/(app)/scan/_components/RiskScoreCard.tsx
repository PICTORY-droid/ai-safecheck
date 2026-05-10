export default function RiskScoreCard({ score }: { score: number }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-sm font-medium text-slate-500">위험 점수</p>
      <div className="mt-2 flex items-end gap-2">
        <strong className="text-4xl font-bold text-slate-950">{score}</strong>
        <span className="pb-1 text-sm text-slate-500">/ 100</span>
      </div>
    </div>
  );
}
