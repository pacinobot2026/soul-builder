# SOUL.md Builder

**Build your OpenClaw AI agent's personality - Shadow Workshop Edition**

Built for Chad Nicely's Shadow Workshop students. This tool interviews you about your business and generates a customized SOUL.md file with Chad's methodology baked in.

## Philosophy (Built In)

- ⚡ Don't wait for perfect, just START
- ⚡ Do the things you KNOW you need to do
- ⚡ CEO mindset - oversee, don't get stuck
- ⚡ Each one teach one
- ⚡ Crack the code
- ⚡ Community-first thinking

## What It Does

Asks you 6 strategic questions:
1. **What are you building?** (Your business reality)
2. **What have you been avoiding?** (Becomes AI's priority list)
3. **What's your income goal?** (Services? Products? Both?)
4. **How proactive should your AI be?** (Ask first / Do & report / Build overnight)
5. **What boundaries matter?** (Money limits, approval requirements)
6. **What's your teaching style?** (So AI can help create student content)

Then generates a complete SOUL.md file tailored to YOUR business + Chad's teaching philosophy.

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:3000
```

## Deploy to Vercel (Recommended)

### Option 1: GitHub + Vercel (Easiest)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - SOUL.md Builder"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/soul-builder.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Click "Deploy"
   - Done! Get your live URL

### Option 2: Vercel CLI (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd soul-builder
vercel

# Follow prompts
# Get instant live URL
```

## Deploy to Netlify (Alternative)

```bash
# Build static export
npm run build

# Upload /out folder to Netlify
# Or connect GitHub repo in Netlify dashboard
```

## Usage

1. Open the deployed URL
2. Answer the 6 questions about your business
3. Click "Generate My SOUL.md"
4. Download the file
5. Place `SOUL.md` in your OpenClaw workspace root
6. Restart your agent (or it loads on next session)

## Tech Stack

- **Next.js 16** - React framework
- **App Router** - Modern Next.js routing
- **Static Export** - No server needed
- **Pure Client-Side** - Privacy-first (no data sent anywhere)

## Customization

Edit `app/page.js` to:
- Add more questions
- Change the SOUL.md template
- Adjust the philosophy section
- Modify styling

## For Chad's Students

This tool is specifically designed for:
- Entrepreneurs building local media
- Digital marketers offering AI services
- Course creators teaching their system
- Community builders using AI

The generated SOUL.md includes Chad's methodology so your AI operates with his principles.

## Support

Questions? Ask in the Shadow Workshop Discord or Telegram group.

---

**Built with ❤️ for the Shadow Workshop community**
