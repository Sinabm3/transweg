# Transweg

Website for Transweg — transport, moving, furniture assembly and decluttering services in
Vienna. The contact form lets visitors send a message (name, title, text) straight to
`sinabm3@gmail.com` without opening their own mail client.

## Structure

```
backend/    Spring Boot (Java 17) API - validates and relays contact form submissions via SMTP
frontend/   React + Vite + TypeScript site, served by nginx in production
```

## Local development

Backend (http://localhost:8080):

```bash
cd backend
./mvnw spring-boot:run
```

Frontend (http://localhost:5173, proxies `/api` to the backend automatically):

```bash
cd frontend
npm install
npm run dev
```

To actually receive emails locally, export the `MAIL_*` variables from
[.env.example](.env.example) before starting the backend.

## Configuration

Copy `.env.example` to `.env` and fill in real values (or set the same variables directly in
Coolify's environment settings for this resource):

| Variable | Purpose |
| --- | --- |
| `MAIL_HOST` / `MAIL_PORT` | SMTP relay, defaults to Gmail's |
| `MAIL_USERNAME` / `MAIL_PASSWORD` | SMTP credentials — for Gmail, use an [App Password](https://myaccount.google.com/apppasswords), not the account password |
| `MAIL_FROM` | From-address shown on the outgoing mail |
| `CONTACT_RECIPIENT_EMAIL` | Where contact form submissions are sent |
| `FRONTEND_ORIGIN` | Origin allowed to call the API directly (only matters if the frontend isn't served behind the same nginx) |
| `APP_PORT` | Host port the site is published on |

## Running with Docker Compose / Coolify

```bash
make build   # docker compose build
make up      # docker compose up -d
make logs    # follow logs
make down    # stop
make deploy  # git pull && rebuild + restart, handy for a manual redeploy over SSH
```

The frontend container is the only public entrypoint — nginx serves the built site and proxies
`/api/*` to the backend over the Docker network, so the backend never needs a published port. In
Coolify, point a new resource at this repo's `docker-compose.yml`, set the environment variables
above, and it will build both services.

## Known placeholders

A few real-world details weren't provided and are marked with `TODO` in
[frontend/src/content/company.ts](frontend/src/content/company.ts) — the exact postal code for
the address and a phone number. Fill those in (and swap the SMTP credentials in) before the site
goes live.
