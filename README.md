# Earth Group Software

A buildless static vendor website for Netlify. Edit `index.html` for copy and links, `styles.css` for design, `theme.js` for color mode, and `script.js` for local form behavior. No framework, external fonts, analytics, cookies, or package installation required. The GitHub and HackerOne link icons come from [Simple Icons](https://simpleicons.org/); their names and marks remain the property of their respective owners.

## Deploy to Netlify

Upload this folder to Netlify, or commit it to a repository and connect that repository to Netlify. There is no build command. Publish the repository root (`.`); `netlify.toml` configures this for Git deployments. Keep the folder contents at the deployment root.

Enable Netlify form detection in the site's Forms settings and deploy again if necessary. The `project-inquiry` form sends submissions to that site's Netlify Forms inbox. Configure notifications in Netlify if desired. Check your Netlify plan's form availability/limits. Send one test inquiry after deployment and confirm it appears in the Forms inbox before sharing the site. Local preview deliberately does not submit inquiries. Netlify hosting and form activation have not been performed by this deliverable.

## Content and launch notes

- Organization link supplied by the owner: https://github.com/earth-group-software
- Research identity supplied by the owner: https://hackerone.com/dogeshark
- Experience with Concrete CMS and ExpressionEngine is based on the owner's account. Their program acknowledgement pages are linked for visitors. Direct HackerOne profile extraction was unavailable during creation; exact report counts, CVEs, ratings, and patch versions are intentionally omitted.
- Open-source releases are described as a commitment. No unreleased project is presented as an available download. Add repository-specific licenses and documentation as projects ship.
- No license is selected for the owner's plugins, themes, or this website. Choose and add an appropriate license before publishing source intended for reuse.
- Services are proposed positioning based on the requested vendor model. Confirm the offered services and wording before a public launch.
- The inquiry form explains its purpose and Netlify processing. Update privacy/retention details to match the actual business operation before collecting real inquiries.
- No implied affiliation with or endorsement by CMS vendors, HackerOne, or Automattic.

## Local preview

From this directory: `python -m http.server 4173 --bind 127.0.0.1`

Open http://127.0.0.1:4173. The site works as plain static files; clean root URLs assume deployment at a domain root.
