import { injection } from "../utils/index";

let dq = document.querySelector.bind(document);


let timer = null;
const copyCodeGreen = (event) => {
  console.log('copy do');
  $(".hljs-button").removeClass("success");
  try {
    window.copyCode(event)
    console.log('copy success');
    $(event.target).addClass("success");
  } catch (error) {
    console.log('copy failure', error);
  }
  clearTimeout(timer)
  timer = setTimeout(() => {
    $(".hljs-button").removeClass("success");
  }, 3000)
}

function UI() {
  this.init();
}

UI.prototype.init = function () {
  console.log("[info] 欢迎使用 [CSDN 绿化] 插件");
};

UI.prototype.mounted = function () {
  this.body = document.body;
};

UI.prototype.csdn = function () {
  this.body.classList.add("csdn");

  this.mode = "home";

  this.blog_content = dq("#article_content");
  if (this.blog_content) {
    this.blog_content.classList.add("markdown-body");
    this.mode = "article";
  } else if (window.location.href.includes("category")) {
    this.mode = "category";
  } else {
    this.mode = "menu";
  }
  this.body.classList.add(this.mode);

  this.ads = [".csdn-side-toolbar", "#asideHotArticle", "#asideArchive", ".passport-login-mark"];

  this.process();
};

UI.prototype.process = function () {
  this.processRemoveAD();
  this.processClipboard();
};

UI.prototype.processRemoveAD = function () {
  if (this.ads && this.ads.length) {
    this.ads.forEach((selector) => {
      let ad = dq(selector);
      console.log("[info] 去除广告", selector);
      if (ad) ad.parentElement.removeChild(ad);
    });
  }
};

UI.prototype.processClipboard = function () {
  injection();


  // 去除剪贴板劫持
  try {
    Object.defineProperty(window, "articleType", {
      value: 0,
      writable: false,
      configurable: false
    });
    $("#csdn-toolbar").css("border-bottom", "2px solid #4abf8a");
  } catch (err) {
    $("#csdn-toolbar").css("border-bottom", "2px solid #f56c6c");
  }
  // 修复无法复制
  $("pre").css("user-select", "auto");
  $("code").css("user-select", "auto");
  $("blockquote").css("user-select", "auto");
  // 拦截登录
  $(".hljs-button").removeClass("signin");
  $(".hljs-button").removeAttr("data-report-click");
  $(".hljs").removeAttr("onclick");
  $(".hljs-button").removeAttr("onclick");
  $(".hljs-button").css("font-size", "12px");
  // 点击复制
  const buttons = document.getElementsByClassName("hljs-button")
  Array.from(buttons).forEach(button => {
    button.onclick = copyCodeGreen
  })
  const alwaysDo = () => {
    if (window.csdn && csdn.copyright) {
      csdn.copyright.textData = ""
      csdn.copyright.htmlData = ""
    }
    $(".hljs-button").attr("data-title", "免登录复制");
    $(".hljs-button").css("background-color", "#409eff");
    $(".hljs-button.success").attr("data-title", "复制成功!");
    $(".hljs-button.success").css("background-color", "#4abf8a");

    window.requestAnimationFrame(alwaysDo);
  }
  window.requestAnimationFrame(alwaysDo);

};

export default UI;
