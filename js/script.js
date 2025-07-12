document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form");

  forms.forEach(form => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Form submitted successfully! (This is a demo alert — integrate your MailerLite form here.)");
      form.reset();
    });
  });
});
