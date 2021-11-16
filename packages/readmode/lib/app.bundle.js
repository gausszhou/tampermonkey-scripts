// ==UserScript==
// @name         阅读模式
// @version      0.0.3
// @description  帮助你获得一致的阅读体验
// @author       gausszhou@qq.com
// @namespace    gausszhou
// @grant        none
// @run-at       document-start
// @icon         https://www.uukanshu.com/favicon.ico
// @include      *://www.uukanshu.com/b/*
// @include      *://www.uukanshu.com/*.html
// @include      *://www.shuquge.com/txt/*/index.html
// @include      *://www.shuquge.com/txt/*/*.html
// @include      *://www.biquge.lu/book/*/
// @include      *://www.biquge.lu/book/*/*.html
// @include      *://www.81zw.com/book/*
// @include      *://www.81zw.com/book/*/*.html
// @include      *://www.81zw.me/book/*
// @include      *://www.81zw.me/book/*/*.html

// ==/UserScript==


// src/components/ui.js
var dq = document.querySelector.bind(document);
function UI() {
  this.init();
}
UI.prototype.init = function() {
  this.new_title_el = document.createElement("div");
  this.new_title_el.className = "_content_title";
  this.new_content_el = document.createElement("div");
  this.new_content_el.className = "_content";
  this.new_nav_el = document.createElement("div");
  this.new_nav_el.className = "_content_nav";
};
UI.prototype.mounted = function() {
  this.body = document.body;
};
UI.prototype.processRemoveAD = function() {
  if (this.ads.length) {
    console.log(this.ads.length);
    this.ads.forEach((selector) => {
      let ad = dq(selector);
      console.log(ad);
      if (ad)
        ad.parentElement.removeChild(ad);
    });
  }
};
UI.prototype.processRead = function() {
  this.new_title_el.innerHTML = this.old_title_el.innerHTML;
  this.new_content_el.innerHTML = this.new_title_el.outerHTML + this.old_content_el.innerHTML;
  if (this.nav_prev) {
    this.new_nav_el.appendChild(this.nav_prev);
  } else {
    this.new_nav_el.innerHTML += "<span>\u4E0A\u4E00\u5F20</span>";
  }
  if (this.nav_menu) {
    this.new_nav_el.appendChild(this.nav_menu);
  } else {
    this.new_nav_el.innerHTML += "<span>\u76EE\u5F55</span>";
  }
  if (this.nav_next) {
    this.new_nav_el.appendChild(this.nav_next);
  } else {
    this.new_nav_el.innerHTML += "<span>\u4E0B\u4E00\u5F20</span>";
  }
  this.body.innerHTML = "";
  this.body.appendChild(this.new_content_el);
  this.body.appendChild(this.new_nav_el);
  let p_list = document.querySelectorAll("._content > p");
  p_list.forEach((p) => {
    p.innerHTML = p.innerHTML.trim();
  });
};
UI.prototype.processMenu = function() {
  this.new_menu_el = document.createElement("div");
  this.new_menu_el.classList.add("_menu_content");
  this.new_menu_el.innerHTML = this.body.innerHTML;
  this.body.innerHTML = "";
  this.body.appendChild(this.new_menu_el);
};
UI.prototype.process = function() {
  this.mode = "home";
  this.processRemoveAD();
  if (this.old_content_el) {
    this.mode = "read";
    this.processRead();
  } else {
    this.mode = "menu";
    this.processMenu();
  }
  this.body.classList.add(this.mode);
};
UI.prototype.uukanshu = function() {
  this.body.classList.add("uukanshu");
  this.old_title_el = dq(".h1title #timu");
  this.old_content_el = dq("#contentbox");
  this.nav_prev = dq(".fanye #prev");
  this.nav_menu = dq(".fanye #htmlmulu");
  this.nav_next = dq(".fanye #next");
  this.ads = [".ad_content"];
  this.process();
};
UI.prototype.shuquge = function() {
  this.body.classList.add("shuquge");
  this.old_title_el = dq(".content h1");
  this.old_content_el = dq("#content");
  this.old_nav_el = dq(".page_chapter ul");
  this.nav_prev = dq(".page_chapter li:nth-child(1) a");
  this.nav_menu = dq(".page_chapter li:nth-child(2) a");
  this.nav_next = dq(".page_chapter li:nth-child(3) a");
  this.ads = [
    ".ywtop",
    ".header",
    "div.box_con > div.bookname div.lm",
    ".info > .link",
    ".footer"
  ];
  this.process();
};
UI.prototype.www81zw = function() {
  this.body.classList.add("www81zw");
  this.old_title_el = dq(".content_read .bookname h1");
  this.old_content_el = dq(".content_read #content");
  this.old_nav_el = dq(".page_chapter ul");
  this.nav_prev = dq(".bottem2 a:nth-child(1)");
  this.nav_menu = dq(".bottem2 a:nth-child(2)");
  this.nav_next = dq(".bottem2 a:nth-child(3)");
  this.ads = [
    ".ywtop",
    "#footer",
    ".header",
    "#listtj",
    ".box_con + script + div"
  ];
  this.process();
};
var ui_default = UI;

// src/main.js
var ui = new ui_default();
(function() {
  window.addEventListener("DOMContentLoaded", function() {
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


window.onDOMContentLoaded = ()=> {
    var styleDom = document.createElement('style');
    styleDom.innerText =  `
    @charset "UTF-8";

/* sass-plugin-0:D:\Test\tampermonkey-uukanshu\src\assets\styles\index.scss */
body {
  display: none;
}
body.nemu iframe,
body.nemu .weizhi,
body.nemu .weizhi + div,
body.nemu .at-share-btn,
body.nemu .sao_mobile_box,
body.nemu .addthis-animated,
body.nemu .addthis-smartlayers,
body.nemu .addthis-smartlayers-desktop,
body.read iframe,
body.read .weizhi,
body.read .weizhi + div,
body.read .at-share-btn,
body.read .sao_mobile_box,
body.read .addthis-animated,
body.read .addthis-smartlayers,
body.read .addthis-smartlayers-desktop {
  display: none !important;
}
body.menu {
  background-color: #eee !important;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXr5djn4dTp49bt59rT6LKxAAACnElEQVQozw3NUUwScRzA8d8R6MF8YMIx8uk47hDSJbj14IPzOGc7jPLvwTGg5uAYDbe2tt56cLtznvEnS6yDqCcEaWi91DvrbLJZz7b1aFtz1aO+2OZWvn+/+4CHeB6BMYaqBLfjPNRY6RFT2JJYby+uAk4WUTrtlmJ4hgPYb2q1XGDQjaK8pgJHvqNaAX+KyuIkDXpgQinb46nOulnn4b5laUHTxLfseeArAoNOeJlOIjdoal0n1FA7tKFv5roK+YaHOqP3P0XyKHPHY+MhTRe5uCZnKhtJKw2eSrSoBDPLtpZuNcFNJcFyiCMxOaaHIfXz1e8HQbWLySrBQ4x0x1qlhnHlnz2HQEC6TNb0gTHXa7IKhcaHqkE015hk9whA0YeWiLIXf7Fa2CZo3DjqjB4tTuF8jIcbfcEx5z/w4sXpQhXW+ju0cqh7icTFmRMaG+v6CIvTjcSpHcH8JEsF3EPh3fRthYdVLLgI2fWXm85/pGFE4l046s70L+yKCcirGFR+jbpy3kMmiCGHrSezVONsn1RBixncyk2PcVWk7DlgxHo8iZwDyq5uAUD854dZhdIFYzKoQig2haUKi1lVufz2RZUZPZ41n/hrOQB6h0Hhg8I367FNoEHgeM/KY7szSeQwD8q2WE3HM35ZLl0K1MJiOtHIkBclRQUwZnyOWcNsRQQgVLj1PSqkjF9DsoOSaSg3iinKzvfmgsNFFfpP/2T3GLGvL4fHEfwIX1sVvXcPqLztehWGcfn9nI2U9nTfCgJPe/jFPLZwgVEzimBgAm0VIyK2tt1cE/AzQdLK+SxLSQ4aDCZnnId94OG2S1XwvnTbNk/ZnhyRCQT+sZM6z9g6LXL1BOBe+zJySiFkHAINCtnQokbCJ/apCv0foqPiZVfhpywAAAAASUVORK5CYII=) repeat;
  font-family:
    \cb\ce\cc\e5,
    PingFangSC-Regular,
    HelveticaNeue-Light,
    "Helvetica Neue Light",
    "Microsoft YaHei",
    sans-serif !important;
}
body.menu ._menu_content {
  margin: 36px auto;
}
body.menu ._menu_content a {
  color: #333 !important;
}
body.menu ._menu_content a:visited {
  color: #555 !important;
}
body.menu .box_con {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAACVBMVEX28ef48+n69esoK7jYAAAB4UlEQVQozw2OsW4bQQxEhwLXkDrysGdEqRRgVShfQQq8wOr2jD0jSpXCLvwXbtKfADlFqgSwC/9ljqweZgYzQFnb/QGepYhA9jzmTc1WaSEtQpbFgjWATI00ZZtIckXx8q2Oe5yEByBy+RHOTcM+VVTadULsvxvRC/q8WTwgcWGD+Mnaqa0oy2gw2pKFzK+PzEsus5hP9AHojKslVynLlioVTBEN8cjDNnZoR1uMGTiZAAN47HxMtEkGUE9b8HWzkqNX5Lpk0yVziAJOs46rK1pG/xNuXLjz95fSDoJE5IqG23MAYPtWoeWPvfVtIV/Ng9oH3W0gGMPIOqd4MK4QZ55dV61gOb8Zxp7I9qayaGxp6Q91cmC0ZRdBwEQVHWzSAanlZwVWc9yljeTCeaHjBVvlPSLeyeBUT2rPdJegQI103jVS3uYkyIx1il6mslMDedZuOkwzolsagvPuQAfp7cYg7k9V1NOxfq64PNSvMdwONV4VYEmqlbpZy5OAakRKkjPnL4CBv5/OZRgoWHBmNbxB0LgB1I4vXFj93UoF2/0TPEsWwV9EhbIiTPqYoTHYoMn3enTDjmrFeDTIzaL1bUC/PBIMuF+vSSYSaxoVt90EO3Gu1zrMuMRGUk7Ffv3L+A931Gsb/yBoIgAAAABJRU5ErkJggg==) repeat;
}
.shuquge.menu .book,
.shuquge.menu .listmain {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAACVBMVEX28ef48+n69esoK7jYAAAB4UlEQVQozw2OsW4bQQxEhwLXkDrysGdEqRRgVShfQQq8wOr2jD0jSpXCLvwXbtKfADlFqgSwC/9ljqweZgYzQFnb/QGepYhA9jzmTc1WaSEtQpbFgjWATI00ZZtIckXx8q2Oe5yEByBy+RHOTcM+VVTadULsvxvRC/q8WTwgcWGD+Mnaqa0oy2gw2pKFzK+PzEsus5hP9AHojKslVynLlioVTBEN8cjDNnZoR1uMGTiZAAN47HxMtEkGUE9b8HWzkqNX5Lpk0yVziAJOs46rK1pG/xNuXLjz95fSDoJE5IqG23MAYPtWoeWPvfVtIV/Ng9oH3W0gGMPIOqd4MK4QZ55dV61gOb8Zxp7I9qayaGxp6Q91cmC0ZRdBwEQVHWzSAanlZwVWc9yljeTCeaHjBVvlPSLeyeBUT2rPdJegQI103jVS3uYkyIx1il6mslMDedZuOkwzolsagvPuQAfp7cYg7k9V1NOxfq64PNSvMdwONV4VYEmqlbpZy5OAakRKkjPnL4CBv5/OZRgoWHBmNbxB0LgB1I4vXFj93UoF2/0TPEsWwV9EhbIiTPqYoTHYoMn3enTDjmrFeDTIzaL1bUC/PBIMuF+vSSYSaxoVt90EO3Gu1zrMuMRGUk7Ffv3L+A931Gsb/yBoIgAAAABJRU5ErkJggg==) repeat;
}
body.read {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXr5djn4dTp49bt59rT6LKxAAACnElEQVQozw3NUUwScRzA8d8R6MF8YMIx8uk47hDSJbj14IPzOGc7jPLvwTGg5uAYDbe2tt56cLtznvEnS6yDqCcEaWi91DvrbLJZz7b1aFtz1aO+2OZWvn+/+4CHeB6BMYaqBLfjPNRY6RFT2JJYby+uAk4WUTrtlmJ4hgPYb2q1XGDQjaK8pgJHvqNaAX+KyuIkDXpgQinb46nOulnn4b5laUHTxLfseeArAoNOeJlOIjdoal0n1FA7tKFv5roK+YaHOqP3P0XyKHPHY+MhTRe5uCZnKhtJKw2eSrSoBDPLtpZuNcFNJcFyiCMxOaaHIfXz1e8HQbWLySrBQ4x0x1qlhnHlnz2HQEC6TNb0gTHXa7IKhcaHqkE015hk9whA0YeWiLIXf7Fa2CZo3DjqjB4tTuF8jIcbfcEx5z/w4sXpQhXW+ju0cqh7icTFmRMaG+v6CIvTjcSpHcH8JEsF3EPh3fRthYdVLLgI2fWXm85/pGFE4l046s70L+yKCcirGFR+jbpy3kMmiCGHrSezVONsn1RBixncyk2PcVWk7DlgxHo8iZwDyq5uAUD854dZhdIFYzKoQig2haUKi1lVufz2RZUZPZ41n/hrOQB6h0Hhg8I367FNoEHgeM/KY7szSeQwD8q2WE3HM35ZLl0K1MJiOtHIkBclRQUwZnyOWcNsRQQgVLj1PSqkjF9DsoOSaSg3iinKzvfmgsNFFfpP/2T3GLGvL4fHEfwIX1sVvXcPqLztehWGcfn9nI2U9nTfCgJPe/jFPLZwgVEzimBgAm0VIyK2tt1cE/AzQdLK+SxLSQ4aDCZnnId94OG2S1XwvnTbNk/ZnhyRCQT+sZM6z9g6LXL1BOBe+zJySiFkHAINCtnQokbCJ/apCv0foqPiZVfhpywAAAAASUVORK5CYII=) repeat;
  font-size: 18px;
  font-family:
    PingFangSC-Regular,
    HelveticaNeue-Light,
    "Helvetica Neue Light",
    "Microsoft YaHei",
    sans-serif !important;
}
body.read ._content {
  box-sizing: border-box;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAACVBMVEX28ef48+n69esoK7jYAAAB4UlEQVQozw2OsW4bQQxEhwLXkDrysGdEqRRgVShfQQq8wOr2jD0jSpXCLvwXbtKfADlFqgSwC/9ljqweZgYzQFnb/QGepYhA9jzmTc1WaSEtQpbFgjWATI00ZZtIckXx8q2Oe5yEByBy+RHOTcM+VVTadULsvxvRC/q8WTwgcWGD+Mnaqa0oy2gw2pKFzK+PzEsus5hP9AHojKslVynLlioVTBEN8cjDNnZoR1uMGTiZAAN47HxMtEkGUE9b8HWzkqNX5Lpk0yVziAJOs46rK1pG/xNuXLjz95fSDoJE5IqG23MAYPtWoeWPvfVtIV/Ng9oH3W0gGMPIOqd4MK4QZ55dV61gOb8Zxp7I9qayaGxp6Q91cmC0ZRdBwEQVHWzSAanlZwVWc9yljeTCeaHjBVvlPSLeyeBUT2rPdJegQI103jVS3uYkyIx1il6mslMDedZuOkwzolsagvPuQAfp7cYg7k9V1NOxfq64PNSvMdwONV4VYEmqlbpZy5OAakRKkjPnL4CBv5/OZRgoWHBmNbxB0LgB1I4vXFj93UoF2/0TPEsWwV9EhbIiTPqYoTHYoMn3enTDjmrFeDTIzaL1bUC/PBIMuF+vSSYSaxoVt90EO3Gu1zrMuMRGUk7Ffv3L+A931Gsb/yBoIgAAAABJRU5ErkJggg==) repeat;
  width: 800px;
  margin: 2em auto 1em;
  padding: 1em;
  color: #262626;
  font-weight: 500;
  text-indent: 2em;
  text-align: left;
  border: 1px solid #d8d8d8;
}
body.read ._content br {
  content: "";
  margin: 0.5em 0;
  display: block;
  font-size: 150%;
}
body.read ._content p {
  word-wrap: wrap;
  word-break: break-all;
  margin-top: 0.5em;
  line-height: 1.5;
  text-align: justify;
}
body.read ._content ._content_title {
  display: flex;
  align-items: center;
  text-indent: 0;
  padding: 0 0 0.5em;
  margin: 0 0 0.5em;
  border-bottom: 1px solid #d8d8d8;
  color: #cc3300;
}
body.read ._content ._content_title span {
  font-size: 12px;
  padding: 0 1em;
  margin: 0;
}
body.read ._content_nav {
  box-sizing: border-box;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAACVBMVEX28ef48+n69esoK7jYAAAB4UlEQVQozw2OsW4bQQxEhwLXkDrysGdEqRRgVShfQQq8wOr2jD0jSpXCLvwXbtKfADlFqgSwC/9ljqweZgYzQFnb/QGepYhA9jzmTc1WaSEtQpbFgjWATI00ZZtIckXx8q2Oe5yEByBy+RHOTcM+VVTadULsvxvRC/q8WTwgcWGD+Mnaqa0oy2gw2pKFzK+PzEsus5hP9AHojKslVynLlioVTBEN8cjDNnZoR1uMGTiZAAN47HxMtEkGUE9b8HWzkqNX5Lpk0yVziAJOs46rK1pG/xNuXLjz95fSDoJE5IqG23MAYPtWoeWPvfVtIV/Ng9oH3W0gGMPIOqd4MK4QZ55dV61gOb8Zxp7I9qayaGxp6Q91cmC0ZRdBwEQVHWzSAanlZwVWc9yljeTCeaHjBVvlPSLeyeBUT2rPdJegQI103jVS3uYkyIx1il6mslMDedZuOkwzolsagvPuQAfp7cYg7k9V1NOxfq64PNSvMdwONV4VYEmqlbpZy5OAakRKkjPnL4CBv5/OZRgoWHBmNbxB0LgB1I4vXFj93UoF2/0TPEsWwV9EhbIiTPqYoTHYoMn3enTDjmrFeDTIzaL1bUC/PBIMuF+vSSYSaxoVt90EO3Gu1zrMuMRGUk7Ffv3L+A931Gsb/yBoIgAAAABJRU5ErkJggg==) repeat;
  width: 800px;
  margin: 1em auto 2em;
  height: 70px;
  display: flex;
  align-items: center;
  border: 1px solid #d8d8d8;
}
body.read ._content_nav a,
body.read ._content_nav span {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #333;
}
body.read ._content_nav a:hover,
body.read ._content_nav span:hover {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAADFBMVEXr5djn4dTp49bt59rT6LKxAAACnElEQVQozw3NUUwScRzA8d8R6MF8YMIx8uk47hDSJbj14IPzOGc7jPLvwTGg5uAYDbe2tt56cLtznvEnS6yDqCcEaWi91DvrbLJZz7b1aFtz1aO+2OZWvn+/+4CHeB6BMYaqBLfjPNRY6RFT2JJYby+uAk4WUTrtlmJ4hgPYb2q1XGDQjaK8pgJHvqNaAX+KyuIkDXpgQinb46nOulnn4b5laUHTxLfseeArAoNOeJlOIjdoal0n1FA7tKFv5roK+YaHOqP3P0XyKHPHY+MhTRe5uCZnKhtJKw2eSrSoBDPLtpZuNcFNJcFyiCMxOaaHIfXz1e8HQbWLySrBQ4x0x1qlhnHlnz2HQEC6TNb0gTHXa7IKhcaHqkE015hk9whA0YeWiLIXf7Fa2CZo3DjqjB4tTuF8jIcbfcEx5z/w4sXpQhXW+ju0cqh7icTFmRMaG+v6CIvTjcSpHcH8JEsF3EPh3fRthYdVLLgI2fWXm85/pGFE4l046s70L+yKCcirGFR+jbpy3kMmiCGHrSezVONsn1RBixncyk2PcVWk7DlgxHo8iZwDyq5uAUD854dZhdIFYzKoQig2haUKi1lVufz2RZUZPZ41n/hrOQB6h0Hhg8I367FNoEHgeM/KY7szSeQwD8q2WE3HM35ZLl0K1MJiOtHIkBclRQUwZnyOWcNsRQQgVLj1PSqkjF9DsoOSaSg3iinKzvfmgsNFFfpP/2T3GLGvL4fHEfwIX1sVvXcPqLztehWGcfn9nI2U9nTfCgJPe/jFPLZwgVEzimBgAm0VIyK2tt1cE/AzQdLK+SxLSQ4aDCZnnId94OG2S1XwvnTbNk/ZnhyRCQT+sZM6z9g6LXL1BOBe+zJySiFkHAINCtnQokbCJ/apCv0foqPiZVfhpywAAAAASUVORK5CYII=) repeat;
}
body.home {
  font-family:
    PingFangSC-Regular,
    HelveticaNeue-Light,
    "Helvetica Neue Light",
    "Microsoft YaHei",
    sans-serif !important;
}

    `
    document.body.appendChild(styleDom)
}
