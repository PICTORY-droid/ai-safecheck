import { describe, expect, it } from "vitest";
import { DETECTOR_VERSION, RISK_SCORE_VERSION, SCAN_POLICY_VERSION } from "../../constants/policy-version";
import { scanText } from "../scan-text";
import { scanFixtures } from "./scan-fixtures";

describe("scanText", () => {
  it.each(scanFixtures)("$name", (fixture) => {
    const result = scanText(fixture.input);

    expect(result.level).toBe(fixture.expectedLevel);
    expect(result.score).toBeGreaterThanOrEqual(fixture.minScore);

    for (const expectedCategory of fixture.expectedCategories) {
      expect(result.risks.some((risk) => risk.category === expectedCategory)).toBe(true);
    }

    if (fixture.expectedCategories.length === 0) {
      expect(result.risks).toHaveLength(0);
      expect(result.matches).toHaveLength(0);
    }

    expect(result.metadata.policyVersion).toBe(SCAN_POLICY_VERSION);
    expect(result.metadata.scoreVersion).toBe(RISK_SCORE_VERSION);
    expect(result.metadata.detectorVersion).toBe(DETECTOR_VERSION);
    expect(result.metadata.llmUsed).toBe(false);
    expect(result.metadata.llmModel).toBeNull();
    expect(result.metadata.temperature).toBeNull();
  });

  it("returns a safe prompt with detected values replaced", () => {
    const result = scanText("고객 전화번호 010-1234-5678로 안내문을 작성해줘.");

    expect(result.safePrompt).not.toContain("010-1234-5678");
    expect(result.safePrompt).toContain("[전화번호 삭제]");
  });
});
