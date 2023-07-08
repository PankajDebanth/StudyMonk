document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.querySelector("#register-form");

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const userData = {
      name: name,
      email: email,
      password: password,
    };
    localStorage.setItem("userData", JSON.stringify(userData));

    const successMessage = document.createElement("p");
    successMessage.textContent = "Registration successful! Please login.";
    successMessage.style.color = "green";

    const container = document.querySelector(".container");
    container.appendChild(successMessage);

    registerForm.reset();
  });
});
