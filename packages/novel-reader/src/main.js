import "./assets/styles/index.scss";
import QiDian from "./components/qidian";
import Reader from "./components/reader";

function onLoad() {
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

if (document.readyState === "complete") {
  onLoad();
}
window.addEventListener("load", () => {
  onLoad();
});
