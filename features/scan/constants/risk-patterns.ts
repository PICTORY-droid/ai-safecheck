import type { RiskPolicyKey } from "./risk-policy";

export interface RegexRiskPattern {
  key: RiskPolicyKey;
  pattern: RegExp;
}

export interface KeywordRiskPattern {
  key: RiskPolicyKey;
  keywords: string[];
}

export const REGEX_RISK_PATTERNS: RegexRiskPattern[] = [
  {
    key: "personalPhone",
    pattern: /01[016789]-?\d{3,4}-?\d{4}/g,
  },
  {
    key: "personalEmail",
    pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
  },
  {
    key: "residentNumber",
    pattern: /\d{6}-?[1-4]\d{6}/g,
  },
  {
    key: "cardNumber",
    pattern: /\b(?:\d{4}[-\s]?){3}\d{4}\b/g,
  },
];

export const KEYWORD_RISK_PATTERNS: KeywordRiskPattern[] = [
  {
    key: "bankAccount",
    keywords: ["계좌번호", "입금계좌", "은행계좌"],
  },
  {
    key: "address",
    keywords: ["주소", "자택", "아파트", "번지", "동 호수"],
  },
  {
    key: "healthRecord",
    keywords: ["병력", "진료기록", "치료기록", "건강정보", "복용약", "진단명"],
  },
  {
    key: "consultingRecord",
    keywords: ["상담기록", "상담 내용", "고객 상담", "내담자"],
  },
  {
    key: "companyRevenue",
    keywords: ["매출", "월매출", "연매출", "분기 매출"],
  },
  {
    key: "internalStrategy",
    keywords: ["내부자료", "영업전략", "비공개", "기밀", "내부 전략"],
  },
  {
    key: "contractDocument",
    keywords: ["계약서", "계약 조건", "계약 조항", "견적서", "발주서", "세금계산서", "거래명세서"],
  },
  {
    key: "copyrightFullText",
    keywords: ["원문 그대로", "전문 그대로", "전체 복사", "전체 요약", "기사 전문", "책 전문", "강의자료 전문"],
  },
  {
    key: "guaranteeExpression",
    keywords: ["100% 보장", "완전 보장", "효과 보장"],
  },
  {
    key: "absoluteExpression",
    keywords: ["무조건", "반드시", "절대", "실패 없음"],
  },
  {
    key: "medicalCureExpression",
    keywords: ["완치", "부작용 없음", "치료 효과 보장"],
  },
  {
    key: "profitGuaranteeExpression",
    keywords: ["수익 보장", "매출 보장", "합격 보장"],
  },
];
