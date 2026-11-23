# SpaceX-themed information portal

This is a static, responsive HTML/CSS/JavaScript landing page. The call-to-action opens your Google Form in a new tab.

## Add your Google Form link
Open `main.js` and replace:
```js
const GOOGLE_FORM_URL = "PASTE_YOUR_GOOGLE_FORM_LINK_HERE";
```
with your published Google Forms responder URL, for example:
```js
const GOOGLE_FORM_URL = "https://forms.gle/your-form-id";
```
Use the public responder link, not the Google Forms editor URL. Test the link in a private/incognito browser window before publishing.

## Customize
- `index.html`: page wording, headings, navigation and footer.
- `styles.css`: colors, typography, spacing and mobile breakpoints.
- `main.js`: Google Form URL and navigation behavior.

## Run and publish
Open `index.html` locally, or run `python -m http.server 8000` in this directory and visit `http://localhost:8000`.
Upload all three website files to a static host such as Netlify, Cloudflare Pages or GitHub Pages. Configure a custom domain and HTTPS, then test mobile and desktop layouts.

## Important use and privacy notes
Use SpaceX names, logos, trademarks and claims of official affiliation only within the scope of documented authorization. This template is a generic themed portal and does not establish that the site is operated by SpaceX or Elon Musk.

Configure your Google Form to collect only information genuinely necessary for its stated purpose. Do not use ordinary Google Forms to collect passwords, full payment-card numbers, CVVs, SSNs, ITINs, passport scans, driver's licence scans or other highly sensitive identity/financial records. For legitimate identity verification, use a specialist secure service with appropriate authorization, security controls, privacy notices, retention limits and legal/compliance review.
