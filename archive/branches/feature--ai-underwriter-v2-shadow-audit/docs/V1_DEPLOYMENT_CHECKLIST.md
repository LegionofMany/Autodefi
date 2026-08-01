# AutoDeFi V1 Deployment Checklist

## Before Deploy

- Validate database schema.
- Build the monorepo.
- Run the security check.
- Run the V1 flow runner.
- Run the V1 completion gate.

## Deploy Order

1. Provision Postgres.
2. Provision Redis.
3. Set backend environment variables.
4. Deploy backend services.
5. Deploy API gateway.
6. Deploy web app.
7. Run migrations.
8. Seed production defaults.
9. Verify health endpoints.
10. Verify web portal.

## Do Not Deploy With

- private keys committed to repo
- missing JWT secret
- missing database URL
- frontend pointing to local development API
- backend services pointing to local development URLs
- production database reset command
