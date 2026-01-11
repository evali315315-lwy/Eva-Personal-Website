# Eva's Personal Essay Website

A minimal, text-focused website for showcasing essays and writing. Features category organization, search, reading time estimates, tag filtering, and dark mode.

## Features

- **Category Organization**: Essays organized by topics (Technology, Philosophy, Personal)
- **Search**: Real-time keyword search through all essays
- **Reading Time**: Automatic calculation of estimated reading time
- **Tag Filtering**: Filter essays by tags with URL support
- **Dark Mode**: Persistent theme toggle with localStorage
- **Mobile Responsive**: Optimized for all screen sizes
- **Accessibility**: Keyboard navigation, ARIA labels, high contrast

## File Structure

```
Eva-Personal-Website/
├── index.html              # Homepage with essay listings
├── style.css               # Main stylesheet
├── dark-mode.css           # Dark theme overrides
├── essay-template.html     # Template for creating new essays
├── essays/
│   ├── technology/         # Technology essays
│   ├── philosophy/         # Philosophy essays
│   ├── personal/           # Personal essays
│   └── [other-categories]/ # Add more categories as needed
├── scripts/
│   ├── theme-toggle.js     # Dark mode functionality
│   └── reading-time.js     # Reading time calculator
└── README.md
```

## How to Add a New Essay

### Step 1: Create the Essay File

1. Copy [essay-template.html](essay-template.html)
2. Rename it with a descriptive slug (e.g., `my-essay-title.html`)
3. Place it in the appropriate category folder under `essays/`

Example:
```bash
cp essay-template.html essays/technology/my-essay-title.html
```

### Step 2: Edit the Essay Content

Open your new essay file and update:

1. **Title** (`<title>` tag in `<head>`):
   ```html
   <title>My Essay Title - Eva's Essays</title>
   ```

2. **Breadcrumb** (update category):
   ```html
   <a href="../../index.html?category=technology">Technology</a>
   ```

3. **Essay Metadata**:
   ```html
   <h1>My Essay Title</h1>
   <div class="meta-info">
       <span class="category">Technology</span>
       <span class="reading-time" id="reading-time">5 min read</span>
       <time datetime="2026-01-11">January 11, 2026</time>
   </div>
   ```

4. **Tags**:
   ```html
   <div class="tags">
       <a href="../../index.html?tag=tag1" class="tag">#tag1</a>
       <a href="../../index.html?tag=tag2" class="tag">#tag2</a>
   </div>
   ```

5. **Essay Content** (inside `<div class="essay-body" id="essay-body">`):
   - Write your essay using HTML elements
   - Available elements: `<p>`, `<h2>`, `<h3>`, `<ul>`, `<ol>`, `<blockquote>`, `<code>`, `<pre>`
   - Reading time will be calculated automatically

### Step 3: Add Essay to Homepage

Open [index.html](index.html) and find the `essays` array (around line 49). Add a new entry:

```javascript
const essays = [
    {
        title: "My Essay Title",
        slug: "my-essay-title",
        category: "technology",  // must match folder name
        tags: ["tag1", "tag2"],
        date: "2026-01-11",      // YYYY-MM-DD format
        readingTime: "5 min",    // approximate reading time
        excerpt: "First couple sentences of your essay to hook readers...",
        path: "essays/technology/my-essay-title.html"
    },
    // ... existing essays
];
```

### Step 4: Test Your Essay

1. Open [index.html](index.html) in your browser
2. Verify your essay appears in the list
3. Click on it to view the full essay
4. Test search, category filtering, and tag filtering
5. Toggle dark mode to ensure proper styling

## HTML Elements for Essays

### Text Formatting

```html
<p>Regular paragraph text.</p>

<h2>Major Section Heading</h2>
<h3>Subsection Heading</h3>

<blockquote>
    <p>A notable quote or highlighted insight.</p>
</blockquote>
```

### Lists

```html
<ul>
    <li>Unordered list item</li>
    <li>Another item</li>
</ul>

<ol>
    <li>Numbered list item</li>
    <li>Another numbered item</li>
</ol>
```

### Code

```html
<!-- Inline code -->
<p>Use <code>const x = 42</code> for inline code.</p>

<!-- Code block -->
<pre><code>function example() {
    return "Hello, World!";
}</code></pre>
```

### Images

```html
<img src="../../images/photo.jpg" alt="Description">
```

## Categories

Current categories:
- **technology**: Essays about tech, AI, software, etc.
- **philosophy**: Philosophical questions and thought experiments
- **personal**: Personal reflections, lifestyle, experiences

### Adding a New Category

1. Create a new folder: `mkdir essays/new-category`
2. Add the category pill to [index.html](index.html:23-28):
   ```html
   <a href="#" class="category-pill" data-category="new-category">New Category</a>
   ```
3. Essays in this category will automatically appear when filtered

## Tag Naming Conventions

- Use lowercase, hyphenated format (e.g., `artificial-intelligence`, not `Artificial Intelligence`)
- Keep tags short and descriptive
- Reuse existing tags when possible for consistency
- Common tags: `ai`, `ethics`, `lifestyle`, `mindfulness`, `identity`, `metaphysics`

## Customization

### Changing Colors

Edit CSS variables in [style.css](style.css:7-14):

```css
:root {
    --bg-primary: #f5f5f5;      /* Light gray background */
    --bg-secondary: #ffffff;     /* White (cards, content) */
    --text-primary: #333;        /* Dark text */
    --text-secondary: #555;      /* Muted text */
    --header-bg: #2c3e50;        /* Dark blue header */
    --accent: #3498db;           /* Blue accent color */
    --border-color: #e0e0e0;     /* Light borders */
}
```

For dark mode colors, edit [dark-mode.css](dark-mode.css:2-9).

### Changing Fonts

Body text (UI): Edit line 18 in [style.css](style.css:18)
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
```

Essay content (reading): Edit line 289 in [style.css](style.css:289)
```css
font-family: Georgia, 'Times New Roman', serif;
```

## Hosting

This website is a static HTML site and can be hosted anywhere:

- **GitHub Pages**: Push to GitHub and enable Pages in repository settings
- **Netlify**: Drag and drop the folder to deploy
- **Vercel**: Connect your repository for automatic deployments
- **Any web server**: Upload files via FTP

No build process or server-side code required.

## Browser Support

- Chrome/Edge (modern versions)
- Firefox (modern versions)
- Safari (modern versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

Uses modern web standards (CSS Variables, localStorage, ES6 JavaScript).

## Troubleshooting

### Essays not appearing on homepage
- Check that the essay file path in the `essays` array matches the actual file location
- Ensure the category in the essays array matches the folder name
- Open browser console (F12) to check for JavaScript errors

### Dark mode not working
- Clear browser localStorage: Open console and run `localStorage.clear()`
- Check that [dark-mode.css](dark-mode.css) exists and is linked in HTML
- Verify [scripts/theme-toggle.js](scripts/theme-toggle.js) is loading

### Reading time not calculating
- Ensure the essay has `id="essay-body"` on the content div
- Check that [scripts/reading-time.js](scripts/reading-time.js) is included in the page
- Verify there's an element with `id="reading-time"` to display the result

### Search not working
- Check browser console for JavaScript errors
- Ensure essays array is properly formatted (valid JavaScript object syntax)
- Try clearing search box and reloading page

## Technologies

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with variables and responsive design
- **JavaScript (ES6)**: Client-side search, filtering, and theme toggle
- **No dependencies**: No frameworks, libraries, or build tools required

## License

Personal use. Feel free to adapt for your own essay website.

---

**Questions?** Open an issue or modify this README as needed!
