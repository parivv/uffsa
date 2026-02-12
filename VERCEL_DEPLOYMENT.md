# Vercel Deployment Guide

## Prerequisites

1. **Install Vercel CLI**: `npm install -g vercel`
2. **Create a Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Prepare Environment Variables**: Have your Neon DATABASE_URL ready

---

## Deployment Steps

### 1. Initial Deployment

From the **root directory** of the project:

```bash
cd /Users/rjtabelon/Desktop/ClubProjects/uffsa
vercel
```

Follow the prompts:

- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No (first time)
- **Project name?** → uffsa (or your preference)
- **In which directory is your code located?** → ./
- **Want to override settings?** → No

### 2. Configure Environment Variables

After initial deployment, add environment variables via the Vercel dashboard or CLI:

**Via Dashboard:**

1. Go to your project at [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project → **Settings** → **Environment Variables**
3. Add these variables:

| Name           | Value                                  | Environment                      |
| -------------- | -------------------------------------- | -------------------------------- |
| `DATABASE_URL` | Your Neon PostgreSQL connection string | Production, Preview, Development |
| `FRONTEND_URL` | `https://uffsa.net`                    | Production                       |
| `NODE_ENV`     | `production`                           | Production                       |

**Via CLI:**

```bash
vercel env add DATABASE_URL
# Paste your Neon connection string when prompted
# Select: Production, Preview, Development

vercel env add FRONTEND_URL
# Enter: https://uffsa.net
# Select: Production

vercel env add NODE_ENV
# Enter: production
# Select: Production
```

### 3. Redeploy with Environment Variables

```bash
vercel --prod
```

### 4. Configure Custom Domain

**Via Dashboard:**

1. Go to **Settings** → **Domains**
2. Add `uffsa.net` and `www.uffsa.net`
3. Vercel will provide DNS instructions

**Update your DNS provider** with the records Vercel provides (usually a CNAME pointing to `cname.vercel-dns.com`)

### 5. Verify Deployment

Once deployed, test these URLs:

- **Frontend**: `https://uffsa.net`
- **Backend Health Check**: `https://uffsa.net/api`
- **Backend Users API**: `https://uffsa.net/api/users`

---

## Project Structure

```
├── vercel.json              # Vercel configuration (monorepo)
├── frontend/
│   ├── .env.production      # Production env (API_URL=/api)
│   ├── .env.development     # Development env (API_URL=http://localhost:5000/api)
│   └── package.json         # Added vercel-build script
└── backend/
    ├── src/
    │   └── index.js         # Exports app for serverless
    └── .env.example         # Environment template
```

---

## How It Works

1. **Vercel Routes**:
   - `/api/*` → Backend serverless functions
   - `/*` → Frontend static files

2. **Frontend**: Built as static files from React
3. **Backend**: Runs as serverless functions (no persistent server)

---

## Local Development

The project still works locally as before:

**Terminal 1 - Backend:**

```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**

```bash
cd frontend
npm start
```

The frontend will use `http://localhost:5000/api` in development mode.

---

## Useful Commands

```bash
# Deploy to preview (test environment)
vercel

# Deploy to production
vercel --prod

# View deployment logs
vercel logs

# List environment variables
vercel env ls

# Pull environment variables to local
vercel env pull

# Open project in Vercel dashboard
vercel open
```

---

## Troubleshooting

### Build Fails

- Check that all dependencies are in `package.json`
- Verify Node.js version compatibility
- Review build logs: `vercel logs`

### API Routes Not Working

- Ensure `vercel.json` routes are correct
- Verify environment variables are set
- Check CORS configuration in backend

### Database Connection Issues

- Verify `DATABASE_URL` is set in Vercel dashboard
- Check Neon database is accessible
- Ensure connection string includes `?sslmode=require`

### Custom Domain Not Working

- Verify DNS records are correct
- Allow 24-48 hours for DNS propagation
- Check domain configuration in Vercel dashboard

---

## Continuous Deployment

Vercel automatically deploys when you push to your Git repository:

1. **Connect Git Repository**:
   - Go to Vercel Dashboard → Select Project → Settings → Git
   - Connect to GitHub, GitLab, or Bitbucket

2. **Auto-Deploy**:
   - Pushes to `main` branch → Production deployment
   - Pushes to other branches → Preview deployment

3. **Environment Variables**:
   - Already set variables persist across deployments
   - Update variables in dashboard as needed

---

## Migration from GitHub Pages

Your custom domain `uffsa.net` will switch from GitHub Pages to Vercel:

1. Deploy to Vercel first (get deployment URL)
2. Update DNS from GitHub Pages IPs to Vercel CNAME
3. Wait for DNS propagation
4. Keep GitHub Pages deploy script for backup option

That's it! Your site is now fully deployed on Vercel. 🚀
