import { describe, expect, it } from "vitest";
import { detectCompanySecret } from "../detectors/detect-company-secret";
import { detectContractRisk } from "../detectors/detect-contract-risk";
import { detectCopyrightRisk } from "../detectors/detect-copyright-risk";
import { detectExaggerationRisk } from "../detectors/detect-exaggeration-risk";
import { detectPersonalInfo } from "../detectors/detect-personal-info";
import { detectSensitiveInfo } from "../detectors/detect-sensitive-info";

describe("rule based detectors", () => {
  it("detects personal phone numbers", () => {
    const findings = detectPersonalInfo("고객 전화번호는 010-1234-5678입니다.");

    expect(findings.some((finding) => finding.label === "전화번호")).toBe(true);
  });

  it("detects email addresses", () => {
    const findings = detectPersonalInfo("담당자 이메일은 test@example.com 입니다.");

    expect(findings.some((finding) => finding.label === "이메일")).toBe(true);
  });

  it("detects sensitive health records", () => {
    const findings = detectSensitiveInfo("진료기록을 바탕으로 답변을 작성해줘.");

    expect(findings.some((finding) => finding.category === "sensitiveInfo")).toBe(true);
  });

  it("detects company secret keywords", () => {
    const findings = detectCompanySecret("월매출과 내부 전략을 정리해줘.");

    expect(findings.some((finding) => finding.category === "companySecret")).toBe(true);
  });

  it("detects contract risk keywords", () => {
    const findings = detectContractRisk("계약서와 견적서 내용을 요약해줘.");

    expect(findings.some((finding) => finding.category === "contractRisk")).toBe(true);
  });

  it("detects copyright risk keywords", () => {
    const findings = detectCopyrightRisk("기사 전문을 원문 그대로 요약해줘.");

    expect(findings.some((finding) => finding.category === "copyrightRisk")).toBe(true);
  });

  it("detects exaggeration risk keywords", () => {
    const findings = detectExaggerationRisk("100% 보장 문구로 광고를 작성해줘.");

    expect(findings.some((finding) => finding.category === "exaggerationRisk")).toBe(true);
  });
});
