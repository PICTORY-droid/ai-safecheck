import type { ScanResult as ScanResultType } from "@/features/scan/types/scan.types";
import ConsistencyMeta from "./ConsistencyMeta";
import ExportReportButton from "./ExportReportButton.client";
import HighlightedText from "./HighlightedText";
import RiskCategoryList from "./RiskCategoryList";
import RiskDecisionBanner from "./RiskDecisionBanner";
import RiskEvidenceList from "./RiskEvidenceList";
import RiskScoreCard from "./RiskScoreCard";
import SafePromptPreview from "./SafePromptPreview";

export default function ScanResult({ result }: { result: ScanResultType }) {
  return (
    <section className="flex flex-col gap-5">
      <RiskDecisionBanner level={result.level} />

      <div className="grid gap-5 lg:grid-cols-[220px_1fr]">
        <RiskScoreCard score={result.score} />
        <RiskCategoryList risks={result.risks} />
      </div>

      <RiskEvidenceList matches={result.matches} />
      <HighlightedText text={result.safePrompt} />
      <SafePromptPreview safePrompt={result.safePrompt} summary={result.summary} />
      <ConsistencyMeta metadata={result.metadata} />

      <div className="flex justify-end">
        <ExportReportButton />
      </div>
    </section>
  );
}
