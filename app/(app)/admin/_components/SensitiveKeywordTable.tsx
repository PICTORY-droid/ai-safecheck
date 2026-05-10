const EXAMPLE_KEYWORDS = [
  {
    label: "거래처명",
    value: "A거래처, B고객사",
    description: "외부 AI 입력 전 마스킹이 필요한 고객사명입니다.",
  },
  {
    label: "내부 프로젝트명",
    value: "Project Alpha",
    description: "출시 전 서비스나 내부 코드명을 관리합니다.",
  },
  {
    label: "비공개 경영정보",
    value: "월매출, 투자유치, 내부전략",
    description: "외부 AI에 그대로 넣으면 안 되는 회사 내부정보입니다.",
  },
];

export default function SensitiveKeywordTable() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold text-slate-950">기본 관리 대상</h2>
        <p className="text-sm leading-6 text-slate-600">
          MVP 단계에서는 아래 항목을 기준으로 회사별 금지어를 관리합니다.
        </p>
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-semibold">구분</th>
              <th className="px-4 py-3 font-semibold">예시</th>
              <th className="px-4 py-3 font-semibold">설명</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {EXAMPLE_KEYWORDS.map((keyword) => (
              <tr key={keyword.label}>
                <td className="px-4 py-3 font-medium text-slate-900">{keyword.label}</td>
                <td className="px-4 py-3 text-slate-700">{keyword.value}</td>
                <td className="px-4 py-3 text-slate-600">{keyword.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
