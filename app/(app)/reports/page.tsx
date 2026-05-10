import ReportFilters from "./_components/ReportFilters.client";
import ReportGuideCard from "./_components/ReportGuideCard";
import ReportList from "./_components/ReportList";
import ReportPolicyMeta from "./_components/ReportPolicyMeta";

export const metadata = {
  title: "검사 리포트 | AI 세이프체크",
  description: "AI 입력 전 보안 검사 결과 리포트와 정책 메타데이터를 확인합니다.",
};

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <section className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Reports</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            검사 리포트
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            MVP 단계에서는 검사 원문과 리포트를 서버에 저장하지 않습니다.
            검사 결과는 브라우저 출력 기능으로 저장하거나 PDF로 인쇄할 수 있습니다.
          </p>
        </div>

        <ReportGuideCard />

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <ReportList />
          <ReportPolicyMeta />
        </div>

        <ReportFilters />
      </section>
    </main>
  );
}
