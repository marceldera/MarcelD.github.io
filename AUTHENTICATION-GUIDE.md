# 🔐 Site-Wide Authentication Guide

## Overview

The DERA Residence project management system now requires authentication **before accessing any content**. This ensures your project data is private and secure.

## 🚨 Important Changes

### What Changed:
- **Before**: Authentication only required for detailed project plan
- **After**: Authentication required for entire site (all tabs)
- **Impact**: Users must log in immediately upon visiting the site

### Why This Change:
- ✅ Enhanced security for all project information
- ✅ Centralized user management
- ✅ Consistent experience across all tools
- ✅ Protection of sensitive contractor and budget data
- ✅ Single sign-on for all features

## 🔑 Authentication Flow

### First Visit:
```
1. User visits: https://your-site.github.io/dera-residence-project/
2. Authentication modal appears immediately
3. Content is hidden until authentication
4. User must choose: "Sign In" or "Create Account"
5. After authentication, full dashboard becomes accessible
```

### Return Visits:
```
1. Browser remembers authentication state
2. If session active: Direct access to dashboard
3. If session expired: Authentication modal appears
4. User signs in again with same credentials
```

## 📝 Creating an Account

### Step-by-Step:

1. **Visit the Site**
   - Open: `https://YOUR-USERNAME.github.io/dera-residence-project/`
   - Authentication modal appears automatically

2. **Click "Create Account"**
   - Button is visible on initial modal screen

3. **Fill in Details**
   - **Email**: Use a valid email address (you@example.com)
   - **Password**: Minimum 6 characters
   - **Confirm Password**: Must match exactly

4. **Submit**
   - Click "Create Account" button
   - Loading spinner appears briefly
   - On success: Modal disappears, dashboard loads

5. **Verify**
   - Your email appears in top right of header
   - All 12 tabs are now accessible
   - You're ready to use the system!

## 🔓 Signing In

### For Existing Users:

1. **Visit the Site**
   - Authentication modal appears

2. **Click "Sign In"**
   - If you clicked "Create Account" by mistake, click "Sign In" link

3. **Enter Credentials**
   - **Email**: The email you used to create account
   - **Password**: Your password (case-sensitive)

4. **Submit**
   - Click "Sign In" button
   - On success: Dashboard loads immediately

## 🚪 Logging Out

### How to Logout:

1. **Find User Info**
   - Look in top right corner of header
   - You'll see your email address

2. **Click "Logout" Button**
   - Red button next to your email
   - Confirmation dialog appears

3. **Confirm**
   - Click "OK" in confirmation dialog
   - Modal reappears
   - Content becomes hidden again

### Why Logout:

- Shared computer: Prevent others from accessing your data
- Security: End your session when done
- Switch users: Log in with different account

## ⚠️ Troubleshooting

### Can't Create Account:

**Error: "Email already in use"**
- This email already has an account
- Click "Sign In" instead
- Or use a different email address

**Error: "Invalid email address"**
- Check email format: name@domain.com
- No spaces allowed
- Must include @ and domain

**Error: "Password is too weak"**
- Password must be at least 6 characters
- Use mix of letters, numbers, symbols for best security

### Can't Sign In:

**Error: "No user found with this email"**
- Check email spelling
- This email doesn't have an account
- Click "Create Account" to register

**Error: "Incorrect password"**
- Password is case-sensitive
- Check Caps Lock is off
- Try password reset (if available)

**Error: "Invalid email or password"**
- Double-check both email and password
- Ensure no extra spaces
- Try creating new account if forgotten credentials

**Error: "Too many failed attempts"**
- Wait 15-30 minutes before trying again
- This is a security feature
- Clear browser cache and try again

### Modal Won't Close:

**Dashboard not loading after login:**
- Refresh the page (F5 or Cmd+R)
- Clear browser cache
- Try different browser
- Check browser console for errors (F12)

**Modal stuck on screen:**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear cookies for your site
- Try incognito/private browsing mode

### Already Logged In But Modal Appears:

**Session expired:**
- Firebase sessions expire after period of inactivity
- Simply log in again
- Your data is still safely stored

**Browser cleared cookies:**
- If you cleared browser data, you'll need to log in again
- This is normal behavior

## 🔒 Security Best Practices

### Password Security:
- ✅ Use at least 8 characters (minimum is 6)
- ✅ Mix uppercase and lowercase
- ✅ Include numbers and symbols
- ✅ Don't use common words or personal info
- ✅ Don't share your password
- ❌ Don't use same password as other sites

### Account Security:
- ✅ Log out on shared computers
- ✅ Don't save password on public computers
- ✅ Keep your email secure (used for account)
- ✅ Use different accounts for different team members
- ❌ Don't share login credentials

### Session Management:
- Sessions persist until you logout or clear cookies
- Closing browser tab doesn't log you out
- Use "Logout" button to end session properly
- Session expires automatically after extended inactivity

## 👥 Multiple Users

### Team Access:

**Each person should have their own account:**
1. Share the site URL with team members
2. Each person creates their own account
3. Everyone can access the same project data
4. Individual accountability and tracking

**DO NOT share credentials:**
- Each team member needs separate account
- Firebase tracks who makes changes
- Better security and audit trail

### Current Implementation:
- **Main Dashboard (index.html)**: Requires authentication
- **Detailed Project Plan**: Separate authentication (can be accessed directly)
- **Tile Calculator**: No authentication required (standalone tool)
- **Contractor Organizer**: No authentication required (standalone tool)

### Future Consideration:
- May want to add authentication to all standalone tools
- Can implement shared data across authenticated users
- Could add role-based access (admin, viewer, editor)

## 📱 Mobile Usage

### Mobile Authentication:
- Works the same as desktop
- Modal is responsive and mobile-friendly
- Touch-friendly buttons and inputs
- Can save credentials in mobile browser

### Tips for Mobile:
- Add site to home screen for easy access
- Browser will remember your login
- Use password manager for easier login
- Larger tap targets for better UX

## 🔧 Firebase Configuration

### What You Need:

**Firebase Authentication enabled:**
1. Go to Firebase Console: https://console.firebase.google.com
2. Select project: naples-791-build
3. Click "Authentication" in left menu
4. Click "Get Started"
5. Enable "Email/Password" provider
6. Click "Save"

**Authorized Domains:**
1. Stay in Authentication section
2. Click "Settings" → "Authorized domains"
3. Add your GitHub Pages domain
4. Example: `username.github.io`
5. Save changes

**Without these steps:**
- Authentication will fail
- Users will see error messages
- Site will be inaccessible

## 📊 What's Protected

### Protected Content (Requires Login):
- ✅ Project Overview tab
- ✅ All phase detail tabs (Demolition, Foundation, etc.)
- ✅ Bid Tracking tab
- ✅ Navigation to other tools
- ✅ Budget and cost information
- ✅ Project timeline details

### Still Accessible Without Login:
- Individual standalone tools can be accessed directly by URL:
  - `detailed-project-plan-standalone.html` (has its own auth)
  - `tile-calculator.html` (no auth required)
  - `contractor-organizer.html` (no auth required)

### Why This Approach:
- Main dashboard protects sensitive project data
- Standalone tools can be shared as needed
- Flexibility for different access levels
- Balance between security and usability

## 🎯 User Experience

### First-Time Users:
1. Clear call-to-action: "Create Account"
2. Minimal information required (email + password)
3. Immediate access after signup
4. Welcoming dashboard with all features

### Returning Users:
1. Quick sign-in (email + password)
2. Browser may auto-fill credentials
3. Single click to access
4. Seamless experience

### Visual Feedback:
- Loading spinner during authentication
- Error messages in red
- Success indicated by modal closing
- Email visible in header when logged in
- Logout button always accessible

## 🆘 Support

### Getting Help:

**Authentication Issues:**
1. Check Firebase console for auth status
2. Verify authorized domains are set
3. Check browser console for errors (F12)
4. Try incognito mode to rule out cache issues

**Lost Password:**
- Currently no password reset implemented
- Create new account with different email
- Or access Firebase console to reset user

**Can't Access Site:**
- Verify Firebase Authentication is enabled
- Check authorized domains include your GitHub Pages URL
- Ensure index.html uploaded correctly
- Try different browser

## 📈 Future Enhancements

### Potential Additions:
- Password reset functionality
- Email verification
- Two-factor authentication
- Google sign-in integration
- Role-based access control
- User profiles
- Activity logging

### For Now:
- Simple email/password auth
- Secure and functional
- Easy to use
- Sufficient for team access

## ✅ Quick Reference

### To Create Account:
```
1. Visit site
2. Click "Create Account"
3. Enter email + password (6+ chars)
4. Confirm password
5. Click "Create Account"
```

### To Sign In:
```
1. Visit site
2. Click "Sign In" (if showing Create Account screen)
3. Enter email + password
4. Click "Sign In"
```

### To Logout:
```
1. Click "Logout" button (top right)
2. Confirm in dialog
3. Done!
```

### Common Issues:
- **Modal won't close**: Refresh page
- **Can't login**: Check email/password spelling
- **Account exists**: Use "Sign In" instead
- **Too many attempts**: Wait 30 minutes

---

**Project**: DERA Residence - 791 110th Ave N, Naples, FL  
**Authentication**: Firebase Authentication  
**Protected**: Main dashboard (all tabs)  
**Public**: Standalone tools (by direct URL)  

**Need Help?** Check Firebase Console or browser console (F12) for error messages.
