import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { DashboardGraphic } from '../components/DashboardGraphic';
import { Icon } from '../components/Icon';
import { dashboardRegistry } from '../data/autodefiData';

type DashboardHubProps = {
  onNavigate: (id: string) => void;
};

export function DashboardHub({ onNavigate }: DashboardHubProps) {
  return (
    <div className="module-page">
      <Card className="page-card dashboard-hub">
        <div className="page-head">
          <div>
            <h2>AutoDeFi Dashboard Hub</h2>
            <p>One wired front end for every approved AutoDeFi dashboard and portal.</p>
          </div>
          <div className="head-actions">
            <Button onClick={() => onNavigate('dashboard')}>Open Command Center</Button>
            <Button variant="ghost" onClick={() => onNavigate('lender-pool')}>Open Lender Pool</Button>
          </div>
        </div>

        <DashboardGraphic id="dashboard-hub" title="AutoDeFi Dashboard Hub" />

        <div className="dashboard-hub-grid">
          {dashboardRegistry.map((dashboard) => (
            <article className={`dashboard-hub-card tone-${dashboard.tone}`} key={dashboard.id}>
              <div className="dashboard-hub-card-head">
                <Icon name={dashboard.icon} size={34} />
                <span>{dashboard.group}</span>
              </div>
              <h3>{dashboard.label}</h3>
              <p>{dashboard.description}</p>
              <Button className="full" onClick={() => onNavigate(dashboard.id)}>Open Dashboard</Button>
            </article>
          ))}
        </div>
      </Card>
    </div>
  );
}
