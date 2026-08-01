import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ActionCenterProvider } from './components/ActionCenter';
import './styles/global.css';
import './styles/svg.css';
import './styles/hub.css';
import './styles/actions.css';
import './styles/workflows.css';
import './styles/portal.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ActionCenterProvider>
      <App />
    </ActionCenterProvider>
  </React.StrictMode>
);
