# Michael Afolayan - Data Analyst Portfolio

A modern, responsive portfolio website showcasing data analytics expertise across Excel, SQL, Power BI, Tableau, Microsoft Project, Python, and Automation. This is a complete, standalone HTML website that works directly in browsers without any build process or server requirements.

## 🚀 Quick Start

### Option 1: Direct Browser Opening (Recommended)

1. **Download all files** to your computer:
   - `index.html` (main website file)
   - `styles.css` (all styling)
   - `script.js` (functionality)
   - `README.md` (this documentation)

2. **Double-click `index.html`** to open it in your default web browser

### Option 2: Live Server for Development (Optional)

If you want auto-refresh during development:

1. **Install VS Code** and the "Live Server" extension
2. **Right-click `index.html`** in VS Code
3. **Select "Open with Live Server"**

**Important: This is a static HTML website. No npm, Node.js, or build process is needed!**


## 📁 Project Structure

```
portfolio/
├── index.html         # Main HTML file
├── styles.css         # All CSS styles
├── script.js          # JavaScript functionality
├── README.md          # Documentation and customization guide
└── README.md          # This file
```

## 🎨 Features

- ✅ **Fully Responsive** - Works on all devices
- ✅ **Dark Mode Toggle** - Light/dark theme switching
- ✅ **Project Carousel** - Image slideshow
- ✅ **Project Filtering** - Filter by technology
- ✅ **Dropdown Navigation** - Easy project category access
- ✅ **Smooth Scrolling** - Professional navigation
- ✅ **Modern Animations** - Hover effects and transitions
- ✅ **Professional Sections** - Hero, Projects, About, Skills, etc.

## 🛠️ Customization Guide

### 1. Update Personal Information

**Hero Section (index.html, line ~45):**
```html
<h2>YOUR NAME HERE</h2>
<h1 class="hero-title">
    Your Title
    <span class="hero-subtitle">& Your Specialty</span>
</h1>
```

**About Section (index.html, line ~400):**
- Replace the image URL with your photo
- Update the description text
- Modify skill tags

### 2. Add Your Projects

**In script.js (line ~6), update the projects array:**
```javascript
const projects = [
    {
        title: "Your Project Title",
        description: "Your project description...",
        category: "Excel", // or SQL, Power BI, etc.
        image: "your-image-url.jpg",
        technologies: ["Excel", "VBA", "etc"],
        github: "your-github-link",
        live: "your-live-demo-link"
    },
    // Add more projects...
];
```

### 3. Update Contact Information

**Contact Section (index.html, line ~800):**
```html
<a href="mailto:your-email@example.com" class="contact-method">
<a href="https://your-linkedin-url" class="contact-method">
<a href="https://your-github-url" class="contact-method">
```

**Phone Number (index.html, line ~830):**
```html
<span>Your Phone Number</span>
```

### 4. Replace Images

**For Carousel (script.js, line ~50):**
```javascript
const carouselImages = [
    "your-image-1.jpg",
    "your-image-2.jpg",
    // Add your project screenshots
];
```

**For About Section:**
- Replace the Pexels URL with your professional photo

### 5. Update Work Experience

**Background Section (index.html, line ~500):**
- Update job titles, companies, dates
- Modify achievements and descriptions
- Add/remove timeline items

### 6. Modify Skills

**Skills Section (index.html, line ~700):**
- Update proficiency percentages
- Change skill categories
- Modify skill items

## 🎨 Color Customization

**Primary Colors (styles.css):**
- Blue: `#2563eb`
- Purple: `#9333ea`
- Teal: `#059669`

**To change colors, find and replace these hex codes throughout styles.css**

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🚀 Deployment Options

### 1. **GitHub Pages** (Free)
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings

### 2. **Netlify** (Free)
1. Drag and drop files to [netlify.com](https://netlify.com)
2. Get instant live URL

### 3. **Vercel** (Free)
1. Upload to [vercel.com](https://vercel.com)
2. Connect GitHub repository

### 4. **Traditional Web Hosting**
- Upload files via FTP to any web host
- Works with shared hosting, VPS, etc.

## 🔧 Development Tips

### Using VS Code Live Server:
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"
4. Auto-refreshes on file changes

### File Organization:
- Keep all files in the same folder
- Images can be in a subfolder (update paths accordingly)
- Don't rename main files (index.html, styles.css, script.js)

## 📞 Support

If you need help customizing your portfolio:

1. **Check the code comments** - Most sections are well-documented
2. **Use browser developer tools** - F12 to inspect and debug
3. **Test changes incrementally** - Make small changes and test

## 🎯 Performance Tips

- **Optimize images** - Use compressed JPEGs for photos
- **Use CDN images** - Pexels URLs are already optimized
- **Minimize file sizes** - Remove unused CSS/JS if needed

---

**Note:** This is a static HTML website that works directly in browsers and with Live Server. No Node.js or build process required!

## 📋 Checklist for Customization

- [ ] Update name and title in hero section
- [ ] Replace about section photo and text
- [ ] Add your real projects with screenshots
- [ ] Update contact information and links
- [ ] Modify work experience and education
- [ ] Adjust skills and proficiency levels
- [ ] Replace carousel images with your work
- [ ] Test on mobile devices
- [ ] Deploy to your preferred hosting platform

Your professional portfolio is ready to showcase your data analytics expertise! 🚀