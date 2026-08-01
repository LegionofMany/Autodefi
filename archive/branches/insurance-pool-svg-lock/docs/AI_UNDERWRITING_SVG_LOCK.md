# AutoDeFi DAO AI Underwriting & Risk Command Suite SVG Lock

This document is the locked SVG source-of-truth for the AutoDeFi underwriting dashboard tabs created during the dashboard locking pass.

## Lock Status

Status: APPROVED / LOCKED

Suite name: AutoDeFi DAO — AI Underwriting & Risk Command Suite

Output rule: every approved tab must have an editable SVG artifact in `public/assets/svg/ai-underwriting-suite/`.

Repository rule: no raster dashboard screenshots are accepted as final UI assets. PNG/JPG renders may be used only as visual references. Final implementation assets must remain SVG or React SVG components.

## Canvas

- SVG viewBox: `0 0 1792 1024`
- Aspect ratio: 16:9 wide dashboard
- Left sidebar width: `225`
- Topbar height: `68`
- Main content x-start: `225`
- Background: dark navy cyber-finance terminal
- Matrix pattern opacity: 8% to 18%
- Card radius: 10 to 14
- Standard panel stroke: cyan/blue at low opacity
- Active nav stroke/glow: neon purple/blue

## Global Palette

```css
--bg-main: #030912;
--bg-panel: #071827;
--bg-panel-soft: #0A1E30;
--bg-sidebar: #050B14;
--border-blue: #0E6FA8;
--border-cyan: #00D9FF;
--border-purple: #7A35FF;
--border-green: #00F58A;
--border-yellow: #FFC400;
--border-orange: #FF8A00;
--border-red: #FF3B45;
--text-primary: #FFFFFF;
--text-secondary: #B7C7D9;
--text-muted: #6F849A;
--neon-cyan: #00E5FF;
--neon-blue: #1687FF;
--neon-green: #00F58A;
--neon-purple: #8A4DFF;
--neon-yellow: #FFD000;
--neon-orange: #FF8C00;
--neon-red: #FF4040;
```

## Locked Navigation Order

1. Dashboard
2. AI Underwriter
3. Risk Modules
4. Identity & KYC
5. Income Verification
6. Bank Analysis
7. Vehicle Valuation
8. Fraud Signals
9. Conditional Approvals
10. Funding Readiness
11. Analytics
12. Settings

## Active Navigation Rule

- Active item uses purple/blue gradient fill, neon purple border, soft violet glow, white/cyan icon, and white text.
- Inactive items stay transparent/dark with muted blue-gray text.
- Sidebar order must not change between tabs.
- Page content may change; shell alignment must not shift.

## Locked Component System

- KPI cards across the top row
- Middle dashboard panels for workflows, trend charts, distribution charts, funnels, gauges, and heatmaps
- Lower table/list panels for recent applications, alerts, conditions, audit logs, and activity feeds
- Status pills are rounded and color-coded
- Top-right controls are Date Range, Filters, Export Report
- Footer compliance line must remain available on regulated screens

## Color Semantics

- Green: approved, verified, ready, positive, low risk
- Yellow/Orange: pending, review, caution, conditional, moderate risk
- Red: declined, fraud, critical, high risk
- Blue/Cyan: data, banking, analytics, process, system
- Purple: AI, settings, advanced model, confidence, manual override

## Locked Tab Files

- `autodefi-dashboard.svg`
- `autodefi-ai-underwriter.svg`
- `autodefi-risk-modules.svg`
- `autodefi-identity-kyc.svg`
- `autodefi-income-verification.svg`
- `autodefi-bank-analysis.svg`
- `autodefi-vehicle-valuation.svg`
- `autodefi-fraud-signals.svg`
- `autodefi-conditional-approvals.svg`
- `autodefi-funding-readiness.svg`
- `autodefi-analytics.svg`
- `autodefi-settings.svg`

## Locked Tab Purposes

### Dashboard
Unified command overview across underwriting, risk, identity, income, banking, valuation, fraud, approvals, funding, analytics, and settings.

### AI Underwriter
Automated borrower risk assessment and approval workflow.

### Risk Modules
Real-time risk assessment, fraud detection, and decision intelligence.

### Identity & KYC
Verify identities, ensure compliance, and prevent financial crime.

### Income Verification
Verify income stability, sources, and capacity to repay.

### Bank Analysis
Analyze banking patterns, cash flow stability, and financial behavior.

### Vehicle Valuation
Assess collateral value, market pricing, and asset risk.

### Fraud Signals
Monitor anomalies, prevent application fraud, and investigate suspicious activity.

### Conditional Approvals
Approve with confidence. Conditions protect capital, borrowers, and dealers.

### Funding Readiness
Assess conditions, verify documents, and confirm readiness to fund.

### Analytics
Real-time insights and data-driven intelligence across the underwriting lifecycle.

### Settings
Configure preferences, integrations, security, and system settings.

## SVG ID/Class Naming Lock

Every suite SVG should use the same structural class names so it can be converted into React components without visual drift:

```txt
svg-root
bg-base
bg-matrix
sidebar
sidebar-logo
sidebar-nav
nav-item
nav-item-active
topbar
page-title
page-subtitle
kpi-row
kpi-card
panel
panel-title
chart-donut
chart-line
chart-funnel
chart-heatmap
table
table-row
status-pill
action-button
footer-compliance
```
