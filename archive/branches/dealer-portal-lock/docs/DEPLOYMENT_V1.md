# AutoDeFi V1 Deployment

AutoDeFi V1 deploys as a monorepo.

## Recommended Hosting

| Layer | Platform |
|---|---|
| Web App | Vercel |
| API Gateway | Render or Railway |
| Auth Service | Render or Railway |
| Finance Service | Render or Railway |
| AI Service | Render or Railway |
| Token Service | Render or Railway |
| PostgreSQL | Managed Postgres |
| Redis | Managed Redis |
| Hedera | Testnet first |

## Deploy Order

1. Provision Postgres.
2. Provision Redis.
3. Set backend environment variables.
4. Deploy auth service.
5. Deploy finance service.
6. Deploy AI service.
7. Deploy token service.
8. Deploy API gateway.
9. Deploy web app.
10. Run database migrations.
11. Seed production defaults.
12. Verify health endpoints.
13. Verify portal pages.

## Production Warning

Never commit real private keys, production JWT secrets, or production database URLs.

## V1 Production Readiness Gate

Run pnpm complete:v1 and pnpm verify:deployment before treating a deployment as ready.
