import { acquireMember, Member } from "./common";

// 클라이언트 1
// 통상 임금 계산 (세전 월 급여 / 월 총 근무시간) * 하루평균 근무 시간
const rawMember = acquireMember();
const aMember = new Member(rawMember);
export const basicWage = aMember.basicWage;
