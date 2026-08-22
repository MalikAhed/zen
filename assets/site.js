const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const dialog = document.querySelector(".booking-dialog");
const estimateForm = document.querySelector("#estimate-form");
const successMessage = document.querySelector(".form-success");
let previousFocus = null;

const closeMenu = ({ restoreFocus = false } = {}) => {
  if (!menuButton || !mobileNav) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.querySelector(".sr-only").textContent = "Open navigation";
  mobileNav.hidden = true;
  document.body.classList.remove("menu-open");
  if (restoreFocus) menuButton.focus();
};

menuButton?.addEventListener("click", () => {
  const opening = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(opening));
  menuButton.querySelector(".sr-only").textContent = opening ? "Close navigation" : "Open navigation";
  mobileNav.hidden = !opening;
  document.body.classList.toggle("menu-open", opening);
  if (opening) mobileNav.querySelector("a")?.focus();
});

mobileNav?.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

const openBooking = (trigger) => {
  previousFocus = trigger;
  closeMenu();
  estimateForm.hidden = false;
  successMessage.hidden = true;
  const requestedService = trigger.dataset.service;
  if (requestedService) estimateForm.elements.service.value = requestedService;
  dialog.showModal();
  requestAnimationFrame(() => estimateForm.elements.name.focus());
};

document.querySelectorAll("[data-open-booking]").forEach((button) => button.addEventListener("click", () => openBooking(button)));
const closeBooking = () => dialog.open && dialog.close();
document.querySelectorAll("[data-close-booking]").forEach((button) => button.addEventListener("click", closeBooking));
dialog?.addEventListener("click", (event) => { if (event.target === dialog) closeBooking(); });
dialog?.addEventListener("close", () => { previousFocus?.focus(); previousFocus = null; });

estimateForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!estimateForm.reportValidity()) return;
  estimateForm.hidden = true;
  successMessage.hidden = false;
  successMessage.focus();
  estimateForm.reset();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") closeMenu({ restoreFocus: true });
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
