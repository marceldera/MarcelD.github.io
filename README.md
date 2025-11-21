# DERA Residence - Complete Project Management System

## 🏠 Overview

This is a comprehensive construction project management system for the DERA Residence at 791 110th Ave N, Naples, FL. The system includes cloud-enabled project tracking, bid management, tile calculations, and a complete contractor directory.

## 📁 Files Included

1. **index.html** - Main project management dashboard with all core features
2. **tile-calculator.html** - Standalone tile calculator with 9,011 SF coverage
3. **contractor-organizer.html** - Complete database of 186+ SW Florida contractors

## 🚀 Deployment Instructions for GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository: `dera-residence-project`
4. Set visibility to Private (recommended) or Public
5. Click "Create repository"

### Step 2: Upload Files

Option A - Using GitHub Web Interface:
1. On your repository page, click "Add file" → "Upload files"
2. Drag and drop all three HTML files:
   - index.html
   - tile-calculator.html
   - contractor-organizer.html
3. Click "Commit changes"

Option B - Using Git Command Line:
```bash
git clone https://github.com/YOUR-USERNAME/dera-residence-project.git
cd dera-residence-project
# Copy the three HTML files here
git add .
git commit -m "Initial project setup"
git push origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository settings (click "Settings" tab)
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Your site will be published at: `https://YOUR-USERNAME.github.io/dera-residence-project/`

**🎉 Your site should be live in 1-2 minutes!**

## 🔧 Firebase Configuration

Your Firebase credentials are already configured in the index.html file:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyBXUuaY9QCVxgXynWKzBdM91a2QiNZVQi0",
    authDomain: "naples-791-build.firebaseapp.com",
    projectId: "naples-791-build",
    storageBucket: "naples-791-build.firebasestorage.app",
    messagingSenderId: "307309540602",
    appId: "1:307309540602:web:735cb7a476a356a6d7c543"
};
```

### Firebase Setup Steps:

1. **Enable Authentication:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select your project: `naples-791-build`
   - Click "Authentication" → "Get Started"
   - Enable "Email/Password" authentication
   - Click "Save"

2. **Configure Firestore Database:**
   - Click "Firestore Database" in Firebase Console
   - Click "Create database"
   - Start in **Production mode**
   - Choose location: `us-east1` (closest to Florida)
   - Click "Enable"

3. **Set Firestore Security Rules:**
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /projects/{projectId} {
         allow read, write: if request.auth != null;
       }
     }
   }
   ```

4. **Add Authorized Domain:**
   - Go to Authentication → Settings → Authorized domains
   - Add your GitHub Pages domain: `YOUR-USERNAME.github.io`

## 📱 Features Overview

### Main Dashboard (index.html)
- **Project Overview:** Complete cost breakdown ($697,835 total budget)
- **Detailed Project Plan:** Cloud-enabled with Firebase sync
  - 50+ tasks across 11 major phases
  - Real-time progress tracking
  - Notes and completion status for each task
  - Save/Load to cloud storage
- **Phase Tabs:** Detailed breakdowns for each construction phase:
  - Demolition & Site Work
  - Foundation
  - Structural (CMU & Concrete)
  - Framing
  - Exterior Systems
  - MEP Systems
  - Interior Finishes
  - Pool & Outdoor
- **Bid Tracking:** Manage contractor quotes and selections

### Tile Calculator (tile-calculator.html)
- Complete tile calculations for all rooms
- Waste factor calculations
- 16 different tile types across 9,011 SF
- Retailer pricing guides (premium, mid-range, budget)
- Specific tile recommendations with links

### Contractor Organizer (contractor-organizer.html)
- 186+ contractors across 22 categories
- Complete contact information
- License numbers and specialties
- Search and filter functionality
- Mass email capability
- Bid request system
- Export/import contractor data

## 🔐 First Time Login

When you first visit your site:

1. Click on "Detailed Project Plan" tab
2. Click "Save to Cloud" or "Load from Cloud"
3. You'll see a login modal
4. Click "Sign Up" to create your account
5. Enter your email and password (min 6 characters)
6. Once logged in, your data will sync with Firebase

## 💾 Using Cloud Features

### Save Your Progress:
1. Make changes to task completion or notes
2. Click "💾 Save to Cloud" button
3. Your data is saved to Firebase (accessible from anywhere)

### Load Saved Data:
1. Click "☁️ Load from Cloud" button
2. Your latest saved data will load automatically

### Export to Excel:
1. Click "📊 Export to Excel" button
2. Downloads a CSV file of your complete project plan

## 📊 Project Data

**Project Timeline:** Feb 15, 2025 - Aug 2025 (26 weeks)

**Major Phases:**
1. Preconstruction & Permits: $20,500
2. Demolition & Site Work: $31,800
3. Foundation: $44,150
4. Structure (CMU): $85,585
5. Framing: $117,090
6. MEP Systems: $116,800
7. Exterior: $104,740
8. Interior Finishes: $128,670
9. Pool & Outdoor: $42,500

**Total Budget:** $697,835

## 🔧 Troubleshooting

### Firebase Connection Issues:
- Ensure you've enabled Email/Password authentication in Firebase Console
- Verify your domain is added to Authorized domains
- Check browser console for specific error messages

### GitHub Pages Not Loading:
- Wait 2-3 minutes after initial deployment
- Ensure repository is public or you have proper access
- Check Settings → Pages to confirm deployment status

### Tile Calculator or Contractor Organizer Not Opening:
- Verify all three HTML files are in the repository root
- Check browser console for 404 errors
- Ensure files were uploaded with correct names (case-sensitive)

## 📧 Support

For questions or issues with:
- Firebase setup: Refer to [Firebase Documentation](https://firebase.google.com/docs)
- GitHub Pages: Refer to [GitHub Pages Documentation](https://docs.github.com/pages)
- Project features: Review the in-app help tooltips and documentation

## 🔄 Updates

To update the project:
1. Edit the HTML files locally
2. Upload updated files to GitHub (replace existing)
3. GitHub Pages will automatically redeploy (1-2 minutes)

## 🎯 Best Practices

1. **Regular Backups:** Export your project data regularly using the Export button
2. **Cloud Sync:** Save to cloud after each work session
3. **Browser Compatibility:** Best viewed in Chrome, Firefox, or Safari (latest versions)
4. **Mobile Access:** Fully responsive - works on phones and tablets
5. **Data Privacy:** Keep your Firebase credentials secure and don't share publicly

## 📞 Quick Access Links

Once deployed, you can bookmark these pages:
- Main Dashboard: `https://YOUR-USERNAME.github.io/dera-residence-project/`
- Tile Calculator: `https://YOUR-USERNAME.github.io/dera-residence-project/tile-calculator.html`
- Contractor Directory: `https://YOUR-USERNAME.github.io/dera-residence-project/contractor-organizer.html`

---

**Built for:** Marcel & Noelle Dera  
**Property:** 791 110th Ave N, Naples, FL  
**Project Type:** Complete Home Rebuild - High Velocity Hurricane Zone  
**Last Updated:** November 2024
