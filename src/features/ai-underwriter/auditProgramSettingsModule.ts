import type { AuditMetric } from './types';

export type AuditSettingSignal = {
  label: string;
  value: string;
  status: 'Locked' | 'Enabled' | 'Required' | 'Review';
  reasonCode: string;
};

export type AuditProgramSettingsModule = {
  id: 'audit-program-settings';
  moduleNumber: 15;
  totalModules: 15;
  title: string;
  subtitle: string;
  confidence: number;
  operatingMode: string;
  v1DecisionMode: string;
  v2AuditMode: string;
  promotionGate: string;
  retentionPolicy: string;
  rollbackPolicy: string;
  governanceStatus: string;
  settingsSignals: AuditSettingSignal[];
  controlMetrics: AuditMetric[];
  governanceMetrics: AuditMetric[];
  v1DecisionUse: string;
  v2ShadowAuditUse: string;
  reasonCodes: string[];
};

export const auditProgramSettingsModule: AuditProgramSettingsModule = {
  id: 'audit-program-settings',
  moduleNumber: 15,
  totalModules: 15,
  title: '15. AUDIT PROGRAM SETTINGS',
  subtitle: 'Program controls, shadow-mode policy, promotion gates, reason-code governance, retention, rollback, and model-audit settings.',
  confidence: 95,
  operatingMode: 'Governance Locked',
  v1DecisionMode: 'Production Decision Engine',
  v2AuditMode: 'Shadow Audit Only',
  promotionGate: 'Human Governance Required',
  retentionPolicy: 'Seven-Year Audit Retention',
  rollbackPolicy: 'Versioned Rollback Ready',
  governanceStatus: 'Policy Controls Active',
  settingsSignals: [
    { label: 'V1 Decision Mode', value: 'Production', status: 'Enabled', reasonCode: 'SETTINGS_V1_PRODUCTION_ENABLED' },
    { label: 'V2 Shadow Mode', value: 'Audit Only', status: 'Locked', reasonCode: 'SETTINGS_V2_SHADOW_LOCKED' },
    { label: 'Human Promotion Gate', value: 'Required', status: 'Required', reasonCode: 'SETTINGS_HUMAN_PROMOTION_REQUIRED' },
    { label: 'Reason Codes', value: 'Required', status: 'Required', reasonCode: 'SETTINGS_REASON_CODES_REQUIRED' },
    { label: 'Rollback Policy', value: 'Ready', status: 'Locked', reasonCode: 'SETTINGS_ROLLBACK_READY' },
    { label: 'Audit Retention', value: '7 Years', status: 'Locked', reasonCode: 'SETTINGS_AUDIT_RETENTION_LOCKED' }
  ],
  controlMetrics: [
    { label: 'V1 Decision Control', value: 'Enabled', detail: 'Production engine remains source of action', tone: 'green', score: 94 },
    { label: 'V2 Mutation Control', value: 'Blocked', detail: 'Shadow model cannot change V1', tone: 'purple', score: 100 },
    { label: 'Promotion Approval', value: 'Required', detail: 'Human governance gate', tone: 'yellow', score: 96 },
    { label: 'Reason-Code Policy', value: 'Required', detail: 'Every outcome needs traceable codes', tone: 'green', score: 95 },
    { label: 'Audit Retention', value: '7 Years', detail: 'Program evidence retention', tone: 'cyan', score: 92 },
    { label: 'Rollback Path', value: 'Ready', detail: 'Versioned fallback path', tone: 'green', score: 94 }
  ],
  governanceMetrics: [
    { label: 'Drift Monitoring', value: 'Enabled', detail: 'Model and market drift tracked', tone: 'green', score: 92 },
    { label: 'Bias Review', value: 'Required', detail: 'Promotion evidence check', tone: 'yellow', score: 90 },
    { label: 'Outcome Evidence', value: 'Required', detail: 'Payment and recovery outcomes needed', tone: 'yellow', score: 93 },
    { label: 'Model Versioning', value: 'Locked', detail: 'Version record required', tone: 'green', score: 96 },
    { label: 'Access Control', value: 'Role-Based', detail: 'Admin-only settings changes', tone: 'cyan', score: 91 },
    { label: 'Audit Program Result', value: 'Locked', detail: 'Full V2 flow complete', tone: 'green', score: 95 }
  ],
  v1DecisionUse:
    'V1 remains the operating decision engine. Settings preserve production decision authority, reason-code requirements, audit logs, user permissions, retention, and rollback controls.',
  v2ShadowAuditUse:
    'V2 remains shadow-only. Settings require outcome evidence, drift review, bias review, version records, rollback path, and human governance approval before any later promotion.',
  reasonCodes: [
    'SETTINGS_V1_PRODUCTION_ENABLED',
    'SETTINGS_V2_SHADOW_LOCKED',
    'SETTINGS_HUMAN_PROMOTION_REQUIRED',
    'SETTINGS_REASON_CODES_REQUIRED',
    'SETTINGS_ROLLBACK_READY',
    'SETTINGS_AUDIT_RETENTION_LOCKED'
  ]
};
