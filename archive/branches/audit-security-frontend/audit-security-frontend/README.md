# AutoDeFi DAO Audit & Security Frontend

Production-ready frontend module for the AutoDeFi DAO Audit & Security area.

This module is intentionally committed in its own folder so it can be reviewed safely without overwriting the existing backend, root app, `autodefi-v1`, or dealer portal work already in the repository.

## Included screens

- Dashboard
- Security Overview
- Smart Contract Audits
- Threat Monitor
- Incident Monitor
- Vulnerability Management
- Access Control
- Insurance & Protection
- Bug Bounty Program
- Audit Reports
- Security Alerts
- System Health
- Risk Management
- Security Treasury
- Analytics

## Design system

- Dark AutoDeFi DAO theme
- Neon blue, green, purple, red, orange, and cyan status language
- Left navigation matching the Audit & Security dashboard build
- Live KPI cards
- Status badges
- Donut, trend, radar, table, control, and activity panels
- SVG assets included in `/assets`

## Backend connection

The app first attempts to load live data from your completed backend:

```txt
GET {AUTODEFI_API_BASE_URL}/api/audit-security/pages/:slug
```

If the backend does not return data yet, the app falls back to the included local dashboard dataset so the frontend remains usable during deployment.

Set the backend URL in `config.js`:

```js
window.AUTODEFI_CONFIG = {
  API_BASE_URL: "https://your-backend-url.com"
};
```

## Run locally

This frontend is dependency-free and can be opened directly:

```bash
cd audit-security-frontend
open index.html
```

Or serve it locally:

```bash
python3 -m http.server 5173
```

Then open:

```txt
http://localhost:5173
```

## Production deployment

This folder can be deployed as a static frontend to Vercel, Netlify, Cloudflare Pages, or served behind the AutoDeFi backend.

## Notes

This is not an image mockup. Every screen is rendered from frontend code and data structures. The SVG design assets are source files and can be reused across the full AutoDeFi frontend.