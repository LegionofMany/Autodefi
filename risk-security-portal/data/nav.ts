import { Activity, AlertTriangle, BarChart3, Bell, Database, Eye, FileBarChart, Fingerprint, Gauge, KeyRound, Link2, Lock, MonitorCog, Palette, ScrollText, ServerCog, Settings, Shield, ShieldCheck, SlidersHorizontal, UserCheck, Webhook } from 'lucide-react';

export const mainNav = [
  { label: 'Dashboard', href: '/dashboard', icon: Gauge },
  { label: 'Risk Overview', href: '/risk-overview', icon: ShieldCheck },
  { label: 'Fraud Detection', href: '/fraud-detection', icon: Eye },
  { label: 'Security Events', href: '/security-events', icon: AlertTriangle },
  { label: 'Exposure Monitor', href: '/exposure-monitor', icon: Activity },
  { label: 'Transaction Monitoring', href: '/transaction-monitoring', icon: BarChart3 },
  { label: 'Smart Contract Security', href: '/smart-contract-security', icon: Shield },
  { label: 'Identity Verification', href: '/identity-verification', icon: Fingerprint },
  { label: 'Compliance', href: '/compliance', icon: FileBarChart },
  { label: 'Reports & Analytics', href: '/reports-analytics', icon: ScrollText },
  { label: 'Alerts & Notifications', href: '/alerts-notifications', icon: Bell },
  { label: 'Settings', href: '/settings', icon: Settings }
];

export const settingsNav = [
  { group: 'General', items: [
    { label: 'Profile & Account', href: '/settings', icon: UserCheck },
    { label: 'Organization', href: '/settings', icon: Database },
    { label: 'Preferences', href: '/settings/preferences', icon: SlidersHorizontal },
    { label: 'Integrations', href: '/settings/integrations', icon: Link2 },
    { label: 'Security', href: '/settings/security', icon: Shield },
    { label: 'Notifications', href: '/settings/notifications', icon: Bell },
    { label: 'System', href: '/settings/system', icon: MonitorCog },
    { label: 'Data Retention', href: '/settings/data-retention', icon: Database },
    { label: 'Audit Logs', href: '/settings/audit-logs', icon: ScrollText },
    { label: 'Appearance', href: '/settings/appearance', icon: Palette }
  ]},
  { group: 'Access & Authentication', items: [
    { label: 'Access & Authentication', href: '/settings/access-authentication', icon: Lock },
    { label: 'API Keys', href: '/settings/api-keys', icon: KeyRound },
    { label: 'IP Allowlist', href: '/settings/ip-allowlist', icon: ShieldCheck },
    { label: 'Session Management', href: '/settings/session-management', icon: MonitorCog }
  ]},
  { group: 'Data & Integrations', items: [
    { label: 'Data Sources', href: '/settings/data-sources', icon: Database },
    { label: 'Webhooks', href: '/settings/webhooks', icon: Webhook }
  ]},
  { group: 'System', items: [
    { label: 'Risk Rules & Policies', href: '/settings/risk-rules-policies', icon: Shield },
    { label: 'System Maintenance', href: '/settings/system-maintenance', icon: ServerCog }
  ]}
];
