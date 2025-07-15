// Button click
document.getElementById("magicBtn").addEventListener("click", () => {
  alert("Button was clicked!");
  document.getElementById("magicBtn").style.backgroundColor = "green";
});

// Double click (secret)
document.getElementById("magicBtn").addEventListener("dblclick", () => {
  document.getElementById("secret").classList.remove("hidden");
});

// Tab switching
const tabs = document.querySelectorAll('.tab');
const tabContent = document.getElementById('tabContent');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabContent.textContent = `You selected Tab ${tab.dataset.tab}`;
  });
});

// Form Validation
const emailInput = document.getElementById('email');
const emailFeedback = document.getElementById('emailFeedback');
const passInput = document.getElementById('password');
const passFeedback = document.getElementById('passFeedback');

emailInput.addEventListener('input', () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emailInput.value)) {
    emailFeedback.textContent = "✅ Valid Email";
    emailFeedback.classList.add("valid");
  } else {
    emailFeedback.textContent = "❌ Invalid Email Format";
    emailFeedback.classList.remove("valid");
  }
});

passInput.addEventListener('input', () => {
  if (passInput.value.length >= 8) {
    passFeedback.textContent = "✅ Strong Password";
    passFeedback.classList.add("valid");
  } else {
    passFeedback.textContent = "❌ Minimum 8 characters";
    passFeedback.classList.remove("valid");
  }
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
});
