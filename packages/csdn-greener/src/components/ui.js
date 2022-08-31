let dq = document.querySelector.bind(document);

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
  if (window.location.href.includes("category")) {
    this.body.classList.add("category");
  }
  this.blog_content = dq("#article_content");
  if (this.blog_content) {
    this.blog_content.classList.add("markdown-body");
  }

  this.ads = [".csdn-side-toolbar", "#asideHotArticle", "#asideArchive"];
  this.process();
  this.processCSDN();
};

UI.prototype.process = function () {
  this.processRemoveAD();
  this.mode = "home";
  if (this.blog_content) {
    this.mode = "article";
  } else {
    this.mode = "menu";
  }
  this.body.classList.add(this.mode);
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

UI.prototype.processCSDN = function () {
  window.onload = function () {
    // 去除剪贴板劫持
    csdn.copyright && (csdn.copyright.textData = "");
    try {
      Object.defineProperty(window, "articleType", {
        value: 0,
        writable: false,
        configurable: false
      });
      $("#csdn-toolbar").css("border-bottom", "2px solid #409eff");
    } catch (err) {}
    // 修复无法复制
    $("pre").css("user-select", "auto");
    $("code").css("user-select", "auto");
    $("blockquote").css("user-select", "auto");
    // 免登录复制
    $(".hljs-button").removeClass("signin");
    $(".hljs-button").addClass("copy-button");
    $(".hljs-button").attr("onclick", "hljs.copyCode(event)");
    $(".hljs-button").attr("data-title", "免登录复制");
    setInterval(() => {
      $(".hljs-button").attr("data-title", "免登录复制");
      $(".passport-login-container").remove();
    }, 1000 / 60);
  };
};

export default UI;
