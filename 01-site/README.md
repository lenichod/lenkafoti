# Photography by Lenka — GitHub Pages edition

All 157 photos and the complete portfolio are included, with separate Home, Portfolio, About and Contact pages. The site files are at the repository root, ready for GitHub Pages. No installation, build command or backend is needed.

## Put the files on GitHub

For this photo collection, GitHub Desktop is convenient because the GitHub website accepts at most 100 files per upload.

1. Install GitHub Desktop from https://desktop.github.com/ and sign in to your GitHub account.
2. Choose **File → New repository**. Name it `lenkafoti` or another name you prefer. Create it in a folder you can find on your computer.
3. Copy the **contents** of this extracted `photography-by-lenka-github` folder into the new repository folder. `index.html` and the `photos` folder should be directly inside the repository folder, not inside another `photography-by-lenka-github` folder.
4. In GitHub Desktop, review the new files, enter `Add photography portfolio` as the summary, and commit to the default branch.
5. Click **Publish repository**. For GitHub Pages on GitHub Free, use a **public repository** by deselecting **Keep this code private**. The website source and its optimised photos will then be publicly accessible. Private-repository Pages hosting requires an eligible paid GitHub plan.
6. Publish, then use **Repository → View on GitHub**.

Do not upload the ZIP itself, the large single-file preview, or your original 446 MB photo archive to the repository. Use the extracted website files included here.

## Turn on GitHub Pages

1. In the repository on GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select your default branch (usually `main`) and **/(root)**. Click **Save**.
4. Wait for GitHub to publish the website. Settings → Pages will show the generated address, usually `https://lenichod.github.io/YOUR-REPOSITORY/`.
5. Open it and check the photographs, collections and contact links.

## Connect your own .cz domain

The domain must be registered to you separately. GitHub does not supply the .cz registration. The supplied domain is `lenkafoti.cz`, managed through FORPSI. This package contains its domain configuration file; you still need to save the domain in GitHub Pages settings and point its DNS to GitHub.

1. Choose and register the .cz domain with a domain registrar, or use a domain you already own.
2. Verify ownership through your GitHub account's Pages domain settings if possible. GitHub provides the exact TXT record to add; do not invent that value.
3. In the repository's **Settings → Pages → Custom domain**, enter your actual domain, such as `lenkafoti.cz`, and save it **before** pointing its DNS to GitHub.
4. At the company managing your domain's DNS, configure the website records below. Replace `YOUR-USERNAME` with your actual GitHub username (or organisation name).

| Record type | Host / name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | lenichod.github.io |

Depending on the registrar, the root-domain host can be written as `@`, left empty, or entered as the full domain. The `www` record points to your username's GitHub Pages hostname, with no `https://` and no repository path. Keep unrelated records such as email MX/TXT records intact. Existing conflicting website A/AAAA/CNAME records may need adjusting rather than adding duplicate destinations.

5. Allow time for the DNS check and HTTPS certificate to complete. GitHub notes DNS changes and HTTPS availability can take up to 24 hours.
6. In **Settings → Pages**, enable **Enforce HTTPS** once available.

When GitHub creates the domain configuration file in your repository, pull that change into GitHub Desktop and keep it during future edits.

## Maintain the site

1. Before editing locally, click **Fetch origin**, then **Pull origin** if GitHub Desktop offers it.
2. Edit the relevant files or add optimised photographs.
3. Open `index.html` in your browser to preview locally.
4. Commit your changes in GitHub Desktop, then click **Push origin**. GitHub Pages publishes the updated repository automatically. The custom domain remains the same.

| File | Purpose |
| --- | --- |
| gallery-data.js | Photo order, descriptions, category tags, name, email and Instagram settings |
| photos/ | Optimised website images |
| index.html | Home introduction; featured images are selected in the photo manager |
| portfolio.html | Portfolio heading, collections and photo viewer |
| about.html | Biography and About photograph |
| contact.html | Contact text and enquiry email |
| styles.css | Colours, fonts, spacing and layouts |
| app.js | Gallery filters, loading more photographs and full-screen viewer |
| languages.js | English/Czech switching and Czech text translations |

The contact footer appears on every page, with Contacts, email and Instagram on the left and an invitation on the right. Its email reads the same `email` setting in `gallery-data.js` as the Contact page. The Instagram icon and @lenichod link open https://www.instagram.com/lenichod/. Update `instagram` in `gallery-data.js` if the profile URL changes; update the displayed handle in all four public HTML files if the username changes.

The navigation and footer appear in all four HTML files. If you change either, update each file. Every page also has its own title and description in the HTML head. The gallery runs on the Portfolio page; contact settings are applied on all four public pages.

Your originals are not modified. Keep original full-resolution photographs separately. The web copies were resized to at most 1600 pixels along the longest edge and exported without original EXIF metadata.

The three Home photographs are selected in the photo manager. Their IDs are saved in `config.featured` in `gallery-data.js`, and their links open the matching Portfolio collection. A direct collection link looks like `portfolio.html?collection=film`.

To add a photo, place its file in `photos/` and add an object in the `photos` array of `gallery-data.js`. Give it a unique `id`, relative `src`, accurate `width` and `height`, a descriptive `alt`, and category `tags`. Available tags: `people`, `nature`, `travel`, `street`, `events`, `brands`, `automotive`, `film`. Several tags can be assigned to one photo.

## Finish the contact details before advertising

The enquiry email is `lenkacg.foto@gmail.com`, and Instagram is https://www.instagram.com/lenichod/. Both links are configured and the placeholder notes are hidden. Review the About text before advertising.

The email link opens the visitor's mail application; the website has no enquiry database or email-sending backend. The website signature is “photography by Lenka ✳” (“fotografie od Lenky ✳” in Czech).

## Official references

- Create and publish a repository: https://docs.github.com/en/desktop/overview/creating-your-first-repository-using-github-desktop
- GitHub upload limits: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- Configure Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Custom domains and DNS: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- HTTPS: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https

This package is ready to publish for `lenkafoti.cz`, but repository settings and FORPSI DNS have not been configured by creating this download. The separate existing hosted preview remains separate from GitHub Pages.

## Maintain both languages

The header’s EN/CZ buttons switch the complete site, including gallery controls and photo descriptions. The language stays selected between pages; a direct link may include `?lang=cs` or `?lang=en`. A collection link can use `portfolio.html?collection=film&lang=cs`.

Edit Czech text in `languages.js`. Its translation dictionary uses English phrases as keys. If you change English copy in an HTML page, update its `data-i18n` or `data-i18n-html` attribute and the matching English key/Czech value in `languages.js`. Image alternatives, accessibility labels and page descriptions also have marked translations. In `gallery-data.js`, keep both `alt` (English) and `altCs` (Czech) on every photo.

## Photo manager

Open `/admin/` on the hosted website. It has no public navigation link. Choose **Try the editor without publishing** to explore the controls; these preview edits are temporary. To save real changes, connect a public GitHub Pages repository with a fine-grained GitHub access key scoped to that repository and **Contents: Read and write**. This version uses a GitHub credential in a password-style field rather than a separate website password. See `admin/SETUP.html` for the complete English/Czech setup guide. Never put the key in website files or share it in chat. It stays only in tab memory and is sent only to `api.github.com`; signing out or closing the tab clears it.

After connecting, add photos, fill in English and Czech descriptions, select collections, reorder with the move buttons, and choose the three Home photographs. Images are automatically converted to WebP, resized to a maximum 1600px along the longest edge, and re-encoded without source metadata. Save once to commit photo uploads and gallery changes together. GitHub Pages updates after its deployment when enabled for the selected branch.

Edits remain drafts until saved; the screen warns before leaving or discarding them. Concurrent repository changes stop the save rather than overwriting newer work. Removing a photo removes its entry, retaining the old image file and GitHub history. The original source photos are never modified. The editor does not manage the About-page image or page copy.

The private ChatGPT-hosted preview is separate from GitHub: this editor’s GitHub saves do not update the private preview automatically. Live saving cannot be tested until the GitHub repository and an access key are connected. The editor and API integration have been tested with simulated GitHub responses, including permission failures and conflicting writes.

The admin screen is static frontend code; its interface can be viewed, and GitHub authorizes every write. A hidden URL is a convenience, not a security boundary. There is no shared secret embedded in the source and no locally stored access token. For local admin development, serve this folder over HTTP; browser ES modules cannot reliably run from `file://`. Public portfolio pages still work offline.

Once your domain is connected, open `https://lenkafoti.cz/admin/` directly and bookmark it. The public menu has no admin link. The first Home photo is large on the left; the second and third are stacked on the right. On phones they stack vertically. Choose these in **Home page photographs**.
