document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".band-section .card-container");
  const cards = document.querySelectorAll(".band-section .card101");

  let isDragging = false;
  let startX, scrollLeft;

  // Dragging functionality
  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.classList.add("active");
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Adjust drag sensitivity
    container.scrollLeft = scrollLeft - walk;
  });

  container.addEventListener("mouseup", () => {
    isDragging = false;
    container.classList.remove("active");
  });

  container.addEventListener("mouseleave", () => {
    if (isDragging) {
      isDragging = false;
      container.classList.remove("active");
    }
  });

  // Prevent default behavior for better dragging
  container.addEventListener("dragstart", (e) => e.preventDefault());

  // Mobile compatibility - Tap-based hover content
  cards.forEach((card) => {
    card.addEventListener("touchstart", () => {
      const content = card.querySelector(".card-content");
      if (content) {
        content.style.transform = "translateY(0)";
        setTimeout(() => {
          content.style.transform = "translateY(100%)";
        }, 2000); // Display for 2 seconds
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuLinks = document.querySelectorAll(".mobile-menu a");

  // Toggle menu on hamburger click
  hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  // Smooth scroll and close menu when a link is clicked
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = link.getAttribute("href").substring(1); // Get the target section ID
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Scroll to the section
        targetSection.scrollIntoView({ behavior: "smooth" });
      }

      // Close the mobile menu
      mobileMenu.classList.remove("active");
    });
  });
});



      // Toggle FAQ items
      document.querySelectorAll(".faq-header").forEach((header) => {
        header.addEventListener("click", () => {
          const faqItem = header.parentElement;
          faqItem.classList.toggle("open");
        });
      });

// back to top button
const backToTopButton = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// other
function learnMore() {
  alert("Redirecting to the philosophy of Pink Floyd!");
  // Replace with actual navigation logic or link
}
