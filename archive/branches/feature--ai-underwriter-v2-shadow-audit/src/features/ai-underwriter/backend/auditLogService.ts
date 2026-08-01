import type { AuditLogEntry, AuditLogEventType } from './brainTypes';

export function createAuditLogEntry(args: {
  decisionId: string;
  eventType: AuditLogEventType;
  actor?: AuditLogEntry['actor'];
  reasonCodes: string[];
  payloadSummary: string;
}): AuditLogEntry {
  return {
    auditLogId: `AUDIT-${args.eventType}-${args.decisionId}`,
    decisionId: args.decisionId,
    eventType: args.eventType,
    actor: args.actor ?? 'system',
    createdAt: new Date().toISOString(),
    immutable: true,
    reasonCodes: args.reasonCodes,
    payloadSummary: args.payloadSummary
  };
}

export function buildInitialAuditLog(decisionId: string, reasonCodes: string[]): AuditLogEntry[] {
  return [
    createAuditLogEntry({
      decisionId,
      eventType: 'v1_decision_created',
      reasonCodes,
      payloadSummary: 'V1 decision created with module reason codes and production authority.'
    }),
    createAuditLogEntry({
      decisionId,
      eventType: 'v2_shadow_audit_created',
      reasonCodes: ['V2_SHADOW_ONLY_LOCK_CONFIRMED', 'V2_HUMAN_GOVERNANCE_REQUIRED'],
      payloadSummary: 'V2 shadow audit created without changing V1 final action.'
    }),
    createAuditLogEntry({
      decisionId,
      eventType: 'reason_codes_attached',
      reasonCodes,
      payloadSummary: 'Reason-code trace attached for audit, review, and future outcome learning.'
    })
  ];
}
