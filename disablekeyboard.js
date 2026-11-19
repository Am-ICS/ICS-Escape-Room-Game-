
function noCheatAlert() {
  // Add CSS using JavaScript
  if (!document.getElementById("horrorStyle")) {
    const style = document.createElement("style");
    style.id = "horrorStyle";


style.textContent = `
  @keyframes horrorShake {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-1deg); }
    75% { transform: rotate(1deg); }
  }

  @keyframes horrorGlow {
    0%, 100% {
      box-shadow: 0 0 30px red, 0 0 60px darkred;
    }
    50% {
      box-shadow: 0 0 100px red, 0 0 180px crimson;
    }
  }

  #horrorOverlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.97);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999;
  }

  #horrorPopup {
    background: #180509;
    border: 6px solid crimson;
    border-radius: 30px;

    width: 90vw;
    max-width: 900px;
    min-height: 500px;
    max-height: 90vh;

    padding: 50px;
    box-sizing: border-box;
    overflow-y: auto;

    text-align: center;
    color: white;
    font-family: Arial, sans-serif;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    animation: horrorShake 0.3s infinite,
               horrorGlow 1s infinite;
  }

  #horrorPopup h1 {
    font-size: clamp(40px, 6vw, 85px);
    color: #ff1738;
    text-shadow: 0 0 35px red;
    margin: 10px;
  }

  #horrorPopup h2 {
    font-size: clamp(25px, 3vw, 45px);
    color: white;
    margin: 10px;
  }

  #horrorPopup p {
    font-size: clamp(20px, 2vw, 32px);
    color: #ffaaaa;
  }

  #horrorPopup button {
    background: crimson;
    color: white;
    border: none;
    padding: 25px 45px;
    border-radius: 15px;
    cursor: pointer;
    font-size: clamp(18px, 2vw, 28px);
    font-weight: bold;
    transition: 0.2s;
  }

  #horrorPopup button:hover {
    background: darkred;
    transform: scale(1.08);
    box-shadow: 0 0 40px red;
  }

  #horrorPopup > div:first-child {
    font-size: clamp(70px, 9vw, 130px) !important;
  }

  @media (max-height: 700px) {
    #horrorPopup {
      min-height: 0;
      padding: 20px;
      gap: 8px;
    }
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
  //   // Block F12 (DevTools)
  // if (event.key === 'F11') {
  //   event.preventDefault();
  //   noCheatAlert();
  // }

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
