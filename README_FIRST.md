# Scholar's Nest Template Setup Guide

## Welcome to Scholar's Nest!

Thank you for downloading the **Scholar's Nest: Academic Portfolio Template**. This professional template is designed for students, researchers, and educators to showcase their academic achievements, research, and professional work.

**Created by:** Md Golam Mubasshir Rafi  
**Website:** [https://www.gmrafi.com.bd](https://www.gmrafi.com.bd)  
**GitHub:** [https://github.com/gmrafi](https://github.com/gmrafi)  
**Contact:** rafi@gmrafi.com.bd

---

## 📋 Quick Setup Checklist

- [ ] Download and extract the template files
- [ ] Test locally (no license needed)
- [ ] Customize personal information
- [ ] Add your photos and documents
- [ ] Get Live Hosting License (for internet deployment - even free hosting like GitHub Pages)
- [ ] Deploy to your hosting platform

---

## 🆓 Free Local Testing

1. **Download** the template from GitHub
2. **Extract** the ZIP file
3. **Open** `index.html` in your browser
4. **Test** all features locally - **No license required!**

> **Great for**: Learning, development, experimentation

---

## 🌐 Live Hosting Setup

When ready to host live on the internet (ANY hosting service, including free ones like GitHub Pages):

### 1. Get Live Hosting License
Contact the creator for licensing information and pricing details.

**⚠️ IMPORTANT**: Even FREE hosting services require a license when your site is live on the internet.

### 2. Add License Key
1. **Get your license key** from purchase confirmation email
2. **Open `config.js`** in your code editor
3. **Find the license section**:
   ```javascript
   license: {
     key: "YOUR_LICENSE_KEY_HERE", // Replace with your actual key
     // ...
   }
   ```
4. **Replace** `"YOUR_LICENSE_KEY_HERE"` with your actual license key
5. **Save the file**

### 3. Deploy to Hosting
- GitHub Pages, Vercel, Netlify, etc.
- Site will work perfectly with valid license

---

## 🎨 Customization Guide

### 1. Personal Information
Edit `config.js` to update:
- Your name and professional title
- Contact information
- Social media links
- Education and professional details

### 2. Content Updates
- **Profile Photo**: Replace `photos/placeholder.jpg` with your photo
- **CV/Resume**: Add your CV to `files/your-cv.pdf`
- **Research & Publications**: Update the arrays in `config.js`
- **Projects**: Add your project details
- **Achievements**: List your accomplishments

### 3. Visual Customization
- **Colors**: Modify Tailwind CSS classes in HTML files
- **Fonts**: Update Google Fonts links if needed
- **Layout**: Adjust sections in `index.html`

---

## 🌐 Hosting on GitHub Pages (Recommended)

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click **"New repository"**
3. Name it: `yourusername.github.io` (for personal site) or any name
4. Make it **Public**
5. **Do NOT** initialize with README
6. Click **Create repository**

### Step 2: Upload Files
1. Download the template ZIP from Lemon Squeezy
2. Extract the files to a folder
3. Customize `config.js` and other files
4. Upload all files to your GitHub repository:
   - Drag and drop files into GitHub's upload area
   - Or use Git commands if you prefer

### Step 3: Enable GitHub Pages
1. Go to your repository **Settings** tab
2. Scroll down to **Pages** section
3. Under **Source**, select **"Deploy from a branch"**
4. Choose **main** branch and **/(root)** folder
5. Click **Save**

### Step 4: Access Your Site
- Your site will be live at: `https://yourusername.github.io/repository-name/`
- It may take 2-3 minutes to deploy
- Check the **Actions** tab for deployment status

---

## 🔧 Advanced Configuration

### Custom Domain
1. Add a `CNAME` file with your domain
2. Update DNS settings to point to GitHub Pages
3. Enable HTTPS in repository settings

### Analytics
- Uncomment Google Analytics code in `index.html`
- Add your GA tracking ID

### SEO Optimization
- Update meta tags in `config.js`
- Add proper descriptions and keywords
- Submit to Google Search Console

---

## 🆘 Troubleshooting

### License Issues
- **Warning message**: Add your license key to `config.js`
- **Invalid key**: Check your Lemon Squeezy account for the correct key
- **API errors**: Ensure your key format is `LS-XXXXXXXX`

### Deployment Issues
- **Site not loading**: Wait 2-3 minutes after enabling Pages
- **404 errors**: Check that `index.html` is in the root folder
- **Images not showing**: Ensure correct file paths

### Content Issues
- **Text not updating**: Clear browser cache (Ctrl+F5)
- **Links broken**: Verify URLs in `config.js`

---

## 📞 Support

For technical support:
- Check this guide first
- Review the [GitHub repository](https://github.com/gmrafi/gmrafi.github.io) for updates
- Contact: rafi@gmrafi.com.bd

---

## 📜 License Terms

This template is licensed for personal use only. See `LICENSE_TERMS.txt` for details.

**Remember**: Do not resell or redistribute the original template files.

---

*Happy customizing! Your academic portfolio is about to shine. 🌟*

*Created by Md Golam Mubasshir Rafi*
