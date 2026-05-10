import {
  DETECTOR_VERSION,
  RISK_SCORE_VERSION,
  SAFE_REWRITE_PROMPT_VERSION,
  SCAN_POLICY_VERSION,
} from "@/features/scan/constants/policy-version";

export default function PolicyVersionCard() {
  return (
    <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-950">정책 버전</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        검사 결과 일관성을 위해 정책, 점수, 탐지기, 재작성 프롬프트 버전을 분리해 관리합니다.
      </p>

      <dl className="mt-5 space-y-4 text-sm">
        <div>
          <dt className="text-slate-500">검사 정책</dt>
          <dd className="font-medium text-slate-950">{SCAN_POLICY_VERSION}</dd>
        </div>
        <div>
          <dt className="text-slate-500">점수 정책</dt>
          <dd className="font-medium text-slate-950">{RISK_SCORE_VERSION}</dd>
        </div>
        <div>
          <dt className="text-slate-500">탐지기</dt>
          <dd className="font-medium text-slate-950">{DETECTOR_VERSION}</dd>
        </div>
        <div>
          <dt className="text-slate-500">LLM 재작성</dt>
          <dd className="font-medium text-slate-950">{SAFE_REWRITE_PROMPT_VERSION}</dd>
        </div>
      </dl>
    </aside>
  );
}
