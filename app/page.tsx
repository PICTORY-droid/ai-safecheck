export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <section className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-medium text-slate-500">AI SafeCheck</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
            AI 입력 전 보안 검사
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            ChatGPT, Claude, Gemini 같은 외부 생성형 AI에 입력하기 전에 개인정보,
            회사기밀, 계약정보, 저작권 위험, 허위·과장 표현을 점검합니다.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/scan"
              className="inline-flex rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              검사 시작하기
            </a>
            <a
              href="/admin"
              className="inline-flex rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              관리자 정책 설정
            </a>
            <a
              href="/reports"
              className="inline-flex rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              리포트 보기
            </a>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-950">룰 기반 판정</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              LLM이 아니라 고정된 정책, 점수, 탐지기 기준으로 위험도를 계산합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-950">원문 저장 없음</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              검사 원문은 저장하지 않고, 안전 문장과 정책 메타데이터 중심으로 처리합니다.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-950">일관성 테스트</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              정책 버전과 회귀 테스트로 같은 입력에 같은 결과가 나오도록 관리합니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}