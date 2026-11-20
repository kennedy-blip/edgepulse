# EdgePulse

Global edge routing control plane and regional latency/failover simulator.

## Development

- `npm install`
- `npm run dev` (Vite frontend)
- `vercel dev` (frontend + serverless API)
- `npm run build`

## Deployment

Import this repository into Vercel with the project root set to the repository root. The Vite output is `dist`; API functions live in `/api`.

The API stores routing policies in memory for deterministic demos. Serverless instances are ephemeral; use a durable database/KV store for shared production state.
