import type { RiskCategory, RiskFinding } from "../types/risk.types";

function hasCategory(findings: RiskFinding[], category: RiskCategory): boolean {
  return findings.some((finding) => finding.category === category);
}

function hasLabel(findings: RiskFinding[], label: string): boolean {
  return findings.some((finding) => finding.label === label);
}

function getReplacementText(finding: RiskFinding): string {
  if (finding.action === "block" || finding.action === "mask") {
    return `[${finding.label} 삭제]`;
  }

  if (finding.action === "generalize") {
    return `[${finding.label} 일반화]`;
  }

  if (finding.action === "soften") {
    return "단정하지 않는 표현";
  }

  if (finding.action === "warn") {
    return `[${finding.label} 확인 필요]`;
  }

  return finding.value;
}

function buildStructuredSafePrompt(findings: RiskFinding[]): string | null {
  const hasPersonalInfo = hasCategory(findings, "personalInfo");
  const hasSensitiveInfo = hasCategory(findings, "sensitiveInfo");
  const hasExaggerationRisk = hasCategory(findings, "exaggerationRisk");

  if (hasPersonalInfo && hasSensitiveInfo && hasExaggerationRisk) {
    return [
      "[고객명 삭제] 고객의 개인정보와 민감정보를 제외하고, 일반적인 서비스 안내 광고 문구를 작성해줘.",
      "치료 효과는 단정하지 않는 표현으로 작성해줘.",
    ].join(" ");
  }

  if (hasPersonalInfo && hasSensitiveInfo) {
    return "[고객명 삭제] 고객의 개인정보와 민감정보를 제외하고, 일반적인 안내 문구를 작성해줘.";
  }

  if (hasPersonalInfo && hasLabel(findings, "전화번호")) {
    return "[고객명 삭제] 고객의 전화번호 등 개인정보를 제외하고, 일반적인 안내 문구를 작성해줘.";
  }

  if (hasExaggerationRisk) {
    return "보장이나 단정 표현을 제외하고, 사실 기반의 일반적인 안내 문구를 작성해줘.";
  }

  return null;
}

export function buildSafePrompt(text: string, findings: RiskFinding[]): string {
  if (findings.length === 0) {
    return text;
  }

  const structuredSafePrompt = buildStructuredSafePrompt(findings);

  if (structuredSafePrompt) {
    return structuredSafePrompt;
  }

  const sortedFindings = [...findings].sort((a, b) => b.startIndex - a.startIndex);
  let safePrompt = text;

  for (const finding of sortedFindings) {
    const before = safePrompt.slice(0, finding.startIndex);
    const after = safePrompt.slice(finding.endIndex);
    const replacement = getReplacementText(finding);

    safePrompt = `${before}${replacement}${after}`;
  }

  return safePrompt;
}