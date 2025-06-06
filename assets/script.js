// Tombol scroll ke fitur
function scrollToFeatures() {
  const featureSection = document.getElementById('features');
  if (featureSection) {
    featureSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    // Jika fitur tidak ada di halaman ini, arahkan ke halaman fitur
    window.location.href = "fitur.html";
  }
}

// Highlight link aktif saat ini
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.style.fontWeight = "bold";
      link.style.textDecoration = "underline";
    }
  });
});
