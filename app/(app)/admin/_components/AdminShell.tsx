import AdminGuideCard from "./AdminGuideCard";
import CompanyPolicyForm from "./CompanyPolicyForm.client";
import PolicyVersionCard from "./PolicyVersionCard";
import SensitiveKeywordTable from "./SensitiveKeywordTable";

export default function AdminShell() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <section className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Admin Policy</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            관리자 정책 설정
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            회사별 금지어, 원문 저장 정책, LLM 재작성 사용 여부를 설정합니다.
            MVP 단계에서는 브라우저 localStorage에만 저장하며 서버 DB에는 저장하지 않습니다.
          </p>
        </div>

        <AdminGuideCard />

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <CompanyPolicyForm />
          <PolicyVersionCard />
        </div>

        <SensitiveKeywordTable />
      </section>
    </main>
  );
}
