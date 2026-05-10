import { describe, expect, it } from "vitest";
import type { RiskFinding } from "../../types/risk.types";
import { calculateRiskScore } from "../calculate-risk-score";
import { decideRiskLevel } from "../decide-risk-level";

function createFinding(weight: number): RiskFinding {
  return {
    id: `test:${weight}`,
    category: "personalInfo",
    label: "테스트 위험",
    description: "테스트용 위험 항목입니다.",
    value: "test",
    startIndex: 0,
    endIndex: 4,
    weight,
    severity: "medium",
    source: "rule",
    action: "warn",
  };
}

describe("risk score calculation", () => {
  it("returns 0 when there are no findings", () => {
    expect(calculateRiskScore([])).toBe(0);
  });

  it("sums finding weights", () => {
    const score = calculateRiskScore([
      createFinding(20),
      createFinding(25),
    ]);

    expect(score).toBe(45);
  });

  it("caps the score at 100", () => {
    const score = calculateRiskScore([
      createFinding(80),
      createFinding(50),
    ]);

    expect(score).toBe(100);
  });
});

describe("risk level decision", () => {
  it("returns safe for scores from 0 to 30", () => {
    expect(decideRiskLevel(0)).toBe("safe");
    expect(decideRiskLevel(30)).toBe("safe");
  });

  it("returns warning for scores from 31 to 70", () => {
    expect(decideRiskLevel(31)).toBe("warning");
    expect(decideRiskLevel(70)).toBe("warning");
  });

  it("returns blocked for scores from 71 to 100", () => {
    expect(decideRiskLevel(71)).toBe("blocked");
    expect(decideRiskLevel(100)).toBe("blocked");
  });
});
