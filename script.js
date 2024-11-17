let button = document.getElementById("Nbutton");
let textIndex = 0;
let sizes = [24, 22, 20, 18, 16, 14, 12, 10, 8]; // array of font sizes
let currentSizeIndex = 0;

button.addEventListener("click", function() {
  let texts = ["are you sure..?", "think again", "pleaseeee", "eshaal, be fr", "you're being SILLY", "is this ur final answer -_-", "ok you can't press NO anymore", "kys and press YES bruh"]; // array of text labels

  // cycle through text labels
  textIndex = (textIndex + 1) % texts.length;
  button.textContent = texts[textIndex];

  // cycle through font sizes
  currentSizeIndex = (currentSizeIndex - 1 + sizes.length) % sizes.length;
  let newSize = sizes[currentSizeIndex];
  button.style.fontSize = newSize + "px";


  // disable button if last text label is reached
  if (textIndex === texts.length - 1) {
    button.disabled = true;
  }
});




