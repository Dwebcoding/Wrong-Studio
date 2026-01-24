# Project Structure Adaptation Guide

## Applied Changes

### 1. **Script Paths**
- Index.html → updated paths
  - CSS: `href="css/style.css"` 
  - JS: `src="js/script.js"`
  - Logo: `src="assets/logo/..."`
  
- HTML pages in `pages/` → updated relative paths
  - CSS: `href="../css/style.css"`
  - Logo: `src="../assets/logo/..."`
  - Home link: `href="../index.html"`

### 2. **Navigation**
- Index.html → links to pages in pages/:
  - `pages/works.html`
  - `pages/about.html`
  - `pages/contact.html`

### 3. **Images**
- Old: `images/Logo/`
- New: `assets/logo/`

## Next Steps - To Execute Manually

### Folders to Create:
```
css/                    # Move Style.css here
js/                     # Move script.js here
pages/                  # Move about.html, works.html, contact.html
assets/
  └── logo/             # Move logo files here
  └── images/           # Move project images here
```

### Terminal Operations:

```powershell
# 1. Create folders
mkdir css, js, pages, assets\logo, assets\images

# 2. Move files
move Style.css css\
move Script.js js\script.js
move about.html pages\
move works.html pages\
move contact.html pages\
move "Images\Logo\*" assets\logo\
move "Images\*" assets\images\  # (excluding Logo already moved)

# 3. Remove old folders
rmdir Images
rmdir "Logo Images"
rmdir style
rmdir js  # if old folder exists
```

### Final Verification:

Once files are moved, the structure should be:
```
Wrong Site/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── pages/
│   ├── about.html
│   ├── works.html
│   └── contact.html
├── assets/
│   ├── logo/
│   │   ├── Logo.png
│   │   └── Logo White.png
│   └── images/
│       └── (project images)
├── README.md
├── LICENSE
└── .gitignore
```

## Notes

- HTML files have already been updated with new paths
- JavaScript script doesn't need changes (uses DOM selectors)
- Make sure file names respect case-sensitivity in paths
- After moving files, verify that links work in browser