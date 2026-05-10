const QUICK_START_STEPS = [
  {
    title: "1. 검사하기",
    description: "외부 AI에 입력하려는 문장을 붙여넣고 개인정보, 회사기밀, 위험 표현을 점검합니다.",
  },
  {
    title: "2. 안전 문장 확인",
    description: "탐지된 위험 항목과 점수를 확인한 뒤, 위험값이 제거된 안전 문장을 사용합니다.",
  },
  {
    title: "3. 관리자 정책 설정",
    description: "회사명과 금지어를 등록하고, 원문 저장 금지 정책을 확인합니다.",
  },
  {
    title: "4. 리포트 출력",
    description: "필요한 경우 검사 결과 화면에서 브라우저 출력으로 PDF를 저장합니다.",
  },
];

export default function HomeQuickStart() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div>
        <p className="text-sm font-medium text-slate-500">Quick Start</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
          처음 사용하는 순서
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          AI SafeCheck는 검사, 안전 문장 확인, 관리자 정책 설정, 리포트 출력 순서로 사용하면 됩니다.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {QUICK_START_STEPS.map((step) => (
          <div key={step.title} className="rounded-2xl bg-slate-50 p-5">
            <h3 className="text-sm font-semibold text-slate-950">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
