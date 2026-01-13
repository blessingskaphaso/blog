// Interactivity for admin login screen
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Dummy credentials
      const validEmail = "bless@gmail.com";
      const validPassword = "admin123";

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const errorMsg = document.getElementById("loginError");

      if (email === validEmail && password === validPassword) {
        window.location.href = "admin-dashboard.html";
      } else {
        errorMsg.textContent = "Invalid email or password.";
      }
    });
  }

  // Dashboard-specific message
  if (window.location.pathname.includes("admin-dashboard.html")) {
    console.log("Admin dashboard loaded.");
  }
});
// Article form submission
document.getElementById("articleForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("articleTitle").value;
  const content = document.getElementById("articleContent").value;

  document.getElementById("articleMessage").textContent = `Article "${title}" saved!`;
  this.reset();
});

// Poem form submission
document.getElementById("poemForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const title = document.getElementById("poemTitle").value;
  const content = document.getElementById("poemContent").value;

  document.getElementById("poemMessage").textContent = `Poem "${title}" saved!`;
  this.reset();
});
