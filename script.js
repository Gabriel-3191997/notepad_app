function openFile() {
  // Example: You can implement file opening functionality here.
  alert("Opening file...");
}

function copyText() {
  var textarea = document.getElementById("notepad-content");
  textarea.select();
  document.execCommand("copy");
  alert("Text copied to clipboard.");
}

function formatText() {
  // Example: You can implement text formatting functionality here.
  alert("Formatting text...");
}
