"use client";

import { useState } from "react";

export default function ReportFilters() {
  const [query, setQuery] = useState("");

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-950">리포트 필터</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        DB 저장 기능이 추가되면 날짜, 위험 등급, 정책 버전 기준으로 리포트를 필터링합니다.
      </p>

      <div className="mt-5">
        <label htmlFor="report-query" className="text-sm font-semibold text-slate-900">
          검색어
        </label>
        <input
          id="report-query"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="현재 MVP에서는 검색 결과가 저장되지 않습니다."
          className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
        />
      </div>

      <p className="mt-4 text-xs leading-5 text-slate-500">
        입력값은 화면 상태로만 유지되며 서버에 저장되지 않습니다.
      </p>
    </section>
  );
}
