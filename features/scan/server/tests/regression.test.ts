import { describe, expect, it } from "vitest";
import {
  DETECTOR_VERSION,
  RISK_SCORE_VERSION,
  SCAN_POLICY_VERSION,
} from "../../constants/policy-version";
import { scanText } from "../scan-text";
import { scanFixtures } from "./scan-fixtures";

describe("scan regression", () => {
  it("keeps scan results aligned with fixture expectations", () => {
    for (const fixture of scanFixtures) {
      const result = scanText(fixture.input);

      expect(result.level).toBe(fixture.expectedLevel);
      expect(result.score).toBeGreaterThanOrEqual(fixture.minScore);

      for (const expectedCategory of fixture.expectedCategories) {
        expect(result.risks.some((risk) => risk.category === expectedCategory)).toBe(true);
      }

      expect(result.metadata.policyVersion).toBe(SCAN_POLICY_VERSION);
      expect(result.metadata.scoreVersion).toBe(RISK_SCORE_VERSION);
      expect(result.metadata.detectorVersion).toBe(DETECTOR_VERSION);
      expect(result.metadata.llmUsed).toBe(false);
    }
  });

  it("does not use LLM for core scan decisions", () => {
    const result = scanText("010-1234-5678 고객 상담기록을 바탕으로 답변 작성해줘.");

    expect(result.metadata.llmUsed).toBe(false);
    expect(result.metadata.llmModel).toBeNull();
    expect(result.metadata.temperature).toBeNull();
  });
});
