import {
  DETECTOR_VERSION,
  RISK_SCORE_VERSION,
  SCAN_POLICY_VERSION,
} from "@/features/scan/constants/policy-version";

export default function ReportPolicyMeta() {
  return (
    <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-950">리포트 정책</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        현재 리포트는 원문 저장 없이 안전 문장, 점수, 탐지 카테고리, 정책 버전만 기준으로 생성합니다.
      </p>

      <dl className="mt-5 space-y-4 text-sm">
        <div>
          <dt className="text-slate-500">원문 저장</dt>
          <dd className="font-medium text-slate-950">저장 안 함</dd>
        </div>
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
      </dl>
    </aside>
  );
}
