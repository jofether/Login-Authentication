# Bug Injection Report - Synthetic UI/UX Dataset

**Project:** Modern Login Authentication System  
**Date:** February 16, 2026  
**Purpose:** Create synthetic dataset for thesis project with intentional UI/UX bugs

---

## Summary

**Total Bugs Injected:** 10  
**Categories:** 5 (2 bugs per category)  
**Application Status:** ✓ Compiles and runs without errors  
**Functionality Status:** ✓ All buttons and logic remain operational

---

## Bug Categories & Locations

### Category 1: Color & Contrast (2 bugs)

#### Bug #1 - Invisible Heading Text
- **Location:** `src/pages/LoginPage.jsx`, line 45
- **Component:** Login Page Header
- **Issue:** `text-slate-900` on dark background gradient
- **Visual Effect:** Dark purple/slate text on purple/black background makes heading invisible
- **Fix:** Change `text-slate-900` to `text-purple-100` or `text-white`
- **Code:** 
  ```jsx
  <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
  ```
  Should be:
  ```jsx
  <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
  ```

#### Bug #2 - Gray Text on Gray Background
- **Location:** `src/pages/DashboardPage.jsx`, line 119
- **Component:** Dashboard Activity Feed
- **Issue:** `text-gray-600` timestamp on light gray backgrounds
- **Visual Effect:** Activity timestamps are invisible/unreadable on light backgrounds
- **Fix:** Change `text-gray-600` to `text-gray-300` or `text-gray-400`
- **Code:**
  ```jsx
  <p className="text-gray-600 text-sm">{activity.time}</p>
  ```
  Should be:
  ```jsx
  <p className="text-gray-300 text-sm">{activity.time}</p>
  ```

---

### Category 2: Layout Issues (2 bugs)

#### Bug #3 - Single Column Grid (Broken Responsiveness)
- **Location:** `src/pages/DashboardPage.jsx`, line 80
- **Component:** Dashboard Statistics Grid
- **Issue:** `grid-cols-1` always forces single column on all screen sizes
- **Visual Effect:** Statistics cards stack vertically on desktop instead of showing 4 columns
- **Fix:** Change to proper responsive grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- **Code:**
  ```jsx
  <div className="grid grid-cols-1 gap-6 mb-12">
  ```
  Should be:
  ```jsx
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
  ```

#### Bug #4 - Reversed Form Order
- **Location:** `src/pages/RegisterPage.jsx`, line 179
- **Component:** Registration Form - Confirm Password Field
- **Issue:** `flex-col-reverse` class reverses label and input order
- **Visual Effect:** Input field displays above its label instead of below
- **Fix:** Remove `flex-col-reverse` class or change to `flex-col`
- **Code:**
  ```jsx
  <div className="group flex-col-reverse">
    <label>Confirm Password</label>
    <div className="relative">...input...</div>
  </div>
  ```
  Should be:
  ```jsx
  <div className="group">
    <label>Confirm Password</label>
    <div className="relative">...input...</div>
  </div>
  ```

---

### Category 3: Typo (Invalid Tailwind Classes) (2 bugs)

#### Bug #5 - Invalid Width Class
- **Location:** `src/pages/LoginPage.jsx`, line 77
- **Component:** Login Form - Password Input
- **Issue:** `w-full-max` is not a valid Tailwind class (should be `w-full`)
- **Visual Effect:** Password input field width breaks, doesn't stretch full width
- **Fix:** Change `w-full-max` to `w-full`
- **Code:**
  ```jsx
  <input className="w-full-max pl-10 pr-12 py-3..." />
  ```
  Should be:
  ```jsx
  <input className="w-full pl-10 pr-12 py-3..." />
  ```

#### Bug #6 - Invalid Height Class
- **Location:** `src/pages/ProfilePage.jsx`, line 236
- **Component:** Profile Settings - Notification Toggle Button
- **Issue:** `h-auto-7` is not a valid Tailwind class (should be `h-7`)
- **Visual Effect:** Toggle button has broken height styling, appears misaligned
- **Fix:** Change `h-auto-7` to `h-7`
- **Code:**
  ```jsx
  <button className={`relative w-12 h-auto-7 rounded-full transition ...`}>
  ```
  Should be:
  ```jsx
  <button className={`relative w-12 h-7 rounded-full transition ...`}>
  ```

---

### Category 4: Spacing (Padding/Margin Issues) (2 bugs)

#### Bug #7 - Negative Margin Overlap
- **Location:** `src/pages/RegisterPage.jsx`, line 213
- **Component:** Registration Form - Terms Checkbox
- **Issue:** `-mt-20` (negative margin-top of 5rem) causes massive overlap
- **Visual Effect:** Terms checkbox overlaps form inputs above it, breaking layout flow
- **Fix:** Remove negative margin, use positive spacing: change `-mt-20` to `mt-4`
- **Code:**
  ```jsx
  <label className="flex items-start text-gray-300 ... text-sm -mt-20">
    <input type="checkbox" ... />
    <span>I agree to the terms...</span>
  </label>
  ```
  Should be:
  ```jsx
  <label className="flex items-start text-gray-300 ... text-sm mt-4">
    <input type="checkbox" ... />
    <span>I agree to the terms...</span>
  </label>
  ```

#### Bug #8 - Excessive Negative Margin Overlap
- **Location:** `src/pages/ProfilePage.jsx`, line 251
- **Component:** Profile Page - Footer Security Message
- **Issue:** `-mt-32` (negative margin-top of 8rem) causes massive overlap with notifications
- **Visual Effect:** Security message overlaps notification section, creating visual chaos
- **Fix:** Remove negative margin, use proper spacing: change `-mt-32` to `mt-8`
- **Code:**
  ```jsx
  <div className="mt-12 -mt-32 text-center text-gray-400 text-sm py-8">
  ```
  Should be:
  ```jsx
  <div className="mt-12 text-center text-gray-400 text-sm py-8">
  ```

---

### Category 5: Layers/Z-Index (Positioning Issues) (2 bugs)

#### Bug #9 - Negative Z-Index Behind Background
- **Location:** `src/pages/DashboardPage.jsx`, line 66
- **Component:** Dashboard Main Container
- **Issue:** `-z-50` places entire dashboard content behind the background
- **Visual Effect:** Dashboard content is invisible/hidden behind gradient background
- **Fix:** Remove negative z-index, use `z-0` or remove z-index entirely
- **Code:**
  ```jsx
  <div className="max-w-6xl mx-auto -z-50">
  ```
  Should be:
  ```jsx
  <div className="max-w-6xl mx-auto">
  ```

#### Bug #10 - Excessive Negative Margin in CSS
- **Location:** `src/index.css`, line 128
- **Component:** Global CSS - Broken Button Spacing Class
- **Issue:** `.broken-button-spacing { margin: -24rem; }` creates massive negative spacing
- **Visual Effect:** Any element using this class would have extreme negative margins, causing overflow and layout collapse
- **Fix:** Remove the excessive negative margin, use proper spacing
- **Code:**
  ```css
  .broken-button-spacing {
    margin: -24rem;
    padding: 0;
  }
  ```
  Should be:
  ```css
  .broken-button-spacing {
    margin: 1rem;
    padding: 0.5rem;
  }
  ```

---

## File Modifications Summary

| File | Bugs Injected | Categories |
|------|---------------|-----------|
| `src/pages/LoginPage.jsx` | 2 | Color & Contrast, Typo |
| `src/pages/RegisterPage.jsx` | 2 | Layout, Spacing |
| `src/pages/DashboardPage.jsx` | 2 | Color & Contrast, Layout |
| `src/pages/ProfilePage.jsx` | 2 | Spacing, Typo |
| `src/index.css` | 1 | Layers/Positioning |
| `package.json` | 0 | Removed lucide-react dependency |
| **Total** | **10** | 5 categories × 2 bugs |

---

## Application Verification

### Compilation Status
✓ **PASSES:** No compilation errors  
✓ **PASSES:** All dependencies resolved (removed lucide-react, using emojis)  

### Functionality Status
✓ **PASSES:** All buttons are clickable and trigger state changes  
✓ **PASSES:** Form validation works correctly  
✓ **PASSES:** Page navigation functions properly  
✓ **PASSES:** Authentication flow logic is intact  

### Visual Status (Intentionally Broken)
✗ **FAILS:** Multiple text elements are invisible or unreadable
✗ **FAILS:** Layout is broken with incorrect grid/flex ordering
✗ **FAILS:** Form spacing is overlapped and misaligned
✗ **FAILS:** Components extend outside viewport due to negative margins
✗ **FAILS:** Dashboard content hidden behind background

---

## Testing Notes for Dataset Annotation

When analyzing this dataset, annotators should note:

1. **Bug Persistence:** Bugs remain consistent across page reloads
2. **Functional Integrity:** Despite visual brokenness, the app is fully interactive
3. **Scope:** All bugs are UI/UX related, no backend or logic errors
4. **Accessibility:** Bugs create accessibility issues (low contrast, hidden content)
5. **User Impact:** Users can navigate but experience visual confusion and difficulty reading content

---

## Restoration Instructions

To restore the application to a fully functional state, simply revert all changes marked with `[BUG - CATEGORY]` to their corresponding `[FIX]` comments throughout the source code.

All bugs are self-contained and can be fixed independently without affecting other functionality.

---

**End of Report**
