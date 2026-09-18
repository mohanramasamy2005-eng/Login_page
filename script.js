const form = document.getElementById("loginForm");
const pass = document.getElementById("password");
const toggleBtn = document.querySelector(".toggle-password");
const msg = document.querySelector(".message");

if (toggleBtn && pass) {
  toggleBtn.addEventListener("click", () => {
    const show = pass.type === "password";
    pass.type = show ? "text" : "password";
    toggleBtn.textContent = show ? "Hide" : "Show";
  });
}

if (form && msg) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    if (!email || !pass.value.trim()) {
      msg.textContent = "Please enter email and password.";
      return;
    }
    if (!email.includes("@")) {
      msg.textContent = "Please enter a valid email.";
      return;
    }
    msg.textContent = "Login successful!";
    form.reset();
    pass.type = "password";
    toggleBtn.textContent = "Show";
  });
}
