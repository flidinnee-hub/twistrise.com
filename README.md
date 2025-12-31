# TwistRise LLC - Business Consulting Website

This is a Next.js static website for TwistRise LLC, designed with a "Dark Luxury Corporate" aesthetic.

## Deployment Status
- **Live URL**: [twistrise.com](https://twistrise.com)
- **Hosting**: Hostinger (Shared/Web Hosting)
- **Deployment**: Automatic via GitHub Actions

## How It Works
1.  **Code Changes**: All edits are made in this repository.
2.  **Push to Main**: When code is pushed to the `main` branch, a GitHub Action runs.
3.  **Build**: The action runs `npm run build` to generate static HTML files.
4.  **Upload**: The static files are uploaded to Hostinger's `public_html` directory via FTP.

## Local Development
To run this project locally:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
- `app/`: Main application code (Next.js App Router).
- `components/`: Reusable UI components (Header, Footer).
- `public/`: Static assets (images, icons).
- `.github/workflows/`: Automation scripts for deployment.

<!-- Deployment Trigger: Final Fresh Upload -->
