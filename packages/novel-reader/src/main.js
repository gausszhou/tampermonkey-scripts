import "./assets/styles/index.scss";
import QiDian from "./components/qidian";
import Reader from "./components/reader";

window.addEventListener("load", () => {
  init();
});

let isInit = false;
function init() {
  if (isInit) return;
  isInit = true;
  if (location.hostname === "book.qidian.com") {
    const qidian = new QiDian();
    qidian.mounted();
  } else {
    const reader = new Reader();
    reader.mounted();
    reader.judge();
  }
  document.body.style.display = "block";
}
