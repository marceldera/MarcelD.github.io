# GitHub Pages Deployment Guide

This guide will walk you through deploying your DERA Residence Project Management system to GitHub Pages.

## Prerequisites

- A GitHub account (free): [Sign up here](https://github.com/join)
- All files from the `dera-residence-github` folder

## 🚀 Deployment Steps

### Method 1: GitHub Web Interface (Easiest - No Terminal Required)

#### Step 1: Create Repository

1. Log in to [GitHub](https://github.com)
2. Click the **+** icon in the top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name:** `dera-residence` (or any name you prefer)
   - **Description:** "DERA Residence Construction Project Management"
   - **Visibility:** Choose **Public** (required for free GitHub Pages)
   - **DO NOT** check "Initialize with README" (we already have one)
5. Click **"Create repository"**

#### Step 2: Upload Files

1. On the new repository page, click **"uploading an existing file"**
2. Drag and drop ALL files from your `dera-residence-github` folder:
   - `index.html`
   - `README.md`
   - `.gitignore`
   - `DEPLOYMENT_GUIDE.md`
3. Add a commit message: "Initial commit - DERA Residence Project"
4. Click **"Commit changes"**

#### Step 3: Enable GitHub Pages

1. In your repository, click the **"Settings"** tab (top menu)
2. Scroll down and click **"Pages"** in the left sidebar
3. Under **"Source"**, select:
   - **Branch:** `main` (or `master`)
   - **Folder:** `/ (root)`
4. Click **"Save"**
5. Wait 1-3 minutes for deployment

#### Step 4: Access Your Site

1. Refresh the Settings → Pages page
2. You'll see: **"Your site is live at https://[your-username].github.io/dera-residence/"**
3. Click the link to view your site!

---

### Method 2: Git Command Line (For Technical Users)

#### Step 1: Install Git

- **Windows:** Download from [git-scm.com](https://git-scm.com/download/win)
- **Mac:** Install via Terminal: `brew install git` or download from [git-scm.com](https://git-scm.com/download/mac)
- **Linux:** `sudo apt-get install git` (Ubuntu/Debian) or `sudo yum install git` (CentOS)

#### Step 2: Create Repository on GitHub

1. Go to [GitHub](https://github.com) and create a new repository (see Method 1, Step 1)
2. **Copy the repository URL** (looks like: `https://github.com/[your-username]/dera-residence.git`)

#### Step 3: Deploy via Command Line

Open Terminal (Mac/Linux) or Git Bash (Windows) and run:

```bash
# Navigate to your project folder
cd /path/to/dera-residence-github

# Initialize Git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - DERA Residence Project Management"

# Add your GitHub repository as remote
git remote add origin https://github.com/[YOUR-USERNAME]/dera-residence.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

Replace `[YOUR-USERNAME]` with your actual GitHub username.

#### Step 4: Enable GitHub Pages

Follow Method 1, Step 3 above.

---

## 🔗 Sharing Your Site

Once deployed, share your site URL with contractors and team members:

```
https://[your-username].github.io/dera-residence/
```

### Tips:
- **Bookmark it** in your browser for quick access
- **Add to phone home screen** for mobile access
- **Share with Noelle** so you can both track progress

---

## 🔄 Updating Your Site

When you need to update the project:

### Via GitHub Web Interface

1. Go to your repository on GitHub
2. Click on `index.html`
3. Click the **pencil icon** (Edit this file)
4. Make your changes
5. Scroll down, add commit message
6. Click **"Commit changes"**
7. Changes will be live in 1-2 minutes

### Via Git Command Line

```bash
# Make your changes to files locally
# Then commit and push:

git add .
git commit -m "Updated contractor information"
git push origin main
```

---

## 📱 Custom Domain (Optional)

Want to use your own domain like `dera-residence.com`?

1. Purchase a domain from GoDaddy, Namecheap, or Google Domains
2. In your repository, go to Settings → Pages
3. Under "Custom domain," enter your domain
4. Follow GitHub's DNS setup instructions
5. Your site will be available at your custom domain!

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Site loads without errors
- [ ] All task rows are visible
- [ ] Can enter contractor names
- [ ] Can enter quotes
- [ ] Totals calculate automatically
- [ ] Save button works
- [ ] Export to CSV works
- [ ] Print view looks correct
- [ ] Mobile view works properly

---

## 🆘 Troubleshooting

### Site Not Loading

**Problem:** 404 error or blank page  
**Solution:** 
- Check that `index.html` is in the root directory (not in a subfolder)
- Verify GitHub Pages is enabled in Settings → Pages
- Wait 5 minutes after initial deployment

### Changes Not Showing

**Problem:** Updates aren't visible on the site  
**Solution:**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait 2-3 minutes for GitHub Pages to rebuild
- Check that changes were committed to the `main` branch

### Data Not Saving

**Problem:** Contractor info disappears when refreshing  
**Solution:**
- This is normal behavior in "incognito" or "private" browsing mode
- Use regular browser window
- Export to CSV regularly as backup

### Site Shows Code Instead of Website

**Problem:** Raw HTML code visible instead of rendered page  
**Solution:**
- Rename file to `index.html` (not `index.htm` or any other name)
- Ensure file is in root directory of repository

---

## 🔐 Security Notes

### Public vs Private Repository

- **Public Repository** (Free GitHub Pages)
  - Site is visible to anyone with the URL
  - Repository code is visible to everyone
  - Best for non-sensitive project tracking

- **Private Repository** (Requires GitHub Pro)
  - Repository is private
  - Site can still be public or private
  - Costs $4/month per user

### Data Privacy

- **Contractor information is stored locally** in browser localStorage
- **No data is sent to servers** (except when you explicitly export CSV)
- To keep contractor quotes private, consider:
  - Using private repository (GitHub Pro)
  - Not sharing the URL publicly
  - Using password-protected sections (requires custom development)

---

## 📞 Need Help?

- **GitHub Help:** [docs.github.com/pages](https://docs.github.com/pages)
- **Git Tutorial:** [git-scm.com/doc](https://git-scm.com/doc)
- **YouTube:** Search "GitHub Pages tutorial"

---

## 🎉 Success!

Once deployed, you'll have a professional project management system accessible from anywhere with internet access. Perfect for tracking your $697,835 construction project from planning through completion!

**Your Site:** `https://[your-username].github.io/dera-residence/`

Share this URL with your team and start managing your project effectively!
