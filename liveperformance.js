function animateCounter(element) {
    const target = parseFloat(element.getAttribute("data-target"));
    const isDecimal = element.getAttribute("data-decimal");
    let current = 0;
    const increment = target / 200; // speed

    function updateCounter() {
    current += increment;
    if (current < target) {
        element.textContent = isDecimal 
        ? current.toFixed(1) 
        : Math.floor(current).toLocaleString();
        requestAnimationFrame(updateCounter);
        } else {
          element.textContent = isDecimal 
            ? target.toFixed(1) 
            : target.toLocaleString();
        }
      }
      updateCounter();
    }

    document.querySelectorAll(".stat-value").forEach(stat => {
      animateCounter(stat);
    });
