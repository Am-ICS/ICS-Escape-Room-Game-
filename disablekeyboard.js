function noCheatAlert()
{
    alert("Really???? Cheat much?????!!!");
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
