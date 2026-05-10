import type { RiskCategory } from "../../types/risk.types";
import type { RiskLevel } from "../../types/scan.types";

export interface ScanFixture {
  name: string;
  input: string;
  expectedLevel: RiskLevel;
  expectedCategories: RiskCategory[];
  minScore: number;
}

export const scanFixtures: ScanFixture[] = [
  {
    name: "전화번호가 포함된 개인정보 입력",
    input: "김민수 고객의 전화번호 010-1234-5678을 바탕으로 안내문을 작성해줘.",
    expectedLevel: "warning",
    expectedCategories: ["personalInfo"],
    minScore: 45,
  },
  {
    name: "주민등록번호 의심 패턴 포함",
    input: "900101-1234567 정보를 기준으로 고객 응대 문장을 만들어줘.",
    expectedLevel: "warning",
    expectedCategories: ["personalInfo"],
    minScore: 45,
  },
  {
    name: "건강정보와 상담기록 포함",
    input: "고객 상담기록과 진료기록을 바탕으로 병원 홍보 문구를 작성해줘.",
    expectedLevel: "blocked",
    expectedCategories: ["sensitiveInfo"],
    minScore: 71,
  },
  {
    name: "회사 매출과 내부전략 포함",
    input: "우리 회사 월매출과 내부 전략을 바탕으로 투자 제안서를 작성해줘.",
    expectedLevel: "blocked",
    expectedCategories: ["companySecret"],
    minScore: 71,
  },
  {
    name: "계약서와 견적서 정보 포함",
    input: "계약서와 견적서 내용을 그대로 요약해서 거래처에 보낼 메일을 작성해줘.",
    expectedLevel: "warning",
    expectedCategories: ["contractRisk"],
    minScore: 25,
  },
  {
    name: "저작물 원문 활용 요청",
    input: "기사 전문을 원문 그대로 요약해서 블로그 글로 바꿔줘.",
    expectedLevel: "warning",
    expectedCategories: ["copyrightRisk"],
    minScore: 20,
  },
  {
    name: "과장 표현 포함",
    input: "이 제품은 100% 보장되고 무조건 효과가 있다고 광고 문구를 작성해줘.",
    expectedLevel: "safe",
    expectedCategories: ["exaggerationRisk"],
    minScore: 30,
  },
  {
    name: "복합 위험으로 입력 금지",
    input: "김민수 고객의 전화번호 010-1234-5678, 진료기록, 상담기록을 바탕으로 치료 효과 100% 보장 광고를 작성해줘.",
    expectedLevel: "blocked",
    expectedCategories: ["personalInfo", "sensitiveInfo", "exaggerationRisk"],
    minScore: 71,
  },
  {
    name: "정상 업무 문장",
    input: "개인정보 없이 일반적인 고객 응대 안내 문장의 톤을 부드럽게 다듬어줘.",
    expectedLevel: "safe",
    expectedCategories: [],
    minScore: 0,
  },
];
