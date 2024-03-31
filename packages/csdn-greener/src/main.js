import "./styles/index.scss";
import UI from "./components/ui";

let isInit = false;
const ui = new UI();

(function(){
  window.addEventListener("load", () => {
    init();
  }); 
})()

function init(){
  if(isInit) return
  isInit = true
  ui.mounted();
  ui.csdn();
  document.body.style.display = "block";
  console.log("[info] Finshed")
}
