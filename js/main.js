function setupThemeToggle() {
  const button = document.querySelector(".theme-button");
  if (!button) return;

  button.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    button.textContent = isDark ? "Light mode" : "Dark mode";
    button.setAttribute("aria-pressed", String(isDark));
  });
}

setupThemeToggle();