// Forminit form: inputs are named fi-{type}-{name}. Rules: https://forminit.com/setup.md
const FORM_ID = "r1fcmjiuxjj";
const FIELD_ERRORS = {
  "sender.fullName": "Please use only letters, spaces, hyphens, apostrophes and periods.",
  "sender.email": "Please enter a valid email address.",
};

function errorText(error) {
  const field = error?.fieldName ?? /['"]([^'"]+)['"]/.exec(error?.message ?? "")?.[1];
  if (field && FIELD_ERRORS[field]) return FIELD_ERRORS[field];
  if (error?.error === "TOO_MANY_REQUESTS") return "Please wait a few seconds and try again.";
  return "Something went wrong. Please try again.";
}

const form = document.getElementById("contact-form");
const submitButton = form.querySelector('button[type="submit"]');
const status = form.querySelector("#form-notice");
let sending = false;

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (sending) return;
  const fd = new FormData(form);
  for (const key of ["fi-sender-fullName"]) {
    const value = fd.get(key);
    if (typeof value === "string") fd.set(key, value.replace(/[\u2018\u2019]/g, "'"));
  }
  status.textContent = "";
  sending = true;
  submitButton.disabled = true;
  try {
    const forminit = new Forminit();
    const { data, error } = await forminit.submit(FORM_ID, fd);
    if (error || typeof data?.hashId !== "string") {
      console.error("Forminit:", error ?? data);
      status.textContent = errorText(error);
      return;
    }
    status.textContent = "Thanks—your project inquiry was sent. I’ll be in touch.";
  } catch (error) {
    console.error("Forminit:", error);
    status.textContent = "Something went wrong. Please try again.";
  } finally {
    sending = false;
    submitButton.disabled = false;
  }
});
