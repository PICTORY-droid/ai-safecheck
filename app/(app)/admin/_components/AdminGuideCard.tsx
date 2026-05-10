const GUIDE_STEPS = [
  {
    title: "1. 회사명 입력",
    description: "정책을 적용할 회사나 프로젝트 이름을 입력합니다.",
  },
  {
    title: "2. 회사별 금지어 입력",
    description: "거래처명, 내부 프로젝트명, 비공개 제품명처럼 외부 AI에 넣으면 안 되는 단어를 입력합니다.",
  },
  {
    title: "3. 보안 정책 확인",
    description: "원문 저장 금지와 선택적 LLM 재작성 사용 여부를 확인합니다.",
  },
  {
    title: "4. 정책 저장",
    description: "MVP 단계에서는 서버가 아니라 현재 브라우저에만 정책을 저장합니다.",
  },
];

export default function AdminGuideCard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <p className="text-sm font-medium text-slate-500">How to use</p>
        <h2 className="mt-2 text-xl font-bold text-slate-950">관리자 설정 사용 방법</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          회사별로 외부 AI 입력 전 차단하거나 주의해야 할 정책을 정리합니다.
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
