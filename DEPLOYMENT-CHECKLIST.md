# DERA Project - Deployment Checklist

Use this checklist to ensure everything is properly set up.

## ✅ GitHub Pages Setup (5 minutes)

- [ ] Create GitHub account (if needed)
- [ ] Create new repository named: `dera-residence-project`
- [ ] Upload these files to repository:
  - [ ] index.html
  - [ ] detailed-project-plan-standalone.html
  - [ ] tile-calculator.html
  - [ ] contractor-organizer.html
- [ ] Enable GitHub Pages in repository settings
- [ ] Wait 2-3 minutes for deployment
- [ ] Visit your site URL: `https://YOUR-USERNAME.github.io/dera-residence-project/`
- [ ] Verify main page loads correctly
- [ ] Test "Tile Calculator" button opens new page
- [ ] Test "Contractor Organizer" button opens new page

**Your GitHub Pages URL:** _________________________________

## ✅ Firebase Configuration (5 minutes)

- [ ] Go to Firebase Console: https://console.firebase.google.com
- [ ] Select existing project: `naples-791-build`
- [ ] Enable Authentication:
  - [ ] Click "Authentication" → "Get Started"
  - [ ] Enable "Email/Password" sign-in method
  - [ ] Click "Save"
- [ ] Create Firestore Database:
  - [ ] Click "Firestore Database"
  - [ ] Click "Create database"
  - [ ] Select "Start in production mode"
  - [ ] Choose location: `us-east1` (closest to Florida)
  - [ ] Click "Enable"
- [ ] Set Security Rules:
  - [ ] Go to Firestore → Rules tab
  - [ ] Copy content from `firestore.rules` file
  - [ ] Paste into rules editor
  - [ ] Click "Publish"
- [ ] Add Authorized Domain:
  - [ ] Go to Authentication → Settings → Authorized domains
  - [ ] Click "Add domain"
  - [ ] Add: `YOUR-USERNAME.github.io`
  - [ ] Click "Add"

**Firebase Project:** naples-791-build ✓ (Already configured)

## ✅ First Login Test (2 minutes)

- [ ] Open your GitHub Pages site
- [ ] Click on "Detailed Project Plan" tab
- [ ] Click "Save to Cloud" button
- [ ] Login modal appears
- [ ] Click "Sign Up"
- [ ] Enter email: _________________________________
- [ ] Enter password (min 6 characters)
- [ ] Confirm password
- [ ] Click "Create Account"
- [ ] Verify you're logged in (email shows in top right)
- [ ] Make a test change (check a task box)
- [ ] Click "Save to Cloud"
- [ ] Verify success message appears

**Test Account Email:** _________________________________

## ✅ Feature Verification (5 minutes)

### Main Dashboard
- [ ] Project Overview tab loads
- [ ] Shows $697,835 total budget
- [ ] Cost breakdown table displays correctly
- [ ] All 12 tabs are visible and clickable

### Detailed Project Plan (Cloud Features)
- [ ] Task table loads with all 50+ tasks
- [ ] Can check task boxes to mark complete
- [ ] Progress bar updates when tasks checked
- [ ] Can add notes to tasks
- [ ] "Save to Cloud" button works
- [ ] "Load from Cloud" button retrieves data
- [ ] "Export to Excel" downloads CSV file

### Phase Tabs
- [ ] Demolition & Site Work tab shows $31,800 budget
- [ ] Foundation tab shows $44,150 budget
- [ ] Structural tab shows $85,585 budget
- [ ] Framing tab shows $117,090 budget
- [ ] Exterior tab shows $104,740 budget
- [ ] MEP Systems tab shows $116,800 budget
- [ ] Interior Finishes tab shows $128,670 budget
- [ ] Pool & Outdoor tab shows $42,500 budget
- [ ] Each tab shows relevant task breakdown

### Tile Calculator
- [ ] "Open Tile Calculator" button works
- [ ] New page opens with tile calculator
- [ ] Shows 9,011 SF base / 10,026 SF with waste
- [ ] Lists all 16 tile types
- [ ] Displays pricing tables
- [ ] Retailer links are clickable

### Contractor Organizer
- [ ] "Open Contractor Organizer" button works
- [ ] New page opens with contractor directory
- [ ] Shows "186+ Contractors" in header
- [ ] Search box is functional
- [ ] Category sidebar loads 22 categories
- [ ] Clicking category filters contractors
- [ ] Contractor cards show contact info
- [ ] Can select contractors with checkboxes

## ✅ Mobile Testing (Optional but Recommended)

- [ ] Open site on phone/tablet
- [ ] Tabs are scrollable horizontally
- [ ] Tables are readable and scrollable
- [ ] Buttons are tap-friendly
- [ ] Login modal works on mobile
- [ ] Can check tasks and add notes
- [ ] Tile calculator is readable on mobile
- [ ] Contractor list is usable on mobile

## ✅ Bookmarking & Access (1 minute)

- [ ] Bookmark main dashboard
- [ ] Bookmark tile calculator page
- [ ] Bookmark contractor organizer page
- [ ] Add main page to phone home screen
- [ ] Save Firebase console bookmark
- [ ] Save GitHub repository bookmark

## ✅ Data Backup Plan

- [ ] Tested export to CSV from project plan
- [ ] Saved CSV file to local computer
- [ ] Created backup folder for weekly exports
- [ ] Set reminder to export data weekly

## ✅ Team Access Setup (If Sharing with Others)

- [ ] Shared GitHub Pages URL with Noelle: ______________
- [ ] Created separate Firebase account for Noelle
- [ ] Tested that both can login and access
- [ ] Verified data syncs between accounts
- [ ] Explained "Save to Cloud" workflow

## 📋 Post-Setup Actions

After completing checklist:

1. **Regular Usage:**
   - Update task progress daily
   - Save to cloud after each session
   - Export CSV backup weekly

2. **Contractor Management:**
   - Use organizer to find contractors
   - Track bids in Bid Tracking tab
   - Keep contact information updated

3. **Material Planning:**
   - Reference tile calculator for quantities
   - Update as selections change
   - Keep retailer pricing current

4. **Data Management:**
   - Regular cloud saves (don't rely on local)
   - Weekly CSV exports as backup
   - Monitor Firebase usage in console

## 🆘 If Something Doesn't Work

**GitHub Pages issues:**
- Wait 3-5 minutes and refresh
- Check repository Settings → Pages is enabled
- Verify files uploaded with exact names (case-sensitive)
- Try accessing in incognito/private window

**Firebase login issues:**
- Verify Email/Password auth is enabled
- Check authorized domains includes your GitHub Pages domain
- Try password reset if forgot credentials
- Check browser console for error messages

**Tile/Contractor pages not loading:**
- Verify files uploaded: tile-calculator.html, contractor-organizer.html
- Check files are in repository root (not in a folder)
- Try accessing directly: your-url/tile-calculator.html
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**Data not saving:**
- Ensure you're logged in (email shows top right)
- Click "Save to Cloud" after making changes
- Wait for success confirmation message
- Check Firebase console → Firestore to see if data appears

## ✨ Success Criteria

You've successfully deployed when:

✅ Main dashboard loads at GitHub Pages URL
✅ Can create account and login
✅ Tasks can be checked and progress updates
✅ Data saves to cloud and persists
✅ Tile calculator opens and shows all calculations
✅ Contractor organizer opens with full database
✅ All 12 tabs work and show correct data
✅ Mobile access works (if tested)

---

**Deployment Date:** __________________

**Completed By:** __________________

**Site URL:** __________________

**Notes/Issues:** 
_________________________________________
_________________________________________
_________________________________________
