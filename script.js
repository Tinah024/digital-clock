function updateClock() {
  const now = new Date();

  // Format time
  const time = now.toLocaleTimeString();

  // Format date (example: Saturday, October 4, 2025)
  const date = now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  // Update DOM
  document.getElementById("time").textContent = time;
  document.getElementById("date").textContent = date;
}

// Update every second
setInterval(updateClock, 1000);
updateClock();
