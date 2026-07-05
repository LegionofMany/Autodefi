export function hasKeys(value: unknown, keys: string[]) {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return false;
  return keys.every((key) => key in value);
}

export function hasDecisionInput(value: unknown) {
  if (!hasKeys(value, ['input'])) return false;
  const input = (value as { input?: unknown }).input;
  return hasKeys(input, [
    'applicantName',
    'vin',
    'loanAmount',
    'requestedTermMonths',
    'downPayment',
    'creditScore',
    'verifiedIncome',
    'debtToIncome',
    'walletScore',
    'vehicleValue',
    'collateralCoverage',
    'predictedDefaultRisk'
  ]);
}

export function hasShadowAuditRequest(value: unknown) {
  if (!hasKeys(value, ['decisionId', 'outcomeEvidenceIds'])) return false;
  return Array.isArray((value as { outcomeEvidenceIds?: unknown }).outcomeEvidenceIds);
}

export function hasSnapshotParams(value: unknown) {
  return hasKeys(value, ['decisionId']);
}

export function hasGovernanceRequest(value: unknown) {
  return hasKeys(value, ['decisionId']);
}
