# AutoDeFi dashboard consolidation

This repository now has one production frontend on `main`. The Dashboard Hub routes every approved dashboard through the existing AutoDeFi shell, while the complete source state of every former working branch is retained under `archive/branches/`.

## Runtime dashboards

| Area | Live route id | Preserved source branch |
|---|---|---|
| Command Center | `dashboard` | `autodefi-command-center-ui` |
| Lender Pool | `lender-pool` | `main` |
| Admin Command | `admin-command` | `autodefi-frontend-complete-svg-ui` |
| Borrower Portal | `borrower-portal` | `borrower-portal-frontend-v1` |
| Dealer Portal | `dealer-portal` | `dealer-portal-lock` |
| Investor Portal | `investor-portal` | `frontend/investor-portal-v1` |
| Capital & Yield | `capital-yield` | `capital-yield-portal` |
| AI Underwriter | `ai-underwriter` | `ai-underwriter-frontend` |
| AI Underwriter V2 | `ai-underwriter-v2` | `feature/ai-underwriter-v2-shadow-audit` |
| Dealer Marketplace | `dealer-marketplace` | `autodefi-dealer-marketplace-ui` |
| Marketplace | `marketplace` | `feature/marketplace-frontend` |
| Marketplace Center | `marketplace-center` | `feature/marketplace-center-frontend` |
| Liquidation Marketplace | `liquidation-marketplace` | `feature/liquidation-marketplace-frontend-20260628` |
| Loan Servicing | `loan-servicing` | `feature/loan-servicing-center-frontend` |
| Collections & Recovery | `collections-recovery` | `feature/collections-recovery-frontend` |
| Insurance Claims | `insurance-claims` | `frontend/insurance-claims-center` |
| Insurance & Recovery | `insurance-recovery` | `insurance-pool-svg-lock` |
| Risk Management | `risk-management` | `feature/risk-management-svg-frontend` |
| Risk & Security | `risk-security` | `risk-security-portal-frontend` |
| Audit & Security | `audit-security` | `audit-security-frontend` |
| DAO Command Center | `dao-command` | `frontend/dao-complete-ui` |
| DAO Community | `dao-community` | `dao-community-portal` |
| DAO Proposals | `proposals` | `feature/dao-proposals-frontend` |
| DAO Vote | `vote` | `autodefi-dao-vote-final-ui` |
| Treasury Management | `treasury-management` | `feature/treasury-management-center` |
| Staking Rewards | `staking-rewards` | `frontend/staking-rewards-dashboard` |
| DAO Governance | `dao-governance` | `feature/dao-governance-frontend` |

## Preservation policy

- The live root app is the production build and must remain green.
- Historical branch snapshots are read-only references. They preserve the approved UI exactly and are not included in the root TypeScript or Vite build.
- The consolidation commit includes every former branch head as a parent. This makes their histories part of `main` without accepting conflicting root files.
- Pull requests represented by those heads are superseded by the consolidation commit and can be closed after GitHub confirms the commit on `main`.
- Remote branch deletion is a separate repository-maintenance action. Only delete a branch after verifying its head is an ancestor of `main`.

## Archived branches

The complete snapshots retained under `archive/branches/` are:

- `advanced-ai-audit-program`
- `ai-underwriter-frontend`
- `audit-security-frontend`
- `autodefi-command-center-ui`
- `autodefi-dao-vote-final-ui`
- `autodefi-dealer-marketplace-ui`
- `autodefi-frontend-complete-svg-ui`
- `borrower-portal-frontend-v1`
- `capital-yield-portal`
- `dao-community-portal`
- `dealer-portal-lock`
- `dev-turnover-adf`
- `dev-turnover-phase-0-zonycs-adoption`
- `feat/four-matching-dashboards`
- `feature/ai-underwriter-v2-shadow-audit`
- `feature/collections-recovery-frontend`
- `feature/dao-governance-frontend`
- `feature/dao-proposals-frontend`
- `feature/insurance-pool-svg-lock`
- `feature/liquidation-marketplace-frontend-20260628`
- `feature/loan-servicing-center-frontend`
- `feature/loan-servicing-dashboard`
- `feature/marketplace-center-frontend`
- `feature/marketplace-frontend`
- `feature/risk-management-svg-frontend`
- `feature/treasury-management-center`
- `frontend-svg-complete`
- `frontend/dao-complete-ui`
- `frontend/insurance-claims-center`
- `frontend/investor-portal-v1`
- `frontend/staking-rewards-dashboard`
- `insurance-pool-svg-lock`
- `risk-security-portal-frontend`
- `v1-backend-scaffold`
