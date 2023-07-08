document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login-form");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);

      if (email === userData.email && password === userData.password) {
        window.location.href = "candidate.html";
      } else {
        errorMessage.textContent = "Invalid email or password.";
        errorMessage.style.color = "red";
        loginForm.appendChild(errorMessage);
      }
    } else {
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "No user found. Please register first.";
      errorMessage.style.color = "red";
      loginForm.appendChild(errorMessage);
    }
  });
});
