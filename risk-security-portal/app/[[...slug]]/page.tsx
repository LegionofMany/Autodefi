import { AnalyticsPage } from '@/components/PageTemplates';
import { GenericSettingsPage, ListSettingsPage, SettingsHome } from '@/components/SettingsTemplates';

const mainPages: Record<string, { title: string; subtitle: string; metrics: string[]; focus: string }> = {
  dashboard: {
    title: 'Risk & Security Analytics',
    subtitle: 'Real-time risk monitoring and security intelligence across the AutoDeFi ecosystem.',
    metrics: ['Overall Risk Score', 'High Risk Loans', 'Potential Fraud', 'Open Alerts', 'Blocked Transactions', 'KYC Failures'],
    focus: 'Risk Overview'
  },
  'risk-overview': {
    title: 'Risk Overview',
    subtitle: 'Deep portfolio and loan pool risk visibility across the AutoDeFi ecosystem.',
    metrics: ['Portfolio Risk Score', 'Loans Under Review', 'Delinquency Rate', 'Average LTV', 'Exposure at Risk', 'Recovery Readiness'],
    focus: 'Portfolio Risk Composition'
  },
  'fraud-detection': {
    title: 'Fraud Detection',
    subtitle: 'Real-time fraud intelligence, anomaly detection, and application risk monitoring across AutoDeFi.',
    metrics: ['Fraud Risk Score', 'Flagged Applications', 'Synthetic Identity Cases', 'Identity Mismatch Rate', 'Suspicious VIN Clusters', 'Blocked Funding Attempts'],
    focus: 'Fraud Case Composition'
  },
  'security-events': {
    title: 'Security Events',
    subtitle: 'Live monitoring of platform incidents, critical alerts, admin activity, and infrastructure security.',
    metrics: ['Total Security Events', 'Critical Incidents', 'Open Investigations', 'Blocked Access Attempts', 'Smart Contract Alerts', 'Resolved Events'],
    focus: 'Event Severity Breakdown'
  },
  'exposure-monitor': {
    title: 'Exposure Monitor',
    subtitle: 'Real-time monitoring of credit, dealer, pool, collateral, and geographic exposure.',
    metrics: ['Total Exposure', 'Exposure at Risk', 'Concentration Ratio', 'Average LTV', 'Dealer Exposure Alerts', 'Reserve Coverage'],
    focus: 'Exposure Distribution'
  },
  'transaction-monitoring': {
    title: 'Transaction Monitoring',
    subtitle: 'Real-time monitoring of on-chain and off-chain transactions across the AutoDeFi ecosystem.',
    metrics: ['Total Transactions', 'On-Chain Transactions', 'Off-Chain Transactions', 'Flagged Transactions', 'High Risk Value', 'Blocked Transactions'],
    focus: 'Transaction Channels'
  },
  'smart-contract-security': {
    title: 'Smart Contract Security',
    subtitle: 'Real-time monitoring of contract integrity, treasury controls, oracle health, and protocol security.',
    metrics: ['Contract Risk Score', 'Active Contract Alerts', 'Treasury Safeguards', 'Oracle Sync Health', 'Multi-Sig Reviews', 'Resolved Vulnerabilities'],
    focus: 'Contract Security Overview'
  },
  'identity-verification': {
    title: 'Identity Verification',
    subtitle: 'Real-time monitoring of borrower, dealer, and account identity checks across AutoDeFi.',
    metrics: ['Verification Pass Rate', 'Pending Reviews', 'Failed KYC', 'Document Mismatch Rate', 'Biometric Match Rate', 'Watchlist Hits'],
    focus: 'Identity Verification Overview'
  },
  compliance: {
    title: 'Compliance',
    subtitle: 'Real-time monitoring of regulatory, KYC/AML, sanctions, policy, and reporting compliance.',
    metrics: ['Compliance Score', 'KYC Completion Rate', 'AML Alerts', 'Sanctions Hits', 'Policy Exceptions', 'Audit Readiness'],
    focus: 'Compliance Overview'
  },
  'reports-analytics': {
    title: 'Reports & Analytics',
    subtitle: 'Centralized reporting, trend intelligence, and exportable risk insights across AutoDeFi.',
    metrics: ['Reports Generated', 'Scheduled Reports', 'Open Insights', 'Executive Summaries', 'Data Sources', 'Export Volume'],
    focus: 'Report Distribution'
  },
  'alerts-notifications': {
    title: 'Alerts & Notifications',
    subtitle: 'Centralized alerting, escalation workflows, and real-time notifications across AutoDeFi.',
    metrics: ['Total Alerts', 'Critical Alerts', 'Open Notifications', 'Escalations Triggered', 'Resolved Alerts', 'SLA Adherence'],
    focus: 'Alert Severity Breakdown'
  }
};

const settingsPages: Record<string, JSX.Element> = {
  'preferences': <GenericSettingsPage title="Preferences" description="Customize experience, dashboard behavior, data display, exports, and internal link behavior." tabs={['General', 'Dashboard', 'Risk Preferences', 'Default Views', 'Display & UI', 'Export Preferences', 'Internal Link Settings']} />,
  'integrations': <ListSettingsPage title="Integrations" description="Connect and manage third-party services and tools that extend platform capabilities." kind="INT" />,
  'security': <GenericSettingsPage title="Security" description="Configure security settings, access controls, and protection mechanisms." tabs={['Password Policy', 'MFA', 'Session Security', 'Login Security', 'Device Management', 'Advanced Security']} />,
  'notifications': <GenericSettingsPage title="Notifications" description="Configure how and when users receive alerts and updates." tabs={['Notification Channels', 'Alert Preferences', 'Digest Settings']} />,
  'system': <GenericSettingsPage title="System" description="View system information, manage platform settings, and monitor platform health." tabs={['System Information', 'System Settings', 'Monitoring', 'Backup & Restore', 'Diagnostics']} />,
  'data-retention': <ListSettingsPage title="Data Retention" description="Configure how long different types of data are retained and when expired data is removed." kind="RET" />,
  'audit-logs': <ListSettingsPage title="Audit Logs" description="Review system activities and changes made by users and automated processes." kind="LOG" />,
  'appearance': <GenericSettingsPage title="Appearance" description="Customize the look and feel of the platform to match your preferences and brand." tabs={['General', 'Branding', 'Dashboard', 'Charts & Graphs']} />,
  'access-authentication': <GenericSettingsPage title="Access & Authentication" description="Manage how users access the platform and configure authentication methods." tabs={['Authentication Methods', 'Single Sign-On (SSO)', 'Multi-Factor Authentication (MFA)', 'Password Policy']} />,
  'api-keys': <ListSettingsPage title="API Keys" description="Manage API keys to securely access AutoDeFi Risk & Security Portal APIs." kind="API" />,
  'ip-allowlist': <ListSettingsPage title="IP Allowlist" description="Restrict platform and API access to specific IP addresses or ranges." kind="IP" />,
  'session-management': <ListSettingsPage title="Session Management" description="View and manage user sessions across the platform." kind="SES" />,
  'data-sources': <ListSettingsPage title="Data Sources" description="Manage internal and external data sources that power risk detection and analytics." kind="SRC" />,
  'webhooks': <ListSettingsPage title="Webhooks" description="Send real-time event notifications to external systems via HTTP webhooks." kind="WH" />,
  'risk-rules-policies': <ListSettingsPage title="Risk Rules & Policies" description="Create and manage risk detection rules and enforcement policies." kind="RULE" />,
  'system-maintenance': <ListSettingsPage title="System Maintenance" description="Monitor system health, view maintenance schedules, and manage platform updates." kind="SYS" />
};

export default function Page({ params }: { params: { slug?: string[] } }) {
  const parts = params.slug || ['dashboard'];
  if (parts[0] === 'settings') {
    if (!parts[1]) return <SettingsHome />;
    return settingsPages[parts[1]] || <SettingsHome />;
  }
  const key = parts[0] || 'dashboard';
  const page = mainPages[key] || mainPages.dashboard;
  return <AnalyticsPage {...page} />;
}
