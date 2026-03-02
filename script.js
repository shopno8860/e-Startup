document.getElementById("hamburger")
  .addEventListener("click", () =>
    document.getElementById("navLinks")
      .classList.toggle("active")
);

// Mobile dropdown toggle
document.querySelectorAll(".dropdown, .deep-dropdown")
  .forEach(item => {
    item.addEventListener("click", function(e) {
      if (window.innerWidth <= 576) {
        e.stopPropagation();
        this.classList.toggle("active");
      }
    });
});

//  Active Link Switching 
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  link.addEventListener("click", (e)=> {

    // remove active from all
    links.forEach(l => l.classList.remove("active"));

    // add active to clicked
    e.target.classList.add("active");
  });
});

// FAQ Accordion
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const wasActive = item.classList.contains("active");
    document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("active"));
    if (!wasActive) item.classList.add("active");
  });
});

