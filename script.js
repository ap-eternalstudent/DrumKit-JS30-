const playSound = function (e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
};
function removeTransition(e) {
  if (e.propertyName !== "transform") {
    this.classList.remove("playing");
  }
}

const keys = document.querySelectorAll(".key");
const mainFunction = window.addEventListener("keydown", playSound);
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
