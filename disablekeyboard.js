
function noCheatAlert() {
  // Add CSS using JavaScript
  if (!document.getElementById("horrorStyle")) {
    const style = document.createElement("style");
    style.id = "horrorStyle";

    style.textContent = `
      @keyframes horrorShake {
        0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
        25% { transform: translate(-50%, -50%) rotate(-2deg); }
        75% { transform: translate(-50%, -50%) rotate(2deg); }
      }

      @keyframes horrorGlow {
        0%, 100% { box-shadow: 0 0 15px red; }
        50% { box-shadow: 0 0 50px red; }
      }

      #horrorOverlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999999;
      }

      #horrorPopup {
        background: #180509;
        border: 3px solid crimson;
        border-radius: 20px;
        padding: 35px;
        width: min(85%, 420px);
        box-sizing: border-box;
        text-align: center;
        color: white;
        font-family: Arial, sans-serif;
        animation: horrorShake 0.3s infinite,
                   horrorGlow 1s infinite;
      }

      #horrorPopup h1 {
        color: #ff1738;
        text-shadow: 0 0 20px red;
      }

      #horrorPopup button {
        background: crimson;
        color: white;
        border: none;
        padding: 15px 20px;
        border-radius: 10px;
        cursor: pointer;
        font-weight: bold;
      }

      #horrorPopup button:hover {
        background: darkred;
      }
    `;

    document.head.appendChild(style);
  }

  // Prevent duplicate popups
  if (document.getElementById("horrorOverlay")) return;

  // Create popup
  const overlay = document.createElement("div");
  overlay.id = "horrorOverlay";

  overlay.innerHTML = `
    <div id="horrorPopup">
      <h1>💀 CAUGHT IN 4K 💀</h1>
      <h2>REALLY???? CHEAT MUCH?????!!!</h2>
      <p>👹 THE EXAM DEMON SAW THAT!</p>
      <p>👻 Your keyboard has been reported to the ghost police.</p>
      <button id="horrorClose">
        I SWEAR I WASN'T CHEATING 😭
      </button>
    </div>
  `;

  document.body.appendChild(overlay);

  // Close popup
  document.getElementById("horrorClose").onclick = function() {
    overlay.remove();
  };
}

// 1. Disable Right-Click
document.addEventListener('contextmenu', function (event) {
  event.preventDefault();
  noCheatAlert();
});

// 2. Disable Common Keyboard Shortcuts
document.addEventListener('keydown', function (event) {
  // Check if Ctrl (Windows/Linux) or Cmd (Mac) is pressed
  const isCmdOrCtrl = event.ctrlKey || event.metaKey;
  const key = event.key.toLowerCase();

  // Block F12 (DevTools)
  if (event.key === 'F12') {
    event.preventDefault();
    noCheatAlert();
  }
    // Block F12 (DevTools)
  if (event.key === 'F11') {
    event.preventDefault();
    noCheatAlert();
  }

  // Block Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (DevTools & Inspect)
  if (isCmdOrCtrl && event.shiftKey && ['i', 'j', 'c'].includes(key)) {
    event.preventDefault();
    noCheatAlert();
  }

  // Block Ctrl+U (View Source), Ctrl+S (Save), Ctrl+C (Copy), Ctrl+P (Print)
  if (isCmdOrCtrl && ['u', 's', 'c', 'p'].includes(key)) {
    event.preventDefault();
    noCheatAlert();
  }
});
