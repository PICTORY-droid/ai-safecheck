const GUIDE_STEPS = [
  {
    title: "1. AI에 넣을 문장 붙여넣기",
    description: "ChatGPT, Claude, Gemini 등에 입력하려는 문장을 그대로 붙여넣습니다.",
  },
  {
    title: "2. 검사하기 클릭",
    description: "개인정보, 회사기밀, 계약정보, 저작권 위험, 허위·과장 표현을 점검합니다.",
  },
  {
    title: "3. 위험 항목 확인",
    description: "탐지 근거, 위험 점수, 최종 판정을 확인하고 입력 가능 여부를 판단합니다.",
  },
  {
    title: "4. 안전 문장 사용",
    description: "위험값이 제거된 안전 문장을 복사하거나 리포트 출력 기능을 사용합니다.",
  },
];

export default function ScanGuideCard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <p className="text-sm font-medium text-slate-500">How to use</p>
        <h2 className="mt-2 text-xl font-bold text-slate-950">검사하기 사용 방법</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          외부 AI에 입력하기 전, 민감한 정보와 위험한 표현이 포함되어 있는지 먼저 확인하세요.
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