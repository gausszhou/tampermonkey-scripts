import "./styles/index.scss";
import UI from "./components/ui";

let ui = new UI();

(function () {
  window.addEventListener("load", () => {
    init();
  });
  window.addEventListener("DOMContentLoaded", () => {
    init();
  });
})();

let isInit = false;
function init(){
  if(isInit) return
  isInit = true
  ui.mounted();
  ui.process();
  console.log("[info] Finshed");
}
