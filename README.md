
# 🏎️ Porsche x F1 Themed Dashboard 🚥
*“Bringing revs, vibes, and velocity to the browser.”*

---

## 📌 Overview

This project is a fully responsive, animated, and themeable dashboard inspired by the **Porsche aesthetic** and the adrenaline of **F1 racing** — Lewis Hamilton vibes and all!  
It includes **CSS3 transitions**, **JavaScript interactions**, and **localStorage** to persist user preferences.

---

## ✨ Features (In Detail)

### 🎨 Theming
- **Dark Mode**: Default Porsche red & black vibes `(#e10600 on #0d0d0d)`.
- **Light Mode**: Clean minimal style for daytime viewing.
- 🌙 **Theme Toggle Button** in the **top-right corner**:
  - Click to switch between day/night modes.
  - Saves the preference in `localStorage`.
  - Icon dynamically changes (`🌙` → `🌞`) depending on active theme.

### 👤 User Personalization
- **Name Input Field**:
  - Allows the user to input and save their name.
  - Displayed live in the welcome message.
  - Stored in `localStorage` so it persists between sessions.

### 🏁 Animation + Interaction
- **“Rev & Animate” Button**:
  - Triggers a CSS3 animation on a glowing `.box`.
  - Plays an **authentic revving engine sound** using the updated sound clip.
  - Animates a **speed bar** from 0% to 100% width to simulate acceleration.
  - Everything resets and plays again on every click.

### 🎵 Updated Engine Sound
- I added a **realistic Porsche revving sound**.
- Played using HTML5 `<audio>` and triggered by JavaScript when animation is activated.

### 📱 Responsive Design
- Uses **flexbox** and media queries.
- Automatically stacks panels on smaller viewports (like phones).
- Layout:
  - Left panel: Input, buttons, speed bar.
  - Right panel: Animated Porsche-inspired glowing `.box`.

---

## ✅ Guidelines Followed

**Project Objectives:**
- ✅ Create smooth CSS transitions and animations.
- ✅ Use JavaScript functions for dynamic behavior.
- ✅ Implement `localStorage` for data persistence.

**Instructions:**
- ✅ CSS animations added to buttons and visuals.
- ✅ JavaScript function stores/retrieves preferences via `localStorage`.
- ✅ Animations and sound triggered by user action.

**Tasks Completed:**
- ✅ Created CSS animation for visual interactivity.
- ✅ Stored data in `localStorage` (name + theme).
- ✅ JavaScript triggers animation and rev sound on button press.

---

## 🗂️ File Structure

```
├── index.html         # Main HTML file
├── styles.css         # All styling, transitions, and theme variables
└── script.js          # JavaScript logic, animation triggers, localStorage
```

---

## 💡 Technologies Used

- **HTML5** for structure  
- **CSS3** for custom variables, transitions, gradients, animations  
- **JavaScript (Vanilla)** for interactivity, theme switching, and localStorage  

---

## 🛠️ How to Run

1. Clone or download the project.
2. Open `index.html` in any modern browser.
3. Interact with the fields and buttons.
4. Switch themes, hear the rev, and watch the dashboard animate.


## 👩🏽‍💻 Author

Built by **Thendo  Netshandama**  
With vibes, love, and speed for the code and car community.

---

> *“If your dashboard doesn’t rev, are you even coding?”* 🏎️💻
