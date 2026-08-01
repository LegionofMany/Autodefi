# ADF Hedera Token Infrastructure Pack

Status: committed for future reference. No live Hedera token creation or live transaction has been performed.

This package prepares the AutoDeFi Token (ADF) infrastructure for Hedera testnet portal setup.

## Locked token baseline

- Token name: AutoDeFi Token
- Symbol: ADF
- Network: Hedera testnet first
- Supply type: finite / fixed-supply planning
- Display total supply: 5,000,000,000 ADF
- Decimals: 8
- Raw smallest-unit supply: 500,000,000,000,000,000
- Bitcoin-style release: 50% first epoch, then halving release caps every 4-year epoch

## Folder map

```text
config/
  adf-token.manifest.json
  adf-system-vaults.json
  adf-vault-delegation.csv
  adf-bitcoin-style-release-schedule.json
  adf-bitcoin-style-release-schedule.csv
  adf-release-governance-policy.json
  adf-epoch-release-by-bucket.csv
  adf-hedera-holder-airdrop-policy.json
  adf-hedera-holder-airdrop-rules.csv
docs/
  tokenomics/ADF_SUPPLY_DELEGATION.md
  tokenomics/ADF_BITCOIN_STYLE_RELEASE.md
  tokenomics/ADF_RELEASE_GOVERNANCE_POLICY.md
  tokenomics/ADF_HEDERA_HOLDER_AIRDROP.md
  hedera/ADF_TESTNET_PORTAL_SETUP.md
  hedera/ADF_POST_CREATION_DELEGATION_RUNBOOK.md
  hedera/ADF_SECURITY_AND_KEY_POLICY.md
  hedera/ADF_AIRDROP_EXECUTION_RUNBOOK.md
  dev-turnover/ADF_TOKEN_INFRASTRUCTURE_HANDOFF.md
scripts/
  validate-adf-token-manifest.mjs
  validate-adf-airdrop-policy.mjs
  create-adf-token-dry-run.mjs
assets/adf-token/
  uploaded ADF badge/token PNG assets, excluding any account/private-key screenshot
```

## Safety rule

Never commit real Hedera private keys, mnemonic phrases, seed phrases, portal screenshots showing key snippets, operator secrets, treasury secrets, or `.env` files with live values.

## Recommended next local command

```bash
node scripts/validate-adf-token-manifest.mjs
node scripts/validate-adf-airdrop-policy.mjs
node scripts/create-adf-token-dry-run.mjs
```

The dry-run script does not create the token. It prints the intended token settings and checks for missing environment fields.

## V3 release governance

This version adds the release governance layer that connects the 5B ADF bucket allocation to the Bitcoin-inspired release schedule.

Key rule:

```text
approved_release = min(global_epoch_remaining, bucket_epoch_remaining, approved_milestone_amount, compliance_allowed_amount)
```

This keeps the token finite and transparent while preventing all treasury/vault balances from being treated as immediate circulating supply.

## V4 Hedera holder genesis distribution

This version adds a planned Hedera holder genesis distribution.

- Reserve: 100,000,000 ADF.
- Source: Community Growth bucket.
- Share of total supply: 2%.
- Execution model: snapshot-based claimable distribution.
- Target: eligible Hedera accounts holding HBAR at an approved snapshot consensus timestamp.
- Rule: no guaranteed value, no guaranteed profit, no guaranteed yield.

The distribution does not increase the 5B ADF max supply. It is carved out of the existing Community Growth allocation and must obey the Bitcoin-style release caps plus the V3 release governance policy.
