# Earth Group Software website

The source for the [Earth Group Software](https://github.com/earth-group-software) website. It introduces our approach to open-source CMS work, independent security research, and paid development and support.

The site is a static project built with HTML, CSS, and a little JavaScript. It has no framework, build step, analytics, external font service, or runtime dependency.

## What is here

| File | Purpose |
| --- | --- |
| `index.html` | Main page, content, navigation, and Forminit inquiry form |
| `styles.css` | Layout, responsive styles, and light/dark colors |
| `theme.js` | Theme preference, saved in the visitor's browser |
| `script.js` | Forminit submission, validation feedback, and submit state |
| `thanks.html` | Legacy static confirmation page; not used by the current form |
| `netlify.toml` | Publish directory and response headers |

## Run locally

Clone this repository and serve its root directory:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Open <http://127.0.0.1:4173>. The inquiry form requires the Forminit SDK and a network connection to submit.

## Deploy on Netlify

Connect this repository to a Netlify site. Leave the build command empty and publish the repository root (`.`). The `netlify.toml` file records that setup and permits the Forminit SDK and API.

The inquiry form sends submissions to [Forminit](https://forminit.com) using Form ID `r1fcmjiuxjj`. Netlify only serves the static site. After deployment, send one test inquiry and confirm it appears in your Forminit inbox at <https://app.forminit.com>.

## Research and open source

The website links to [Dogeshark's HackerOne profile](https://hackerone.com/dogeshark) and the public acknowledgement pages for Concrete CMS and ExpressionEngine. It does not publish undisclosed vulnerability details or claim endorsement by those vendors.

Plugins and themes will appear under the [Earth Group Software organization](https://github.com/earth-group-software) as they are released. This repository contains the website only.

## Icons and reuse

The GitHub and HackerOne link marks come from [Simple Icons](https://simpleicons.org/). Those names and marks belong to their respective owners.

This repository does not yet have a source license. Its code is publicly visible, but a reuse license has not been granted. A license can be added once the intended reuse terms are chosen.
