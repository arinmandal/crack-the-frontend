const btn = document.querySelector("#toggle-theme");

// Set theme based on system preference
function setThemeBySystem() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.body.classList.toggle("dark", prefersDark);
  document.body.classList.toggle("light", !prefersDark);
}

// Listen for system theme changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
      setThemeBySystem();
    }
  });

// Apply saved theme or system preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.classList.add(savedTheme);
} else {
  setThemeBySystem();
}

// Toggle theme on button click
btn.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");
  document.body.classList.toggle("dark", !isDark);
  document.body.classList.toggle("light", isDark);
  localStorage.setItem("theme", isDark ? "light" : "dark");
});
