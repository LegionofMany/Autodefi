import { v2BackendBrainParameters } from '../../v2BackendBrainParameters';
import type { AiModelVersionRecord } from './schema';

export function createSeedModelVersionRecord(): AiModelVersionRecord {
  return {
    modelVersionId: 'MODEL-NeuralRisk-V2-shadow-brain-lock-1',
    modelName: v2BackendBrainParameters.engineName,
    modelVersion: v2BackendBrainParameters.engineVersion,
    mode: 'shadow_mode',
    createdAt: new Date().toISOString(),
    createdBy: 'system',
    rollbackVersionId: 'MODEL-NeuralRisk-V1-production-baseline',
    promotionLocked: true,
    canMutateV1Decision: false,
    notes: 'Seed model version record for V2 shadow backend brain. Promotion requires evidence, human governance, and rollback plan.'
  };
}
