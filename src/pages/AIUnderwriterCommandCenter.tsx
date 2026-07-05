import type { ReactNode } from 'react';
import { auditModules, aiUnderwriterStatusMetrics, commandCenterMetrics, v1DecisionSnapshot, v2ShadowAuditSnapshot } from '../features/ai-underwriter/aiUnderwriterV2Data';
import { runRecursiveShadowAudit } from '../features/ai-underwriter/recursiveShadowAudit';
import type { AuditMetric, AuditModuleSummary } from '../features/ai-underwriter/types';
import './aiUnderwriterV2.css';

const auditResult = runRecursiveShadowAudit();

function ToneBadge({ tone, children }: { tone: string; children: ReactNode }) {
  return <span className={`ai-tone ai-tone-${tone}`}>{children}</span>;
}

function StatusMetric({ metric }: { metric: AuditMetric }) {
  return (
    <div className={`ai-status-card ai-glow-${metric.tone}`}>
      <span>{metric.label}</span>
      <strong>{metric.value}</strong>
      <small>{metric.detail}</small>
    </div>
  );
}

function RingScore({ value, label, tone = 'green' }: { value: number | string; label: string; tone?: string }) {
  return (
    <div className={`ai-ring ai-ring-${tone}`}>
      <div>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

function ModuleNode({ module }: { module: AuditModuleSummary }) {
  return (
    <button className={`ai-module-node status-${module.status}`} type="button">
      <span>{module.moduleNumber}</span>
      <b>{module.label}</b>
      <small>{module.shortLabel}</small>
    </button>
  );
}

function MetricRow({ metric }: { metric: AuditMetric }) {
  return (
    <div className="ai-result-row">
      <span>{metric.label}</span>
      <b className={`ai-text-${metric.tone}`}>{metric.value}</b>
    </div>
  );
}

export function AIUnderwriterCommandCenter() {
  const primaryModules = auditModules.filter((module) => module.moduleNumber <= 14);
  const settingsModule = auditModules.find((module) => module.id === 'audit-program-settings');
  const leftModules = primaryModules.slice(0, 7);
  const rightModules = primaryModules.slice(7, 14);

  return (
    <div className="ai-underwriter-page">
      <header className="ai-hero">
        <div className="ai-brand-lockup">
          <div className="ai-logo-mark">A</div>
          <div>
            <h2>AI Underwriter Command Center</h2>
            <p>AI-powered decisions. Faster approvals. Smarter risk.</p>
          </div>
        </div>
        <div className="ai-status-grid">
          {aiUnderwriterStatusMetrics.map((metric) => (
            <StatusMetric key={metric.label} metric={metric} />
          ))}
        </div>
      </header>

      <section className="ai-grid-main">
        <aside className="ai-applicant-card ai-card">
          <div className="ai-card-title">
            <h3>Application Summary</h3>
            <ToneBadge tone="purple">V1 Live</ToneBadge>
          </div>
          <div className="ai-applicant-head">
            <div className="ai-avatar">SM</div>
            <div>
              <p>Applicant: <b className="ai-text-cyan">{v1DecisionSnapshot.applicantName}</b></p>
              <p>VIN: {v1DecisionSnapshot.vin}</p>
              <p>Loan Amount: ${v1DecisionSnapshot.loanAmount.toLocaleString()}</p>
            </div>
          </div>
          <div className="ai-summary-list">
            <MetricRow metric={{ label: 'Credit Score', value: `${v1DecisionSnapshot.creditScore} (Good)`, detail: '', tone: 'green' }} />
            <MetricRow metric={{ label: 'Income Verified', value: `$${v1DecisionSnapshot.verifiedIncome.toLocaleString()} / Year`, detail: '', tone: 'green' }} />
            <MetricRow metric={{ label: 'Down Payment', value: `$${v1DecisionSnapshot.downPayment.toLocaleString()}`, detail: '', tone: 'green' }} />
            <MetricRow metric={{ label: 'Debt-to-Income', value: `${v1DecisionSnapshot.debtToIncome}%`, detail: '', tone: 'green' }} />
            <MetricRow metric={{ label: 'Recommended Tier', value: v1DecisionSnapshot.recommendedTier, detail: '', tone: 'cyan' }} />
            <MetricRow metric={{ label: 'V1 Action', value: v1DecisionSnapshot.action.replaceAll('_', ' ').toUpperCase(), detail: '', tone: 'green' }} />
          </div>
          <button className="ai-wide-button" type="button">View Full Application →</button>
        </aside>

        <main className="ai-engine-card ai-card">
          <div className="ai-card-title center">
            <h3>AI Decision Engine</h3>
            <ToneBadge tone="cyan">V2 Shadow Auditing V1</ToneBadge>
          </div>
          <div className="ai-engine-map">
            <div className="ai-module-column">
              {leftModules.map((module) => <ModuleNode key={module.id} module={module} />)}
            </div>
            <div className="ai-car-core">
              <div className="ai-orbit one" />
              <div className="ai-orbit two" />
              <div className="ai-car-shape">AUTO<br />DEFI</div>
              <div className="ai-core-caption">
                <strong>Recursive Shadow Audit</strong>
                <span>V1 decision → V2 audit → market learning → human promotion gate</span>
              </div>
            </div>
            <div className="ai-module-column">
              {rightModules.map((module) => <ModuleNode key={module.id} module={module} />)}
            </div>
          </div>
          <div className="ai-engine-footer">
            <strong>15-Field AI Underwriting Analysis</strong>
            <button type="button">View All Modules →</button>
          </div>
        </main>

        <aside className="ai-card ai-results-card">
          <div className="ai-card-title">
            <h3>Approval Results</h3>
            <ToneBadge tone="green">Active</ToneBadge>
          </div>
          <RingScore value={`${v1DecisionSnapshot.approvalProbability}%`} label="Approval Probability" />
          <div className="ai-summary-list">
            <MetricRow metric={{ label: 'Recommended Tier', value: v1DecisionSnapshot.recommendedTier, detail: '', tone: 'cyan' }} />
            <MetricRow metric={{ label: 'Suggested Structure', value: `$${v1DecisionSnapshot.downPayment.toLocaleString()} Down`, detail: '', tone: 'yellow' }} />
            <MetricRow metric={{ label: 'Predicted Default Risk', value: `${v1DecisionSnapshot.predictedDefaultRisk}%`, detail: '', tone: 'green' }} />
            <MetricRow metric={{ label: 'Best Funding Source', value: v1DecisionSnapshot.fundingSource, detail: '', tone: 'cyan' }} />
            <MetricRow metric={{ label: 'Expected Yield to Lenders', value: `${v1DecisionSnapshot.expectedYieldToLenders}%`, detail: '', tone: 'green' }} />
          </div>
        </aside>
      </section>

      <section className="ai-card ai-risk-strip">
        <div className="ai-card-title">
          <h3>Risk Breakdown</h3>
          <ToneBadge tone="green">V1 + V2 Compared</ToneBadge>
        </div>
        <div className="ai-risk-grid">
          {commandCenterMetrics.map((metric) => (
            <div className={`ai-risk-tile ai-glow-${metric.tone}`} key={metric.label}>
              <RingScore value={metric.value} label={metric.detail} tone={metric.tone} />
              <div>
                <span>{metric.label}</span>
                <strong className={`ai-text-${metric.tone}`}>{metric.detail}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ai-grid-secondary">
        <div className="ai-card">
          <div className="ai-card-title">
            <h3>V2 Shadow Audit</h3>
            <ToneBadge tone="orange">Cannot Update V1</ToneBadge>
          </div>
          <div className="ai-summary-list">
            <MetricRow metric={{ label: 'Mode', value: v2ShadowAuditSnapshot.mode, detail: '', tone: 'orange' }} />
            <MetricRow metric={{ label: 'Model Version', value: v2ShadowAuditSnapshot.modelVersion, detail: '', tone: 'cyan' }} />
            <MetricRow metric={{ label: 'V1 Quality Score', value: `${v2ShadowAuditSnapshot.v1DecisionQualityScore}%`, detail: '', tone: 'green' }} />
            <MetricRow metric={{ label: 'Tier Routing Quality', value: `${v2ShadowAuditSnapshot.tierRoutingQualityScore}%`, detail: '', tone: 'green' }} />
            <MetricRow metric={{ label: 'Promotion Gate', value: v2ShadowAuditSnapshot.promotionGateStatus, detail: '', tone: 'yellow' }} />
          </div>
          <p className="ai-note">{v2ShadowAuditSnapshot.recommendation}</p>
        </div>

        <div className="ai-card">
          <div className="ai-card-title">
            <h3>Recursive Learning Signals</h3>
            <ToneBadge tone="purple">Market Learning</ToneBadge>
          </div>
          <div className="ai-learning-list">
            {auditResult.recursiveLearningSignals.map((signal) => (
              <div className="ai-learning-item" key={signal.id}>
                <b>{signal.label}</b>
                <span>{signal.currentFinding}</span>
                <small>{signal.v2Action}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="ai-card">
          <div className="ai-card-title">
            <h3>Phase 1 Controls</h3>
            <ToneBadge tone="green">Safe</ToneBadge>
          </div>
          <div className="ai-control-grid">
            <div><span>Promotion Locked</span><strong>Yes</strong></div>
            <div><span>Can Update V1</span><strong>No</strong></div>
            <div><span>Human Approval</span><strong>Required</strong></div>
            <div><span>On-Chain Module</span><strong>Included</strong></div>
            <div><span>Settings Module</span><strong>{settingsModule ? 'Included' : 'Missing'}</strong></div>
            <div><span>Next Action</span><strong>Page 1</strong></div>
          </div>
        </div>
      </section>
    </div>
  );
}
