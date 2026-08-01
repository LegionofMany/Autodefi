import type { AuditMetric } from './types';

export type EmploymentVerification = {
  label: string;
  value: string;
  status: 'Verified' | 'Pass' | 'Review' | 'Fail';
  reasonCode: string;
};

export type EmploymentAuditModule = {
  id: 'employment-audit';
  moduleNumber: 3;
  totalModules: 14;
  title: string;
  subtitle: string;
  confidence: number;
  employerName: string;
  jobTitle: string;
  tenure: string;
  industry: string;
  employmentType: string;
  verificationStatus: string;
  stabilityScore: number;
  riskAdjustment: string;
  decisionImpact: string;
  verificationSignals: EmploymentVerification[];
  stabilityMetrics: AuditMetric[];
  riskMetrics: AuditMetric[];
  v1DecisionUse: string;
  v2ShadowAuditUse: string;
  reasonCodes: string[];
};

export const employmentAuditModule: EmploymentAuditModule = {
  id: 'employment-audit',
  moduleNumber: 3,
  totalModules: 14,
  title: '3. EMPLOYMENT AUDIT',
  subtitle: 'Employer verification, tenure stability, industry risk, continuity, and repayment confidence.',
  confidence: 92,
  employerName: 'Northstar Logistics Group',
  jobTitle: 'Operations Coordinator',
  tenure: '2.8 Years',
  industry: 'Logistics / Supply Chain',
  employmentType: 'Full-Time Permanent',
  verificationStatus: 'Verified',
  stabilityScore: 86,
  riskAdjustment: '-8%',
  decisionImpact: '+12%',
  verificationSignals: [
    { label: 'Employer Match', value: 'Northstar Logistics Group', status: 'Verified', reasonCode: 'EMPLOYMENT_EMPLOYER_MATCH_VERIFIED' },
    { label: 'Job Title Match', value: 'Operations Coordinator', status: 'Verified', reasonCode: 'EMPLOYMENT_TITLE_MATCH_VERIFIED' },
    { label: 'Tenure', value: '2.8 Years', status: 'Pass', reasonCode: 'EMPLOYMENT_TENURE_STABLE' },
    { label: 'Employment Type', value: 'Full-Time Permanent', status: 'Pass', reasonCode: 'EMPLOYMENT_TYPE_STABLE' },
    { label: 'Recent Gap', value: 'None', status: 'Pass', reasonCode: 'EMPLOYMENT_NO_RECENT_GAP' },
    { label: 'Pay Continuity', value: 'Consistent', status: 'Pass', reasonCode: 'EMPLOYMENT_PAY_CONTINUITY_CONFIRMED' }
  ],
  stabilityMetrics: [
    { label: 'Employment Stability', value: '86%', detail: 'Good', tone: 'green', score: 86 },
    { label: 'Tenure Score', value: '84%', detail: '2.8 years', tone: 'green', score: 84 },
    { label: 'Industry Stability', value: '82%', detail: 'Moderate-low risk', tone: 'green', score: 82 },
    { label: 'Income Continuity', value: '94%', detail: 'Consistent payroll', tone: 'green', score: 94 },
    { label: 'Employment Gap Risk', value: 'Low', detail: 'No recent gap', tone: 'green', score: 92 },
    { label: 'Verification Result', value: 'Pass', detail: 'Eligible', tone: 'cyan', score: 92 }
  ],
  riskMetrics: [
    { label: 'Layoff Exposure', value: 'Low', detail: 'Stable sector role', tone: 'green', score: 82 },
    { label: 'Seasonality Risk', value: 'Low', detail: 'Permanent role', tone: 'green', score: 88 },
    { label: 'Role Continuity', value: 'Strong', detail: 'Consistent title', tone: 'green', score: 86 },
    { label: 'Employer Confidence', value: 'Verified', detail: 'Identity match', tone: 'green', score: 94 }
  ],
  v1DecisionUse:
    'V1 uses employer verification, job-title match, full-time employment type, tenure, pay continuity, and employment gap risk to support approval probability and affordability confidence.',
  v2ShadowAuditUse:
    'V2 audits whether employment tenure, industry stability, role continuity, and verified payroll continuity correctly predict repayment performance, early delinquency, and default risk across market cycles.',
  reasonCodes: [
    'EMPLOYMENT_VERIFIED_STABLE',
    'EMPLOYMENT_EMPLOYER_MATCH_VERIFIED',
    'EMPLOYMENT_TITLE_MATCH_VERIFIED',
    'EMPLOYMENT_TENURE_STABLE',
    'EMPLOYMENT_TYPE_STABLE',
    'EMPLOYMENT_NO_RECENT_GAP',
    'EMPLOYMENT_PAY_CONTINUITY_CONFIRMED'
  ]
};
