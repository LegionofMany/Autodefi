# Hedera Alignment

## Chain direction

AutoDeFi uses Hedera / HBAR as the locked chain direction for the ADF ecosystem unless the owner explicitly changes the chain plan.

## V1 front-end status

The V1 repository is a front-end shell. It does not execute live Hedera transactions yet. It provides the UI foundation for:

- ADF staking and utility
- Treasury and DAO governance
- Risk-tier capital pools
- Dealer funding visibility
- Audit and security dashboards
- Future smart contract and ledger event wiring

## Future implementation notes

Production Hedera integration should define token IDs, account IDs, contract IDs, multisig controls, transaction memo rules, testnet/mainnet environment variables, and audit logging.
