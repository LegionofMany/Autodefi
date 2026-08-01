# AutoDeFi / ZONYCS Dev Turnover — Phase 0 Ecosystem Handoff

**Owner:** Matthew Kolba / Voltaire Protocols  
**Related brands:** AutoDeFi, ADF, ZONYCS, Voltaire Protocols  
**Branch purpose:** Make the Phase 0 ecosystem handoff visible to developers immediately.

## Status

This is a **Phase 0 / North Star turnover**, not the final build specification.

The full AutoDeFi mural is the long-term ecosystem map. The actual launch order is phased:

1. **ZONYCS adoption first** — dealership onboarding, inventory/listing workflows, regional representatives, dealer pipeline, auction/listing adoption.
2. **ADF token launch and pool** — token utility, pool/staking dashboard, rewards, controlled ledger and governance-lite.
3. **DeFi options** — borrower/dealer financing, investor/capital pools, repayment rails, underwriting, recovery, and auction liquidation.

## Immediate developer instruction

Start by building the **ZONYCS dealership adoption layer**, not the full DeFi layer.

The first functional build should prove:

- Dealerships can be onboarded.
- Vehicles can be listed/imported.
- Leads and deals can be tracked.
- Regional representatives can manage dealer accounts.
- Admin can approve dealers, reps, listings, and activity.
- Analytics can show adoption, active dealers, inventory, leads, and auction/listing activity.

---

# Phase roadmap

## Phase 1 — ZONYCS adoption engine

**Goal:** Build dealership adoption before launching complex financial rails.

### Build first

- ZONYCS dealership onboarding
- Dealer profile and verification workflow
- Vehicle inventory upload / manual listing / VIN fields
- Listing statuses: draft, pending review, live, paused, sold, archived
- Dealer lead pipeline: new, contacted, qualified, follow-up, won, lost
- Regional representative dashboard
- Rep-to-dealer assignment
- Rep activity tracking: calls, visits, demos, onboarding status
- Admin approval center
- Basic analytics: total dealers, active dealers, total vehicles, live listings, leads, sold units

### Success metrics

- Signed dealer accounts
- Active listings per dealer
- Monthly active dealers
- Lead conversion rate
- Rep activity volume
- Dealer retention
- Inventory growth

### Defer from Phase 1

- ADF staking
- Lending pools
- Revenue sharing
- DAO governance
- Automated underwriting
- Recovery automation

## Phase 2 — ADF token launch + pool

**Goal:** Introduce ADF utility after dealer-side adoption exists.

### Build

- ADF token info dashboard
- Token utility page
- Pool/staking dashboard
- Rewards accounting module
- Dealer/reward incentives
- Governance-lite proposals
- Wallet connection and user balances
- Pool ledger, deposit/withdrawal records, reward events
- Admin controls for token utility parameters

### Guardrails

- ADF should be presented as utility, access, staking/collateral/governance/rewards.
- Do not present ADF as guaranteed income.
- Revenue/yield claims require legal review and risk disclosures.

## Phase 3 — DeFi options

**Goal:** Add financing/yield modules once ZONYCS has adoption and ADF has a stable utility base.

### Build

- Borrower pre-qualification
- Dealer deal submission
- Admin underwriting review
- Loan offer generation
- Payment schedule module
- Investor/capital pool dashboard
- Risk tier pools
- Collateral tracking
- Audit logs

### Later extensions

- AI-assisted underwriting
- Insurance/protection modules
- Default and recovery workflow
- ZONYCS liquidation auction connection
- Advanced revenue sharing
- Full DAO governance

## Recommended release order

1. ZONYCS dealer onboarding and listing engine
2. Regional rep CRM and admin approval tools
3. Dealer analytics and adoption dashboard
4. ADF token utility pages and wallet connection
5. ADF pool/reward ledger in sandbox mode
6. Borrower/dealer financing applications
7. Admin underwriting and compliance workflows
8. Investor pools and DeFi options
9. Insurance, recovery, and auction liquidation
10. DAO governance expansion

---

# MVP scope

## North Star Map vs MVP

The ecosystem mural shows the complete AutoDeFi vision. The MVP should be smaller and focused on proving ZONYCS adoption.

## MVP V1: ZONYCS adoption

### Must have

- Landing page for ZONYCS dealer adoption
- Dealer registration and login
- Dealer profile: business name, contact info, region, verification status
- Vehicle listing creation
- Vehicle list management
- Lead/deal pipeline
- Regional representative login
- Rep dashboard showing assigned dealers
- Rep notes, outreach logs, and onboarding status
- Admin dashboard
- Admin dealer approval/rejection
- Admin listing moderation
- Analytics cards: dealers, vehicles, active users, leads, conversions

### Should have

- Bulk CSV inventory upload
- Basic VIN field support
- Dealer documents upload placeholder
- Email notification hooks
- Role-based permissions
- Audit log for admin changes

### Nice to have

- Auction module preview
- F&I add-on placeholders
- Wallet connect placeholder
- ADF token teaser page

## Explicitly out of MVP

- Real lending decisions
- Real investor yield
- Smart-contract custody
- DAO treasury
- Automated recovery/repossession
- AI underwriting as a final decision-maker
- Any claim of guaranteed token/yield returns

---

# User roles and portals

## Phase 1 roles

### Public visitor

- Can view public marketing pages.
- Can request dealer onboarding.
- Can view selected public listings when enabled.

### Dealer user

- Manages dealership profile.
- Adds and updates vehicle listings.
- Reviews leads and deal pipeline.
- Views dealer analytics.
- Cannot approve their own account/listings if moderation is enabled.

### Regional representative

- Manages assigned region or dealership group.
- Tracks dealer prospects.
- Records outreach, demos, visits, and onboarding tasks.
- Can assist dealers but should not override admin approval.

### Regional manager

- Oversees multiple reps.
- Views regional analytics.
- Reassigns dealers/reps if allowed by admin.

### Admin

- Full system oversight.
- Approves dealers, reps, listings, and compliance status.
- Manages regions and permissions.
- Views audit logs and reports.

## Future phase roles

### Borrower/applicant

- Applies for financing.
- Views loan offers, payments, collateral, and rewards.

### Investor/staker

- Views ADF stake, pool exposure, rewards, and reports.

### DAO member

- Views proposals, votes, and governance activity.

## Portal map

### Phase 1 portals

- Public ZONYCS dealer adoption site
- Dealer Portal
- Regional Rep Portal
- Admin Command Center

### Phase 2 portals

- ADF Token Utility Portal
- Pool/Staking Dashboard
- Rewards Dashboard
- Governance-lite Portal

### Phase 3 portals

- Borrower Portal
- Dealer Finance Portal
- Capital/Yield Portal
- Risk/Security Analytics Center
- Insurance and Recovery Portal

---

# Core data objects

## Phase 1 — ZONYCS adoption objects

### User

- id
- name
- email
- phone
- role
- status
- region_id
- created_at
- updated_at

### Region

- id
- name
- province_or_state
- country
- manager_user_id
- status

### Dealer

- id
- business_name
- legal_name
- address
- city
- province_or_state
- country
- phone
- website
- primary_contact_user_id
- assigned_rep_user_id
- verification_status
- onboarding_status
- created_at
- updated_at

### DealerDocument

- id
- dealer_id
- type
- file_url
- status
- uploaded_by
- reviewed_by
- reviewed_at

### Vehicle

- id
- dealer_id
- vin
- year
- make
- model
- trim
- mileage
- price
- status
- listing_status
- images
- description
- created_at
- updated_at

### Lead

- id
- dealer_id
- vehicle_id
- customer_name
- customer_email
- customer_phone
- source
- status
- assigned_user_id
- created_at
- updated_at

### RepActivity

- id
- rep_user_id
- dealer_id
- activity_type
- notes
- next_follow_up_at
- created_at

### CommissionEvent / RepRevenueEvent

- id
- rep_user_id
- dealer_id
- source_type
- source_id
- commission_base_amount
- rep_percent
- calculated_amount
- period_start
- period_end
- status: pending, approved, paid, rejected
- approved_by
- paid_at
- notes

### AuditLog

- id
- actor_user_id
- entity_type
- entity_id
- action
- before_json
- after_json
- created_at

## Phase 2 — ADF objects

### WalletConnection

- id
- user_id
- chain
- wallet_address
- verified_at

### TokenBalanceSnapshot

- id
- user_id
- token_symbol
- balance
- captured_at

### PoolPosition

- id
- user_id
- pool_id
- amount
- status
- lockup_start
- lockup_end

### RewardEvent

- id
- user_id
- source_type
- source_id
- reward_type
- amount
- token_symbol
- status
- created_at

## Phase 3 — DeFi objects

### LoanApplication

- id
- borrower_user_id
- dealer_id
- vehicle_id
- requested_amount
- down_payment
- term_months
- payment_frequency
- status

### RiskDecision

- id
- loan_application_id
- tier
- score
- decision
- conditions
- reviewed_by
- created_at

### LoanOffer

- id
- loan_application_id
- principal
- apr
- term_months
- payment_frequency
- payment_amount
- conditions
- status

### Loan

- id
- borrower_user_id
- dealer_id
- vehicle_id
- loan_offer_id
- principal
- apr
- term_months
- status

### PaymentSchedule

- id
- loan_id
- due_date
- amount_due
- status

### Payment

- id
- loan_id
- payment_schedule_id
- amount_paid
- currency
- status
- paid_at

---

# ZONYCS regional representative program

## Positioning

Use the wording **Regional Representative Program**, **Regional Dealer Representative**, or **Dealer Partner Program**.

This model is inspired by dealership software adoption: representatives help stores understand and use the platform, similar to how earlier listing, finance, and CRM systems needed field reps to train dealerships and support adoption.

## Business objective

Regional reps help ZONYCS onboard dealerships by region. Reps introduce the platform, assist with dealer setup, help upload inventory, support adoption, and keep dealers active.

## Compensation status

The compensation model is **founder-defined and pending final rules**.

Current direction:

- Reps are not hourly staff by default.
- Reps earn a percentage of monthly commission / recurring renewal revenue tied to dealership accounts they helped onboard or manage.
- The model should reward real dealership adoption and recurring platform activity.
- Final percentages, account ownership, territory rules, renewal rules, clawbacks, manager overrides, and payout cadence are pending founder input.

## Software requirements

### Rep dashboard

- Assigned dealers
- Prospect dealer list
- Dealer onboarding stage
- Dealer status
- Upcoming follow-ups
- Activity log
- Regional performance metrics
- Renewal/revenue attribution view

### Admin controls

- Create/disable reps
- Assign regions
- Assign dealers
- View rep activity
- View dealer adoption metrics
- Approve commissionable/revenue events
- Export reports

### Revenue / commission event ledger

- event_id
- rep_user_id
- dealer_id
- event_type
- event_date
- commission_base_amount
- rep_percent
- calculated_amount
- status: pending, approved, rejected, paid
- approved_by
- notes

### Possible event examples, pending founder rules

- Dealer verified
- Dealer first listing live
- Dealer reaches active listing threshold
- Dealer remains active through renewal period
- Paid dealer subscription or platform fee confirmed
- Qualified lead generated
- Sold unit attributed to ZONYCS
- Monthly commission/renewal revenue generated by assigned dealer

---

# Compliance and risk notes

This is not legal advice. This section is a development and business guardrail list for counsel review.

## Regional representative compensation

Before launch, counsel should review the final rep agreement, payout method, renewal attribution, and territory rules.

### Build guardrails

- Compensation logic should be tied to real ZONYCS dealership sales, subscriptions, listings, renewals, or verified platform activity.
- Keep a clear audit trail for every commission/revenue event.
- Do not allow reps to self-approve payout events.
- Use written compensation disclosures.
- Do not show exaggerated income projections.
- Require rep agreement acceptance.
- Include training materials and prohibited-claims rules.

## Lending / auto finance

Before real lending launches, counsel should review:

- Provincial/state lending rules
- Dealer licensing implications
- Consumer credit disclosures
- Adverse action notices
- Borrower consent
- Privacy and data retention
- Collections and repossession rules
- Interest rate/APR disclosures
- Payment frequency disclosures

## ADF token / pool

Before token launch and pool launch, counsel should review:

- Token classification
- Securities and investment-contract risk
- Staking/yield language
- Revenue-sharing language
- Custody and wallet flow
- Risk disclosures
- Jurisdiction blocks
- KYC/AML requirements

## AI underwriting

Use **AI-assisted underwriting** language. Do not make the AI the final decision-maker in early releases.

Recommended workflow:

1. AI generates risk signals and recommendations.
2. Human/admin reviews.
3. Admin approves, declines, or requests stipulations.
4. System logs reason codes and reviewer identity.

## Data security

- Role-based permissions
- MFA for admin and reps
- Audit logs on all sensitive actions
- Encryption for documents and personal data
- Least-privilege access
- Exportable compliance logs

---

# Backlog epics

## Epic 1 — Foundation

- Auth and roles
- User profile
- Organization/dealer profile
- Region model
- Admin permissions
- Audit log

## Epic 2 — Dealer onboarding

- Dealer signup
- Dealer verification status
- Dealer profile completion
- Document upload placeholder
- Admin approval queue
- Dealer onboarding checklist

## Epic 3 — Vehicle listings

- Create/edit vehicle listing
- Image upload placeholder
- VIN/year/make/model/trim fields
- Listing status workflow
- Public/private listing visibility
- Admin listing moderation

## Epic 4 — Leads and deals

- Lead capture
- Dealer lead inbox
- Lead status pipeline
- Dealer notes
- Activity history
- Reporting

## Epic 5 — Regional representative CRM

- Rep role
- Region assignment
- Dealer assignment
- Prospect dealer list
- Activity logs
- Follow-up reminders
- Rep performance dashboard
- Residual/revenue attribution view

## Epic 6 — Admin Command Center

- Dealer approvals
- Listing approvals
- Rep management
- Region management
- Analytics
- Reports/export
- Compliance/audit viewer

## Epic 7 — ADF token utility

- Wallet connect
- ADF info page
- ADF balance snapshot
- Pool/staking placeholder
- Reward event ledger
- Token utility explanations

## Epic 8 — DeFi / lending later

- Borrower application
- Dealer finance submission
- Risk review
- Loan offers
- Payment schedules
- Collateral tracking
- Investor pool dashboard

## Epic 9 — Recovery / auctions later

- Default detection
- Cure notice workflow
- Recovery case
- Auction listing creation
- Recovery analytics

---

# Acceptance checklist

## Before development starts

- [ ] Confirm Phase 1 scope is ZONYCS adoption only.
- [ ] Confirm brand assets and master map are received.
- [ ] Confirm roles and permissions.
- [ ] Confirm backend data objects.
- [ ] Confirm deployment target.
- [ ] Confirm design system: dark fintech, neon blue/green/purple, AutoDeFi/ZONYCS/Voltaire styling.
- [ ] Confirm founder input is still needed for final rep payroll percentages and rules.

## Phase 1 must be demoable

- [ ] Dealer can sign up.
- [ ] Dealer can complete profile.
- [ ] Dealer can create vehicle listing.
- [ ] Admin can approve dealer.
- [ ] Admin can approve/list/pause vehicle.
- [ ] Regional rep can see assigned dealers.
- [ ] Rep can log dealer activity.
- [ ] Admin can view rep activity.
- [ ] Dashboard shows dealer, vehicle, lead, and adoption metrics.
- [ ] Audit log records sensitive actions.

## Do not mark V1 complete unless

- [ ] User roles are enforced.
- [ ] Admin approval flow works.
- [ ] Dealer data persists correctly.
- [ ] Vehicle listing workflow works.
- [ ] Rep CRM works.
- [ ] Analytics are connected to real stored records.
- [ ] Placeholder ADF/DeFi modules are clearly labeled as future phases.

## Deferred items confirmed

- [ ] No real lending in Phase 1.
- [ ] No guaranteed yield language.
- [ ] No automated AI underwriting final decisions.
- [ ] No DAO treasury control in Phase 1.
- [ ] No repossession/recovery automation in Phase 1.
