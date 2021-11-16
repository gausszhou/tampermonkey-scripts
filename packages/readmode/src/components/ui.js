let dq = document.querySelector.bind(document);

function UI() {
  this.init();
}

UI.prototype.init = function () {
  this.new_title_el = document.createElement("div");
  this.new_title_el.className = "_content_title";
  this.new_content_el = document.createElement("div");
  this.new_content_el.className = "_content";
  this.new_nav_el = document.createElement("div");
  this.new_nav_el.className = "_content_nav";
};

UI.prototype.mounted = function () {
  this.body = document.body;
};

UI.prototype.processRemoveAD = function () {
  if (this.ads.length) {
    console.log(this.ads.length);
    this.ads.forEach((selector) => {
      let ad = dq(selector);
      console.log(ad);
      if (ad) ad.parentElement.removeChild(ad);
    });
  }
};

UI.prototype.processRead = function () {
  this.new_title_el.innerHTML = this.old_title_el.innerHTML;
  this.new_content_el.innerHTML =
    this.new_title_el.outerHTML + this.old_content_el.innerHTML;
  if (this.nav_prev) {
    this.new_nav_el.appendChild(this.nav_prev);
  } else {
    this.new_nav_el.innerHTML += "<span>上一张</span>";
  }

  if (this.nav_menu) {
    this.new_nav_el.appendChild(this.nav_menu);
  } else {
    this.new_nav_el.innerHTML += "<span>目录</span>";
  }

  if (this.nav_next) {
    this.new_nav_el.appendChild(this.nav_next);
  } else {
    this.new_nav_el.innerHTML += "<span>下一张</span>";
  }

  this.body.innerHTML = "";
  this.body.appendChild(this.new_content_el);
  this.body.appendChild(this.new_nav_el);
  let p_list = document.querySelectorAll("._content > p");
  p_list.forEach((p) => {
    p.innerHTML = p.innerHTML.trim();
  });
};

UI.prototype.processMenu = function () {
  this.new_menu_el = document.createElement("div");
  this.new_menu_el.classList.add("_menu_content");
  this.new_menu_el.innerHTML = this.body.innerHTML;
  this.body.innerHTML = "";
  this.body.appendChild(this.new_menu_el);
};

UI.prototype.process = function () {
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

UI.prototype.uukanshu = function () {
  this.body.classList.add("uukanshu");
  this.old_title_el = dq(".h1title #timu");
  this.old_content_el = dq("#contentbox");
  this.nav_prev = dq(".fanye #prev");
  this.nav_menu = dq(".fanye #htmlmulu");
  this.nav_next = dq(".fanye #next");
  this.ads = [".ad_content"];
  this.process();
};

UI.prototype.shuquge = function () {
  this.body.classList.add("shuquge");
  this.old_title_el = dq(".content h1"); // title
  this.old_content_el = dq("#content");
  this.old_nav_el = dq(".page_chapter ul"); // btns
  this.nav_prev = dq(".page_chapter li:nth-child(1) a");
  this.nav_menu = dq(".page_chapter li:nth-child(2) a");
  this.nav_next = dq(".page_chapter li:nth-child(3) a");
  this.ads = [
    ".ywtop",
    ".header",
    "div.box_con > div.bookname div.lm",
    ".info > .link",
    ".footer",
  ];
  this.process();
};

UI.prototype.www81zw = function () {
  this.body.classList.add("www81zw");
  this.old_title_el = dq(".content_read .bookname h1"); // title
  this.old_content_el = dq(".content_read #content");
  this.old_nav_el = dq(".page_chapter ul"); // btns
  this.nav_prev = dq(".bottem2 a:nth-child(1)");
  this.nav_menu = dq(".bottem2 a:nth-child(2)");
  this.nav_next = dq(".bottem2 a:nth-child(3)");
  this.ads = [
    ".ywtop",
    "#footer",
    ".header",
    "#listtj",
    ".box_con + script + div",
  ];
  this.process();
};

export default UI;
