# 🔐 DERA Residence - Authentication Guide

## Overview

The DERA Residence project management system now includes **user authentication** with individual user accounts. Each user's contractor data is saved separately and persists when they return to the site.

---

## ✨ Key Features

### Multi-User Support
- ✅ **Multiple users** can access the same system
- ✅ **Individual accounts** with username/password
- ✅ **Private data** - each user's entries are separate
- ✅ **Secure passwords** - hashed using SHA-256
- ✅ **Session management** - stay logged in during your session
- ✅ **Easy registration** - create account in seconds

### Data Privacy
- Each user's contractor names and quotes are **private**
- Data is saved **per username** in browser storage
- No user can see another user's entered data
- The project template (tasks, budgets, timeline) is shared

---

## 🚀 Getting Started

### First Time Users

1. **Open the website**
2. **Click "Register here"** (below the login button)
3. **Fill in the registration form:**
   - Username (minimum 3 characters)
   - Password (minimum 6 characters)
   - Confirm password
4. **Click "Create Account"**
5. **Automatic redirect** to login screen
6. **Login** with your new credentials

### Returning Users

1. **Open the website**
2. **Enter your username and password**
3. **Click "Login"**
4. **Your data loads automatically** - all your contractor names and quotes appear

---

## 📝 Registration Requirements

### Username
- **Minimum:** 3 characters
- **Case sensitive:** "Marcel" and "marcel" are different
- **Must be unique:** Each username can only be used once
- **Allowed characters:** Letters, numbers, and most symbols
- **Recommendation:** Use your first name or initials

### Password
- **Minimum:** 6 characters
- **Case sensitive:** "Password" and "password" are different
- **Must match:** Confirmation must match exactly
- **Recommendation:** Use a memorable password (stored securely)

---

## 🔒 Security Features

### Password Hashing
- Passwords are **never stored** in plain text
- Uses **SHA-256** cryptographic hashing
- Even if someone accesses localStorage, passwords are protected
- Hash is one-way - cannot be reversed to get original password

### Session Management
- Login session saved in **sessionStorage**
- Stays logged in until you:
  - Click "Logout"
  - Close the browser window/tab
  - Clear browser data
- Session is browser-specific (won't carry to other devices)

### Data Storage
Users are stored as:
```
localStorage["deraUsers"] = {
  "marcel": "hashed_password_here",
  "noelle": "different_hashed_password"
}
```

User data is stored as:
```
localStorage["deraUserData_marcel"] = {
  "contractor-3": "ABC Construction",
  "quote-3": "17000",
  ...
}
```

---

## 👥 Multi-User Scenarios

### Scenario 1: Project Manager
**Use case:** Marcel managing the overall project
- Creates account: "marcel"
- Enters primary contractor quotes
- Tracks overall budget vs actual
- Exports CSV reports for meetings

### Scenario 2: Finance Team
**Use case:** Noelle tracking payments and invoices
- Creates account: "noelle"
- Enters verified contractor quotes
- Monitors payment schedules
- Independent tracking from project manager

### Scenario 3: Contractor
**Use case:** Sub working on specific phases
- Creates account: "electrical_contractor"
- Views project tasks and timeline
- Enters their own quote estimates
- Tracks their scope without seeing others' data

### Scenario 4: Stakeholder
**Use case:** Investor or family member monitoring progress
- Creates account: "investor1"
- Views project structure and budget
- Can enter notes or observations
- Read-only monitoring of project phases

---

## 💡 Best Practices

### Account Management
- ✅ **Choose memorable usernames** - you'll need to remember it
- ✅ **Use secure passwords** - at least 8-10 characters recommended
- ✅ **Keep credentials safe** - store in password manager
- ❌ **Don't share accounts** - each person should have their own
- ❌ **Don't use sensitive usernames** - keep it professional

### Data Management
- ✅ **Export CSVs regularly** - backup your data
- ✅ **Save after major updates** - click "Save Progress" button
- ✅ **Use same browser** - for consistent access
- ❌ **Don't clear browser data** - you'll lose your account
- ❌ **Don't use private/incognito mode** - won't persist

### Collaboration
- ✅ **Communicate username format** with team
- ✅ **Establish naming conventions** - e.g., "firstname_lastname"
- ✅ **Document who has accounts** - keep a team list
- ✅ **Export and compare data** - use CSV exports to consolidate
- ❌ **Don't assume data syncs** - each account is independent

---

## 🔧 How It Works

### Login Flow
```
1. User enters username + password
2. Password is hashed using SHA-256
3. System checks if username exists
4. System compares hashed passwords
5. If match: Login successful
   - Session saved in sessionStorage
   - User data loaded from localStorage
   - Main app displayed
6. If no match: Error message shown
```

### Registration Flow
```
1. User enters username + password + confirm password
2. System validates:
   - Username at least 3 characters
   - Password at least 6 characters
   - Passwords match
   - Username not already taken
3. Password is hashed using SHA-256
4. User account saved to localStorage
5. Success message shown
6. Auto-redirect to login screen after 2 seconds
```

### Data Saving Flow
```
1. User enters contractor name or quote
2. On change: saveToUserAccount() triggered
3. System reads all input fields
4. Data saved to localStorage under user-specific key
5. Visual confirmation (button turns green)
6. Data persists for next login
```

### Data Loading Flow
```
1. User logs in successfully
2. System looks for user-specific data in localStorage
3. If data found:
   - Each contractor name is populated
   - Each quote is populated
   - Variances are calculated
   - Totals are updated
4. If no data found: Fields remain empty (new user)
```

---

## 🆘 Troubleshooting

### "Invalid username or password"

**Possible causes:**
- Username or password typed incorrectly
- Case sensitivity (passwords are case-sensitive)
- Account doesn't exist yet

**Solutions:**
- Check caps lock is off
- Verify spelling
- Try registering a new account if first time

### "Username already exists"

**Cause:** Someone already registered that username

**Solutions:**
- Choose a different username
- Add numbers or initials (e.g., "marcel2" or "marcel_pm")
- Use a more specific username

### "Passwords do not match"

**Cause:** Confirmation password doesn't match initial password

**Solutions:**
- Retype both fields carefully
- Copy/paste password to confirmation field
- Check for extra spaces

### Data Disappeared After Login

**Possible causes:**
- Used different username
- Browser data was cleared
- Using different browser

**Solutions:**
- Verify you're using correct username
- Check if you have a CSV backup to re-enter data
- Always use same browser and device

### Can't See Other User's Data

**This is intentional!** Each user's data is private to their account.

**If you need to share data:**
- Export to CSV and share the file
- Have team meeting to consolidate quotes
- Use email or shared drive for collaboration

---

## 📊 Data Export with Authentication

### CSV Export Features
- Filename includes **your username**
- Format: `DERA_Residence_marcel_2025-11-20.csv`
- Contains **your entered data only**
- Includes all 82 tasks with your quotes

### Sharing Exports
1. Click "📊 Export to CSV"
2. Save file to your computer
3. Share via email, Drive, or Dropbox
4. Team members can compare their exports
5. Consolidate in Excel or Google Sheets

---

## 🔄 Account Recovery

### No Password Reset (Currently)
This is a **client-side** application with no backend server, so:
- **No email-based password reset**
- **No "forgot password" feature**
- **No admin can reset your password**

### If You Forget Your Password

**Option 1: Create New Account**
- Register with a new username
- Re-enter your contractor data
- Or import from a CSV backup if you have one

**Option 2: Manual localStorage Edit** (Advanced Users Only)
- Open browser Developer Tools (F12)
- Go to Application → Local Storage
- Delete the old account from `deraUsers`
- Register again with same username

**Prevention:**
- Write down your password in a secure place
- Use a password manager
- Export CSV backups regularly

---

## 📱 Multi-Device Usage

### Same User, Different Devices

**Important:** localStorage is device and browser-specific!

If you use:
- **Computer at work** → Data saved there
- **Computer at home** → Different data
- **Phone browser** → Different data again

**Each device is independent!**

### Solutions for Multi-Device

1. **Export/Import CSVs**
   - Export from device A
   - Import/re-enter on device B

2. **Stick to One Primary Device**
   - Designate your main work device
   - Use others for viewing only

3. **Upgrade to Backend** (Future Enhancement)
   - Would require server setup
   - Data would sync across devices
   - Outside scope of current system

---

## 🎯 Use Case Examples

### Example 1: Solo Project Manager

**Marcel's workflow:**
1. Registers as "marcel"
2. Enters all contractor quotes over several days
3. Returns daily to update as bids come in
4. Exports CSV for weekly meetings
5. Data persists indefinitely

### Example 2: Husband-Wife Team

**Marcel and Noelle:**
1. Marcel registers as "marcel"
2. Noelle registers as "noelle"
3. Marcel tracks construction quotes
4. Noelle tracks fixtures and finishes
5. Weekly, they export and combine CSVs
6. Each has independent tracking

### Example 3: Project Team

**Multiple stakeholders:**
- marcel (Project Manager)
- noelle (Finance)
- architect (Design Team)
- inspector (Quality Control)

Each user:
- Has their own view
- Tracks relevant contractors
- Exports for team meetings
- Maintains data privacy

---

## 🛠️ Technical Details

### Browser Compatibility
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Opera: ✅ Full support
- Internet Explorer: ❌ Not supported

### Storage Limits
- localStorage: ~5-10 MB per domain
- User accounts: ~100 bytes each
- User data: ~10-50 KB each
- **Total capacity:** 100+ users easily

### Security Considerations
- **Not suitable for:** High-security applications
- **Suitable for:** Construction project tracking
- **Passwords are hashed** but stored locally
- **No SSL required** for local use
- **GitHub Pages uses HTTPS** automatically

---

## 🚀 Future Enhancements

Potential additions:
- Password reset via email
- User roles (admin, editor, viewer)
- Data export/import between users
- Backend database for multi-device sync
- Two-factor authentication
- User profile pictures
- Activity logging
- Team permissions

---

## 📞 Getting Help

### Common Questions

**Q: Can I change my password?**
A: Currently no. You'd need to create a new account.

**Q: Can I delete my account?**
A: Yes, via browser Developer Tools → Local Storage → Delete entry

**Q: Can someone hack my account?**
A: Only if they have physical access to your device. Use device password protection.

**Q: Is this HIPAA/SOC2 compliant?**
A: No, it's a client-side tool. Don't store sensitive personal info.

**Q: Can I have multiple accounts?**
A: Yes! Register with different usernames.

---

## ✅ Authentication Checklist

Before you start:
- [ ] I understand how user accounts work
- [ ] I've chosen a memorable username
- [ ] I've created a secure password
- [ ] I know my data is private to my account
- [ ] I plan to export CSV backups regularly
- [ ] I'm using the same browser/device consistently

After registration:
- [ ] I successfully logged in
- [ ] I entered test contractor data
- [ ] I clicked "Save Progress"
- [ ] I logged out and back in
- [ ] My data persisted correctly
- [ ] I exported a test CSV

---

**Your data is secure, private, and persistent with user authentication! 🔐**

*Last updated: November 2025*
