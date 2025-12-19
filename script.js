document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value
    };

    emailjs
      .send("service_lqfn51c", "template_lw47qip", params)
      .then(
        function () {
          alert("Success! Thank you for contacting me. I will get back to you soon.");
          form.reset();
        },
        function (error) {
          alert("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  });
});     

 document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("projectModal");

    // Get modal elements
    const titleEl = document.getElementById("modal-title");
    const metaEl = document.getElementById("modal-meta");
    const imageEl = document.getElementById("modal-img");
    const descEl = document.getElementById("modal-description");
    const langEl = document.getElementById("modal-languages");
    const liveLink = document.getElementById("see-live-link");
    const sourceLink = document.getElementById("see-source-link");

    document.querySelectorAll(".btn").forEach((button) => {
      button.addEventListener("click", () => {
        // Extract data attributes
        const title = button.getAttribute("data-title");
        const company = button.getAttribute("data-company");
        const role = button.getAttribute("data-role");
        const year = button.getAttribute("data-year");
        const desc = button.getAttribute("data-description");
        const image = button.getAttribute("data-img");
        const live = button.getAttribute("data-live");
        const source = button.getAttribute("data-source");
        const languages = JSON.parse(button.getAttribute("data-languages"));

        // Inject data into modal
        titleEl.textContent = title;
        metaEl.innerHTML = `
          <span>${company}</span>
          <div style="width: 8px; height: 8px; background: #C1C7D0; border-radius: 50%;"></div>
          <span>${role}</span>
          <div style="width: 8px; height: 8px; background: #C1C7D0; border-radius: 50%;"></div>
          <span>${year}</span>
        `;
        imageEl.src = image;
        descEl.textContent = desc;
        langEl.innerHTML = languages
          .map(
            (lang) =>
              `<span class="px-3 py-1 rounded-3" style="background: #EBEBFF; color: #6070FF;">${lang}</span>`
          )
          .join("");
        liveLink.href = live;
        sourceLink.href = source;
      });
    });
  });

