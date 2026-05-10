const GUIDE_STEPS = [
  {
    title: "1. 검사 결과 확인",
    description: "먼저 검사하기 화면에서 입력문을 점검하고 위험 점수와 안전 문장을 확인합니다.",
  },
  {
    title: "2. 리포트 출력 클릭",
    description: "검사 결과 하단의 리포트 출력 버튼을 눌러 브라우저 인쇄 화면을 엽니다.",
  },
  {
    title: "3. PDF로 저장",
    description: "브라우저 인쇄 옵션에서 PDF로 저장을 선택하면 로컬 파일로 보관할 수 있습니다.",
  },
  {
    title: "4. 서버 저장 없음 확인",
    description: "MVP 단계에서는 검사 원문과 리포트를 서버에 저장하지 않습니다.",
  },
];

export default function ReportGuideCard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <p className="text-sm font-medium text-slate-500">How to use</p>
        <h2 className="mt-2 text-xl font-bold text-slate-950">리포트 사용 방법</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          검사 결과를 외부 저장소에 남기지 않고, 필요한 경우 브라우저에서 직접 출력합니다.
        </p>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {GUIDE_STEPS.map((step) => (
          <div key={step.title} className="rounded-2xl bg-slate-50 p-4">
            <h3 className="text-sm font-semibold text-slate-950">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
