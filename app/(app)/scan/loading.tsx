export default function ScanLoading() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <section className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium text-slate-500">AI SafeCheck</p>
        <h1 className="mt-3 text-2xl font-bold text-slate-950">검사 화면을 불러오는 중입니다.</h1>
        <div className="mt-6 h-40 animate-pulse rounded-2xl bg-slate-100" />
      </section>
    </main>
  );
}
