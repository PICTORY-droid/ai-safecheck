export default function ReportList() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-950">저장된 리포트</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        현재 MVP 단계에서는 검사 원문과 리포트를 서버에 저장하지 않습니다.
      </p>

      <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
        <p className="text-sm font-semibold text-slate-900">저장된 리포트가 없습니다.</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          검사 결과 화면에서 브라우저 출력 기능을 사용해 리포트를 PDF로 저장할 수 있습니다.
        </p>
      </div>
    </section>
  );
}
