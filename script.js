// Netlify detects the HTML form at deployment. Avoid a misleading local submission.
const form = document.querySelector('form[name="project-inquiry"]');
if (form && ['localhost', '127.0.0.1', ''].includes(location.hostname)) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    document.querySelector('#form-notice').textContent = 'This is a local preview. Project inquiries become available after the site is deployed to Netlify with form detection enabled.';
  });
}
