# Layered Architecture

## Architecture Pattern: Layered/N-Tier Architecture

1. Entry Point Layer (server.ts) - Application bootstrap and process management
2. Application Layer (app.ts) - Express app configuration and middleware setup
3. API/Routing Layer (api/) - Route definitions organized by version and feature
4. Core Layer (core/) - Shared utilities, middleware, and error handling
5. Modules Layer (modules/) - Business logic organized by domain/feature

Key Characteristics:

- Separation of Concerns: Each layer has a specific responsibility
- Feature-Based Modules: Product feature is organized in its own folder
- Versioned API: /api/v1/ structure for API versioning
- Centralized Error Handling: Error middleware in core layer
- Utility/Helper Pattern: Reusable utilities like async-handler and graceful-shutdown

```
src/
├── app.ts
├── server.ts
├── config/
├── core/             
│   ├── db/
│   ├── logger/
│   ├── cache/
│   ├── errors/
│   ├── middlewares/
│   │   ├── auth.middleware.ts
│   │   ├── tenant.middleware.ts
│   │   └── rls.middleware.ts
│   └── utils/
|       ├── async-handler.ts
│
├── modules/       
│   ├── tenant/
│   ├── auth/
│   ├── catalog/
│   ├── order/
│   ├── payment/
│   └── user/
│
├── api/              
│   ├── v1/
│   ├── v2/
│   └── v3/
│
├── prisma/
├── tests/
└── types/
```
