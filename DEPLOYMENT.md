# 🚀 DERA Residence - GitHub Pages Deployment Guide

Complete step-by-step guide to hosting your project management system on GitHub Pages.

---

## 📋 Prerequisites

Before you begin, make sure you have:
- [ ] A GitHub account ([Sign up here](https://github.com/join))
- [ ] Git installed on your computer ([Download here](https://git-scm.com/downloads))
- [ ] The project files downloaded to your computer

---

## 🎯 Method 1: Web Interface (Easiest)

**Best for:** First-time users, no command line required

### Step 1: Create Repository

1. Log in to [GitHub](https://github.com)
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**

### Step 2: Configure Repository

1. **Repository name:** `dera-residence` (or your preferred name)
2. **Description:** "DERA Residence Construction Project Management"
3. **Visibility:** Select **Public** (required for free GitHub Pages)
4. **Initialize:** Leave all checkboxes unchecked
5. Click **"Create repository"**

### Step 3: Upload Files

1. On the new repository page, you'll see "Quick setup"
2. Click **"uploading an existing file"** link
3. Drag and drop these files from your computer:
   - `index.html`
   - `README.md`
   - `.gitignore`
   - Other documentation files
4. Scroll down and click **"Commit changes"**

### Step 4: Enable GitHub Pages

1. Click **"Settings"** tab (top of repository)
2. Scroll down and click **"Pages"** in the left sidebar
3. Under **"Build and deployment"**:
   - **Source:** Deploy from a branch
   - **Branch:** Select `main` from dropdown
   - **Folder:** Select `/ (root)` from dropdown
4. Click **"Save"**
5. Wait 1-2 minutes for deployment

### Step 5: Access Your Site

1. Refresh the Pages settings page
2. You'll see a message: "Your site is live at..."
3. Click the link or visit:
   ```
   https://YOUR-GITHUB-USERNAME.github.io/dera-residence/
   ```
4. Bookmark this URL for easy access!

**✅ Done! Your project is now live on the internet.**

---

## 💻 Method 2: Command Line (Advanced)

**Best for:** Developers, those comfortable with terminal/command prompt

### Steps:

```bash
# Navigate to project folder
cd /path/to/dera-residence-github

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: DERA Residence Project Management"

# Add GitHub remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/dera-residence.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages via Settings → Pages as described in Method 1.

---

## 🔄 Updating Your Site

### After changes to index.html:

**Web Interface:**
1. Navigate to file on GitHub
2. Click pencil icon to edit
3. Make changes
4. Commit changes
5. Wait 1-2 minutes, refresh live site

**Command Line:**
```bash
git add .
git commit -m "Update: describe changes"
git push origin main
```

---

## 🆘 Troubleshooting

### Issue: "404 - Page Not Found"
- Wait 2-5 minutes after enabling Pages
- Clear browser cache (Ctrl+F5)
- Verify repository is Public
- Check branch is set to `main`

### Issue: "Site Not Updating"
- Verify changes committed to GitHub
- Clear browser cache
- Wait 2-5 minutes for rebuild
- Hard refresh (Ctrl+Shift+R)

### Issue: "Data Not Persisting"
- Use same browser consistently
- Don't use private/incognito mode
- Check browser allows localStorage
- Export to CSV for backup

---

## 🎓 Learning Resources

- [GitHub Guides](https://guides.github.com/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)

---

**Questions?** Refer to README.md or open an issue on GitHub.

**Good luck with your construction project! 🏗️**
