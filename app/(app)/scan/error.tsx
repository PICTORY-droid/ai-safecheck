"use client";

export default function ScanError({ reset }: { reset: () => void }) {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <section className="mx-auto max-w-5xl rounded-3xl border border-red-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium text-red-600">오류 발생</p>
        <h1 className="mt-3 text-2xl font-bold text-slate-950">
          검사 화면을 표시하는 중 문제가 발생했습니다.
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          일시적인 오류일 수 있습니다. 다시 시도해 주세요.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          다시 시도
        </button>
      </section>
    </main>
  );
}
