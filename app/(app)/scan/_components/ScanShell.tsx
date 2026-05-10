import ScanInput from "./ScanInput.client";

export default function ScanShell() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <section className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-medium text-slate-500">AI SafeCheck</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            AI 입력 전 보안 검사
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            ChatGPT, Claude, Gemini 같은 외부 생성형 AI에 입력하기 전에 개인정보,
            회사기밀, 계약정보, 저작권 위험, 허위·과장 표현을 점검합니다.
          </p>
        </div>

        <ScanInput />
      </section>
    </main>
  );
}
