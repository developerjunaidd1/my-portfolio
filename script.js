// Form validation example
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEvent Listener("submit", (e) => {
    const email = form.querySelector("input[type='email']").value;

    if (!email.includes("@")) {
      alert("Please enter a valid email address!");
      e.preventDefault(); // Form submit hone se rokega
    }
  });
});

  const form = document.getElementById("contactForm");
  const notification = document.getElementById("notification");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // form backend pe na jaye
    notification.style.display = "block";

    // 3 second baad hide ho jaye
    setTimeout(() => {
      notification.style.display = "none";
    }, 3000);

    form.reset(); // form clear kar do
  });



