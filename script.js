document.addEventListener("DOMContentLoaded", function () {
  // Update tahun copyright otomatis di footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});