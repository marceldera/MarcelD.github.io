# DERA Residence - Project Management System

![Project Status](https://img.shields.io/badge/Status-Active-green)
![Budget](https://img.shields.io/badge/Budget-$697,835-blue)
![Timeline](https://img.shields.io/badge/Timeline-Feb%202026--Dec%202026-orange)

A comprehensive web-based project management system for tracking the DERA Residence construction project at 791 110th Ave N, Naples, FL 34115.

## 🏗️ Project Overview

- **Location:** 791 110th Ave N, Naples, FL 34115
- **Total Budget:** $697,835
- **Project Timeline:** February 2026 - December 2026
- **Project Type:** Complete residential rebuild

## ✨ Features

### 📊 Real-Time Tracking
- **Budget Management:** Track budget vs. actual quotes for every line item
- **Contractor Management:** Record contractor names and quotes for each task
- **Automatic Calculations:** Real-time variance calculations and totals
- **Completion Tracking:** Visual percentage of tasks with confirmed contractors

### 🎨 Professional Interface
- Modern, responsive design that works on desktop, tablet, and mobile
- Color-coded task types (Milestone, Critical, Standard)
- Interactive summary dashboard with key metrics
- Visual variance indicators (green for under budget, red for over)

### 💾 Data Management
- **Auto-Save:** All data automatically saved to browser localStorage
- **Export to CSV:** Download your data for use in Excel or Google Sheets
- **Print-Friendly:** Clean print layout for physical documentation
- **Persistent Storage:** Your data persists between browser sessions

## 🚀 Quick Start

### Option 1: View Live Site (GitHub Pages)

Once deployed, visit: `https://[your-username].github.io/dera-residence/`

### Option 2: Run Locally

1. Download the `index.html` file
2. Open it in any modern web browser
3. Start entering contractor information

No server or installation required!

## 📖 How to Use

### Adding Contractor Information

1. **Enter Contractor Name:** Type the contractor's name in the "Contractor Name" column
2. **Enter Quote:** Input the quoted price in the "Contractor Quote" column
3. **Automatic Updates:** The system automatically calculates:
   - Individual line item variance (Budget - Quote)
   - Total project variance
   - Completion percentage
   - Color-coded indicators

### Managing Your Data

- **Save Progress:** Click the "💾 Save Progress" button (or data auto-saves on input)
- **Export Data:** Click "📊 Export to CSV" to download your data
- **Print Report:** Click "🖨️ Print" for a professional printout

### Understanding the Display

- **Green Amounts:** Under budget (positive variance)
- **Red Amounts:** Over budget (negative variance)
- **Yellow Rows:** Milestone tasks
- **Pink Rows:** Critical path tasks
- **Gray Headers:** Major project phases

## 🌐 GitHub Pages Deployment

### Step 1: Create a New Repository

1. Go to [GitHub](https://github.com)
2. Click the "+" icon → "New repository"
3. Name it `dera-residence` (or your preferred name)
4. Set to **Public**
5. Click "Create repository"

### Step 2: Upload Files

**Option A: Using GitHub Web Interface**
1. Click "uploading an existing file"
2. Drag and drop all files from this folder
3. Commit the files

**Option B: Using Git Command Line**
```bash
# Navigate to the project folder
cd dera-residence-github

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - DERA Residence Project Management"

# Add remote repository (replace with your GitHub URL)
git remote add origin https://github.com/[your-username]/dera-residence.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under "Source," select **main** branch
5. Click **Save**
6. Your site will be live at: `https://[your-username].github.io/dera-residence/`

### Step 4: Access Your Site

After a few minutes, your site will be live! Share the URL with your team.

## 📋 Project Phases

The project is organized into 14 major phases:

1. **Preconstruction Planning** (Feb 15 - Mar 12)
2. **Permits & Approvals** (Mar 14 - Mar 31)
3. **Demolition & Site Work** (Apr 1 - Apr 15)
4. **Grading & Fill Work** (Apr 19 - May 14)
5. **Foundation** (May 15 - Jun 13)
6. **Structure (CMU Walls & Columns)** (Jun 16 - Jul 11)
7. **Framing** (Jun 16 - Aug 1)
8. **MEP Rough-Ins** (Jul 28 - Aug 14)
9. **Pool & Outdoor Features** (Jun 23 - Aug 28)
10. **Insulation & Drywall** (Aug 15 - Sep 19)
11. **Exterior Finishes** (Sep 1 - Oct 15)
12. **Interior Finishes** (Sep 11 - Nov 10)
13. **MEP Final Trim & Fixtures** (Oct 27 - Nov 10)
14. **Final Inspections & Completion** (Nov 11 - Dec 18)

## 🔧 Technical Details

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

### Data Storage
- Uses browser localStorage API
- Data persists across sessions
- Private to your browser (not shared online)
- Backup recommended via CSV export

### No Server Required
This is a static HTML/JavaScript application:
- No backend server needed
- No database required
- No installation necessary
- Works entirely in the browser

## 📱 Mobile Support

Fully responsive design optimized for:
- Desktop computers (1920px+)
- Laptops (1366px - 1920px)
- Tablets (768px - 1366px)
- Mobile phones (<768px)

## 🔒 Privacy & Security

- All data stored locally in your browser
- No data transmitted to external servers
- No tracking or analytics
- Your contractor information remains private

## 💡 Tips & Best Practices

1. **Regular Backups:** Export to CSV weekly to backup your data
2. **Browser Consistency:** Use the same browser to maintain data
3. **Multiple Devices:** Export CSV from one device, import manually to another
4. **Clear Communication:** Share the GitHub Pages URL with your team
5. **Print Records:** Print periodic snapshots for physical records

## 📝 Future Enhancements (Optional)

Potential features you could add:
- Document upload capabilities
- Photo gallery for progress photos
- Timeline visualization/Gantt chart view
- Email notifications for milestones
- Multi-user collaboration features
- Payment tracking and schedule

## 🤝 Contributing

This is a personal project management tool. Feel free to fork and customize for your needs!

## 📄 License

This project is private and proprietary to the DERA Residence construction project.

## 📞 Support

For questions or issues with the project management system, contact the project owner.

## 🎯 Project Milestones

Key milestones to track:
- ✅ **Building Permit Approval** (Mar 27, 2026)
- ✅ **Framing Inspection** (Aug 14, 2026)
- ✅ **Certificate of Occupancy** (Dec 18, 2026)

---

**Last Updated:** November 2025  
**Project Owner:** Marcel & Noelle  
**Property Address:** 791 110th Ave N, Naples, FL 34115
