export default function MarketingPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <section className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium text-slate-500">AI SafeCheck</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
          AI 입력 전 보안 검사
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          외부 생성형 AI에 입력하기 전 개인정보, 회사기밀, 계약정보, 저작권 위험,
          허위·과장 표현을 점검합니다.
        </p>
        <a
          href="/scan"
          className="mt-6 inline-flex rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          검사 시작하기
        </a>
      </section>
    </main>
  );
}
