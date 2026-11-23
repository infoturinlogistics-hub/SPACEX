/*
 * Add your Google Form URL below before publishing.
 * Example: const GOOGLE_FORM_URL = "https://forms.gle/your-form-id";
 */
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeBE8wV_Hh29WZe7VAVstACTOFohk_Urzf0qVKCF4_yfrVC6Q/viewform?usp=publish-editor";

document.getElementById("year").textContent = new Date().getFullYear();

const formButton = document.getElementById("googleFormButton");
const linkNote = document.getElementById("linkNote");


/* CONTACT EMAIL CONFIGURATION */

// CHANGE THIS TO YOUR COMPANY EMAIL
const CONTACT_EMAIL = "elonmusk3647600@gmail.com";

document.getElementById("contactForm")
.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const subject = document.getElementById("contactSubject").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  if (!name || !email || !subject || !message) {
    document.getElementById("contactStatus").textContent =
      "Please complete all fields.";
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("contactStatus").textContent =
      "Please enter a valid email address.";
    return;
  }

  const emailSubject = encodeURIComponent(subject);

  const emailBody = encodeURIComponent(
    "Hello Team,\n\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n\n" +
    "Message:\n" + message
  );

  const mailtoLink =
    `mailto:${CONTACT_EMAIL}?subject=${emailSubject}&body=${emailBody}`;

  document.getElementById("contactStatus").textContent =
    "Opening your email application. Please review and send your message.";

  window.location.href = mailtoLink;
});

if (GOOGLE_FORM_URL.startsWith("https://forms.gle/") ||
    GOOGLE_FORM_URL.startsWith("https://docs.google.com/forms/d/e/1FAIpQLSeBE8wV_Hh29WZe7VAVstACTOFohk_Urzf0qVKCF4_yfrVC6Q/viewform?usp=publish-editor")) {
  formButton.href = GOOGLE_FORM_URL;
  linkNote.textContent = "You will continue to Google Forms in a new tab.";
} else {
  formButton.addEventListener("click", event => {
    event.preventDefault();
    linkNote.textContent = "The Google Form link has not been configured yet. Add it in main.js.";
    linkNote.classList.add("link-error");
  });
  formButton.setAttribute("aria-disabled", "true");
}
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));
