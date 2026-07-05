import type { OutcomeLearningEvent, RecursiveLearningProposal } from './brainTypes';

export function createOutcomeLearningEvent(args: Omit<OutcomeLearningEvent, 'outcomeEventId' | 'humanGateRequired'>): OutcomeLearningEvent {
  return {
    ...args,
    outcomeEventId: `OUTCOME-${args.eventType}-${args.decisionId}`,
    humanGateRequired: true
  };
}

export function buildSeedOutcomeEvents(decisionId: string): OutcomeLearningEvent[] {
  return [
    createOutcomeLearningEvent({
      decisionId,
      eventType: 'first_payment_made',
      occurredAt: new Date().toISOString(),
      source: 'repayment',
      notes: 'Seed event placeholder for first payment outcome learning.'
    }),
    createOutcomeLearningEvent({
      decisionId,
      eventType: 'market_value_updated',
      occurredAt: new Date().toISOString(),
      source: 'market',
      value: 32450,
      notes: 'Seed event placeholder for vehicle market value drift learning.'
    }),
    createOutcomeLearningEvent({
      decisionId,
      eventType: 'yield_realized',
      occurredAt: new Date().toISOString(),
      source: 'pool',
      value: 15.42,
      notes: 'Seed event placeholder for realized pool yield comparison.'
    })
  ];
}

export function createRecursiveLearningProposal(args: {
  decisionId: string;
  evidenceIds: string[];
  recommendation: string;
}): RecursiveLearningProposal {
  return {
    proposalId: `RLP-${args.decisionId}`,
    decisionId: args.decisionId,
    generatedAt: new Date().toISOString(),
    title: 'V2 Shadow Learning Proposal',
    evidenceIds: args.evidenceIds,
    riskImpact: 'purple',
    canPromoteAutomatically: false,
    requiresHumanGovernance: true,
    rollbackPlanRequired: true,
    recommendation: args.recommendation
  };
}
