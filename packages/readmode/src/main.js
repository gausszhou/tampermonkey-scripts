import  "./assets/styles/index.scss";
import UI from "./components/ui";

let ui = new UI();

(function () {
  window.addEventListener("DOMContentLoaded", function () {
    ui.mounted();
    let hostname = location.hostname;
    console.log(hostname);
    switch (hostname) {
      case "www.uukanshu.com":
        ui.uukanshu();
        break;
      case "www.shuquge.com":
        ui.shuquge();
        break;
      case "www.biquge.lu":
        ui.shuquge();
        break;
      case "www.81zw.com":
        ui.www81zw();
        break;
      case "www.81zw.me":
        ui.www81zw();
        break;
      default:
        ui.shuquge();
        break;
    }

    document.body.style.display = "block";
  });
})();

// export default ui