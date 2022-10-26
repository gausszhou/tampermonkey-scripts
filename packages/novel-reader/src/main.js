import "./assets/styles/index.scss"
import QiDian from "./components/qidian"
import Reader from "./components/reader"

let isInit = false

;(function () {
  window.addEventListener("DOMContentLoaded", () => {
    init()
  })
  window.addEventListener("load", () => {
    init()
  })
  setTimeout(() => {
    init()
  }, 2000)
})()

function init() {
  if (isInit) return
  isInit = true
  if (location.hostname === "book.qidian.com") {
    let qidian = new QiDian()
    qidian.mounted()
  } else {
    let reader = new Reader()
    reader.mounted()
    reader.judge()
  }
  document.body.style.display = "block"
}
