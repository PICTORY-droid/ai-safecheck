import type { ScanMetadata } from "@/features/scan/types/scan.types";

export default function ConsistencyMeta({ metadata }: { metadata: ScanMetadata }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h2 className="text-base font-semibold text-slate-950">정책·일관성 메타데이터</h2>
      <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-slate-500">정책 버전</dt>
          <dd className="font-medium text-slate-900">{metadata.policyVersion}</dd>
        </div>
        <div>
          <dt className="text-slate-500">점수 버전</dt>
          <dd className="font-medium text-slate-900">{metadata.scoreVersion}</dd>
        </div>
        <div>
          <dt className="text-slate-500">탐지기 버전</dt>
          <dd className="font-medium text-slate-900">{metadata.detectorVersion}</dd>
        </div>
        <div>
          <dt className="text-slate-500">LLM 사용</dt>
          <dd className="font-medium text-slate-900">{metadata.llmUsed ? "사용" : "미사용"}</dd>
        </div>
      </dl>
    </div>
  );
}
