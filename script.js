document.addEventListener("DOMContentLoaded", () => {
    const usernameInput = document.getElementById("username");
    const saveBtn = document.getElementById("save-btn");
    const themeBtn = document.getElementById("theme-btn");
    const animateBtn = document.getElementById("animate-btn");
    const usernameDisplay = document.getElementById("username-display");
    const animateBox = document.getElementById("animate-box");
    const speedBar = document.getElementById("speed-bar");
    const revSound = document.getElementById("rev-sound");
  
    // Set initial theme from storage
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    themeBtn.textContent = savedTheme === "light" ? "🌞" : "🌙";
  
    const savedName = localStorage.getItem("username");
    if (savedName) {
      usernameDisplay.textContent = savedName;
    }
  
    saveBtn.addEventListener("click", () => {
      const name = usernameInput.value.trim();
      if (name) {
        localStorage.setItem("username", name);
        usernameDisplay.textContent = name;
      }
    });
  
    themeBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      themeBtn.textContent = newTheme === "light" ? "🌞" : "🌙";
    });
  
    animateBtn.addEventListener("click", () => {
      animateBox.classList.remove("animated");
      void animateBox.offsetWidth;
      animateBox.classList.add("animated");
  
      // Play engine sound
      revSound.currentTime = 0;
      revSound.play();
  
      // Animate speed bar
      speedBar.style.width = "0%";
      setTimeout(() => {
        speedBar.style.width = "100%";
      }, 100);
    });
  });
  