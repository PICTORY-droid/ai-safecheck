"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ai-safecheck-admin-policy";

interface AdminPolicyState {
  companyName: string;
  sensitiveKeywords: string;
  blockOriginalStorage: boolean;
  enableLlmRewrite: boolean;
}

const DEFAULT_POLICY: AdminPolicyState = {
  companyName: "",
  sensitiveKeywords: "",
  blockOriginalStorage: true,
  enableLlmRewrite: false,
};

export default function CompanyPolicyForm() {
  const [policy, setPolicy] = useState<AdminPolicyState>(DEFAULT_POLICY);
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  useEffect(() => {
    const savedPolicy = window.localStorage.getItem(STORAGE_KEY);

    if (!savedPolicy) {
      return;
    }

    try {
      const parsedPolicy = JSON.parse(savedPolicy) as AdminPolicyState;

      setPolicy({
        companyName: parsedPolicy.companyName ?? "",
        sensitiveKeywords: parsedPolicy.sensitiveKeywords ?? "",
        blockOriginalStorage: parsedPolicy.blockOriginalStorage ?? true,
        enableLlmRewrite: parsedPolicy.enableLlmRewrite ?? false,
      });
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  function updatePolicy(nextPolicy: Partial<AdminPolicyState>) {
    setPolicy((currentPolicy) => ({
      ...currentPolicy,
      ...nextPolicy,
    }));
    setSavedMessage(null);
  }

  function handleSave() {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(policy));
    setSavedMessage("관리자 정책이 이 브라우저에 저장되었습니다.");
  }

  function handleReset() {
    window.localStorage.removeItem(STORAGE_KEY);
    setPolicy(DEFAULT_POLICY);
    setSavedMessage("관리자 정책 설정을 초기화했습니다.");
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-950">회사 정책 설정</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        현재 MVP에서는 입력한 정책을 서버에 저장하지 않고 이 브라우저에만 저장합니다.
      </p>

      <div className="mt-6 flex flex-col gap-5">
        <div>
          <label htmlFor="company-name" className="text-sm font-semibold text-slate-900">
            회사명
          </label>
          <input
            id="company-name"
            value={policy.companyName}
            onChange={(event) => updatePolicy({ companyName: event.target.value })}
            placeholder="예: AI 세이프체크"
            className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
          />
        </div>

        <div>
          <label htmlFor="sensitive-keywords" className="text-sm font-semibold text-slate-900">
            회사별 금지어
          </label>
          <textarea
            id="sensitive-keywords"
            value={policy.sensitiveKeywords}
            onChange={(event) => updatePolicy({ sensitiveKeywords: event.target.value })}
            placeholder="거래처명, 내부 프로젝트명, 비공개 제품명 등을 줄바꿈으로 입력하세요."
            className="mt-2 min-h-36 w-full resize-y rounded-2xl border border-slate-300 bg-white p-4 text-sm leading-6 text-slate-900 outline-none transition focus:border-slate-900"
          />
        </div>

        <div className="space-y-3 rounded-2xl bg-slate-50 p-4">
          <label className="flex items-start gap-3 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={policy.blockOriginalStorage}
              onChange={(event) => updatePolicy({ blockOriginalStorage: event.target.checked })}
              className="mt-1"
            />
            <span>
              <strong className="block text-slate-950">원문 저장 금지</strong>
              검사 원문을 서버에 저장하지 않는 정책을 기본값으로 유지합니다.
            </span>
          </label>

          <label className="flex items-start gap-3 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={policy.enableLlmRewrite}
              onChange={(event) => updatePolicy({ enableLlmRewrite: event.target.checked })}
              className="mt-1"
            />
            <span>
              <strong className="block text-slate-950">선택적 LLM 재작성 사용</strong>
              민감정보가 마스킹된 문장에 한해 재작성 기능을 사용할 수 있게 합니다.
            </span>
          </label>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleSave}
            className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            정책 저장
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            초기화
          </button>
        </div>

        {savedMessage ? (
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {savedMessage}
          </p>
        ) : null}
      </div>
    </section>
  );
}
