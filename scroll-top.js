  window.onscroll = function() {
    const btn = document.getElementById("scrollTopBtn");
    const scrollPosition = window.scrollY;
    const halfPage = document.body.scrollHeight / 2;

    if (scrollPosition > halfPage) {
      btn.classList.add("show");  // fade in
    } else {
      btn.classList.remove("show");  // fade out
    }
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }