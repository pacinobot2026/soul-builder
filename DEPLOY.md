# Quick Deploy Instructions

## GitHub + Vercel (5 Minutes)

### Step 1: Create GitHub Repo

```bash
cd soul-builder

# Initialize git
git init
git add .
git commit -m "Initial commit - SOUL.md Builder for Shadow Workshop"
git branch -M main
```

### Step 2: Push to GitHub

**Option A: New Repo via GitHub CLI (if you have it)**
```bash
gh repo create soul-builder --public --source=. --remote=origin --push
```

**Option B: New Repo via GitHub Website**
1. Go to github.com and create new repository named `soul-builder`
2. Don't initialize with README (we have files already)
3. Copy the remote URL
4. Run:
```bash
git remote add origin https://github.com/YOUR_USERNAME/soul-builder.git
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to **vercel.com** and sign in (use GitHub account)
2. Click **"Add New..."** → **"Project"**
3. Find and import your `soul-builder` repository
4. Vercel will auto-detect Next.js settings
5. Click **"Deploy"**
6. Wait 30-60 seconds
7. **DONE!** You get a live URL like `soul-builder.vercel.app`

### Step 4: Custom Domain (Optional)

In Vercel dashboard:
1. Go to your project
2. Settings → Domains
3. Add your custom domain (e.g., `soul.chadnicely.com`)
4. Follow DNS setup instructions
5. SSL auto-configured

---

## Alternative: Vercel CLI (Even Faster)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy (one command!)
cd soul-builder
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Scope? Your account
# - Link to existing project? No
# - Project name? soul-builder
# - Deploy? Yes

# Get instant URL!
```

For production:
```bash
vercel --prod
```

---

## Testing Locally Before Deploy

```bash
cd soul-builder
npm run dev
# Open http://localhost:3000
```

Test the flow:
1. Fill out all 6 questions
2. Click "Generate My SOUL.md"
3. Verify the output looks good
4. Test download button
5. Test "Start Over" button

---

## Sharing With Students

Once deployed, share:
- **URL:** `https://soul-builder.vercel.app` (or your custom domain)
- **Instructions:** "Go here, answer 6 questions, download SOUL.md, place in workspace"
- **Video tutorial:** Consider recording a 2-minute walkthrough

---

## Updating After Deploy

Make changes locally, then:

```bash
git add .
git commit -m "Updated SOUL.md template"
git push

# Vercel auto-deploys on push!
```

Or with Vercel CLI:
```bash
vercel --prod
```

---

**That's it! Your students now have a simple tool to build their AI personality.**
