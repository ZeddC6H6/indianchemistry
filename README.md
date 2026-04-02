# Zed Chemistry Academy Website

A static Khan Academy-style website for the **Zed Chemistry** channel.

## Local run

Open `index.html` directly in a browser, or run a static server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy (GitHub Pages)

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

### What it does
- triggers on pushes to the `main` or `work` branch (and manual runs)
- uploads the repository as a Pages artifact
- deploys the site via GitHub Pages

### One-time repo settings
In GitHub repository settings:
1. Go to **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push to the `main` or `work` branch (or run the workflow manually).
4. After deploy, your site URL will appear in the workflow summary.
