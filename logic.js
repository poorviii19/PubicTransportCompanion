const stepHeaders = document.querySelectorAll(".step-header");

stepHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const card = header.parentElement;

    // Close others (accordion behavior)
    document.querySelectorAll(".step-card").forEach(c => {
      if (c !== card) c.classList.remove("active");
    });

    card.classList.toggle("active");
  });
});
