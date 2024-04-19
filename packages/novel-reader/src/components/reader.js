import { simplify } from "./translate";
const dq = document.querySelector.bind(document);
const dqs = document.querySelectorAll.bind(document);

const CLASSNAME_BODY = "novel-reader-body";
const CLASSNAME_BREAD = "novel-reader-bread";
const CLASSNAME_BREAD_SEPARATE = "novel-reader-bread-separate";

const CLASSNAME_CONTENT = "novel-reader-content";
const CLASSNAME_TITLE = "novel-reader-content-title";
const CLASSNAME_BOOK_MARK = "novel-reader-book-mark";

const CLASSNAME_BOTTOM_NAV = "novel-reader-bottom-nav";
const CLASSNAME_BOTTOM_SEPARATE = "novel-reader-bottom-separate";

function Reader() {
  this.init();
}

Reader.prototype.init = function () {
  console.log("[Novel Reader]", "欢迎使用小说整治插件");
};

Reader.prototype.mounted = function () {
  this.body = document.body;

  // create Element
  this.$breadNew = document.createElement("div");
  this.$breadNew.className = CLASSNAME_BREAD;
  this.$contentNew = document.createElement("div");
  this.$contentNew.className = CLASSNAME_CONTENT;
  this.$titleNew = document.createElement("div");
  this.$titleNew.className = CLASSNAME_TITLE;
  this.$navNew = document.createElement("div");
  this.$navNew.className = CLASSNAME_BOTTOM_NAV;
};

// 网站策略判定 判定入口
Reader.prototype.judge = function () {
  try {
    if (dq(".bread_728x90")) {
      this.kehuanNet();
      return false;
    }

    if (dq(".zhengwan_top")) {
      this.uukanshu();
      return false;
    }

    // if (dq("#tbox")) {
    //   this.ddxs();
    //   return false;
    // }

    if (dq(".page_chapter")) {
      this.shuquge();
      return false;
    }

    if (dq(".modbg")) {
      this.shuba();
      return false;
    }

    if (dq("#content.fonts_mesne")) {
      this.ptwxz();
      return false;
    }
    if (dq("#center_tip")) {
      this.e86book();
      return false;
    }

    if (dq(".header_wap.pc_none")) {
      this.taccx();
      return false;
    }
    if (dq("#chapterWarp")) {
      this.novel543();
      return false;
    }
    if (dq("#htmlContent")) {
      this.mc93();
      return false;
    }

    if (dq('#a_main > div.bdtop')) {
      this.asxs()
      return false;
    }

    this.biquge();
  } catch (error) {
    console.error("[Novel Reader] error:", error);
  }
};

// 各个网站的策略

Reader.prototype.kehuanNet = function () {
  this.body.classList.add("kehuan");
  this.$breadOld = dq("#container .topnav h2") || document.createElement('div');
  this.$titleOld = dq("#container > h1") || document.createElement('div');
  this.$contentOld = dq("#container .text") || document.createElement('div');
  this.$prev = dq(".next a:nth-child(1)");
  this.$menu = dq(".next a:nth-child(2)");
  this.$next = dq(".next a:nth-child(3)");
  this.nav_space = "";
  this.ads = [".ad_content"];
  this.process();
};

Reader.prototype.ddxs = function () {
  this.body.classList.add("ddxs");
  this.$breadOld = dq("#amain dl dt");
  this.$titleOld = dq("#amain dl dd h1");
  this.$contentOld = dq("#contents");
  this.$prev = dq("#footlink a:nth-child(1)");
  this.$menu = dq("#footlink a:nth-child(2)");
  this.$next = dq("#footlink a:nth-child(3)");
  this.nav_space = "";
  this.ads = [".ad_content"];
  this.process();
};

Reader.prototype.uukanshu = function () {
  this.body.classList.add("uukanshu");
  this.$breadOld = dq(".srcbox");
  this.$titleOld = dq(".h1title #timu");
  this.$contentOld = dq("#contentbox");
  this.$prev = dq(".fanye #prev");
  this.$menu = dq(".fanye #htmlmulu");
  this.$next = dq(".fanye #next");
  this.nav_space = "";
  this.ads = [".ad_content"];
  this.process();
};

Reader.prototype.shuquge = function () {
  this.body.classList.add("shuquge");
  this.$breadOld = dq(".wrap .path .p");
  this.$titleOld = dq(".content h1"); // title
  this.$contentOld = dq("#content");

  this.$prev = dq(".page_chapter li:nth-child(1) a");
  this.$menu = dq(".page_chapter li:nth-child(2) a");
  this.$next = dq(".page_chapter li:nth-child(3) a");
  this.nav_space = dq(".page_chapter li:nth-child(4) a");

  this.ads = [".header", "div.box_con > div.bookname div.lm", ".info > .link", ".footer"];
  this.process();
};

Reader.prototype.shuba = function () {
  this.body.classList.add("shuba");
  this.$breadOld = dq(".bread");
  this.$titleOld = dq("h1.hide720"); // title
  this.$contentOld = dq(".txtnav");

  this.$prev = dq(".page1 a:nth-child(1)");
  this.$menu = dq(".page1 a:nth-child(3)");
  this.$next = dq(".page1 a:nth-child(4)");
  this.$space1 = dq(".page1 a:nth-child(5)");

  this.ads = [".hide720"];
  this.process();
};

Reader.prototype.ptwxz = function () {
  this.body.classList.add("ptwxz");
  this.$breadOld = null;
  this.$titleOld = dq("#main #content h1"); // title
  this.$contentOld = dq("#main #content");

  this.$prev = dq(".toplink a:nth-child(1)");
  this.$menu = dq(".toplink a:nth-child(2)");
  this.$next = dq(".toplink a:nth-child(3)");
  this.$space1 = dq(".toplink a:nth-child(4)");
  this.$space2 = dq(".toplink a:nth-child(5)");

  this.ads = ["#footer", ".header", "#listtj", ".box_con + script + div"];
  this.process();
};

Reader.prototype.e86book = function () {
  this.body.classList.add("e86book");
  this.$breadOld = dq(".layout-tit");
  this.$titleOld = dq(".reader-main .title"); // title
  this.$contentOld = dq(".reader-main #content");

  this.$prev = dq(".section-opt a:nth-child(1)");
  this.$menu = dq(".section-opt a:nth-child(2)");
  this.$next = dq(".section-opt a:nth-child(3)");
  this.$space1 = dq(".section-opt a:nth-child(4)");
  this.$space2 = dq(".section-opt a:nth-child(5)");

  this.ads = ["#footer", ".header", "#listtj", ".box_con + script + div"];
  this.process();
};

Reader.prototype.taccx = function () {
  this.body.classList.add("taccx");
  this.$breadOld = dq("#read > div.book.reader > div.path.wap_none");
  this.$titleOld = dq("#read > div.book.reader > div.content > h1"); // title
  this.$contentOld = dq("#chaptercontent");

  this.$prev = dq("#pb_prev");
  this.$menu = dq("#pb_mulu");
  this.$next = dq("#pb_next");
  this.$space1 = null;
  this.$space2 = null;

  this.ads = [];
  this.process();
};

Reader.prototype.novel543 = function () {
  this.body.classList.add("novel543");
  this.$breadOld = dq("#chapterWarp > nav > ul");
  this.$titleOld = dq("#chapterWarp > div > h1"); // title
  this.$contentOld = dq("#chapterWarp > div > div");

  this.$prev = dq("#read > div > div.warp.my-3.foot-nav > a:nth-child(1)");
  this.$menu = dq("#read > div > div.warp.my-3.foot-nav > a:nth-child(3)");
  this.$next = dq("#read > div > div.warp.my-3.foot-nav > a:nth-child(5)");
  this.$space1 = null;
  this.$space2 = null;

  this.ads = ["#read > div.novel-reader-content > .gadBlock", "#read > div.novel-reader-content > .gadBlock"];
  this.process();
};

Reader.prototype.mc93 = function () {
  this.body.classList.add("93mc");
  this.$breadOld = dq("body > div.container.body-content.read-container > ol");
  this.$titleOld = dq("#content > div.page-header.text-center > h1"); // title

  this.$contentOld = dq("#htmlContent");

  this.$prev = dq("#linkPrev");
  this.$menu = dq("#linkIndex");
  this.$next = dq("#linkNext");
  this.$space1 = null;
  this.$space2 = null;

  this.ads = ["#read > div.novel-reader-content > .gadBlock", "#read > div.novel-reader-content > .gadBlock"];
  this.process();
};


Reader.prototype.asxs = function () {
  this.body.classList.add("asxs");
  this.$breadOld = dq("#amain > dl > dt");
  this.$titleOld = dq("#amain > dl > dd:nth-child(2) > h1"); // title

  this.$contentOld = dq("#contents");

  this.$prev = dq("#footlink > a:nth-child(1)");
  this.$menu = dq("#footlink > a:nth-child(2)");
  this.$next = dq("#footlink > a:nth-child(3)");
  this.$space1 = null;
  this.$space2 = null;

  this.ads = [];
  this.process();
};


Reader.prototype.biquge = function () {
  this.body.classList.add("biquge");
  this.$breadOld = dq(".con_top") || document.createElement('div');
  this.$titleOld = dq(".content_read .bookname h1")  ||  dq(".content_read .zhangjieming h1") || document.createElement('div');
  this.$contentOld = dq(".content_read #content") || document.createElement('div');

  this.$prev = dq(".bottem2 a:nth-child(1)") || dq("#content > div > a:nth-child(2)");
  this.$menu = dq(".bottem2 a:nth-child(2)") || dq("#content > div > a:nth-child(3)");
  this.$next = dq(".bottem2 a:nth-child(3)") || dq("#content > div > a:nth-child(4)");
  this.$space1 = null;
  this.$space2 = null;

  this.ads = ["#footer", ".header", "#listtj", ".box_con + script + div"];
  this.process();
};

// 开始处理 入口
Reader.prototype.process = function () {
  if (this.$contentOld) {
    console.log("[Novel Reader]", "获取内容成功");
    this.processRead();
    this.body.classList.add(CLASSNAME_BODY);
  } else {
    console.log("[Novel Reader]", "未获取到内容");
  }

  this.processRemoveAD();
};

// 处理页面
Reader.prototype.processRead = function () {
  this.processReadBread();
  this.processReadContent();
  this.processReadNav();
  this.body.innerHTML = "";
  this.body.appendChild(this.$breadNew);
  this.body.appendChild(this.$contentNew);
  this.body.appendChild(this.$navNew);
  // 内容后处理
  const $pList = document.querySelectorAll(`.${CLASSNAME_CONTENT} > p`);
  $pList.forEach((p) => {
    p.innerHTML = p.innerHTML.trim();
    p.innerHTML = p.innerHTML.replace(/\s/g, "");
  });
};

// 去除广告
Reader.prototype.processRemoveAD = function () {
  if (this.ads.length) {
    console.log("[Novel Reader]", "开始去除广告");
    this.ads.forEach((selector) => {
      let ads = dqs(selector);
      if (ads && ads.length) {
        ads.forEach((ad) => {
          console.log("[Novel Reader] remove ad", ad);
          ad.parentElement.removeChild(ad);
        });
      }
    });
    console.log("[Novel Reader]", "成功去除广告");
  }
};

// 处理面包屑
Reader.prototype.processReadBread = function () {
  this.breadCrumbs = this.$breadOld && this.$breadOld.getElementsByTagName("a");
  if (this.breadCrumbs && this.breadCrumbs.length) {
    Array.from(this.breadCrumbs).forEach((item, index) => {
      if (index < 3) this.$breadNew.appendChild(item);
      if (index < 2) {
        let separate = document.createElement("span");
        separate.classList.add(CLASSNAME_BREAD_SEPARATE);
        separate.innerText = ">";
        this.$breadNew.appendChild(separate);
      }
    });
  }
};

function nextPosition(position) {
  const list = ['left', 'center', 'right'];
  const index = list.findIndex(item=> item === position);
  let nextIndex = 0;
  if (index > -1) {
    nextIndex = (index  + 1) % list.length
  }
  return list[nextIndex]
}
function getPositonLabel(position) {
  const list = ['left', 'center', 'right'];
  const index = list.findIndex(item=> item === position);
  return ['<', '-', '>'][index]
}

// 处理正文

Reader.prototype.processReadContent = function () {
  this.$titleNew.innerHTML = this.$titleOld?.innerHTML;
  let txt = this.$titleNew.outerHTML + this.$contentOld.innerHTML;
  const txtWithAds = removeTextADS(txt);
  const txtSimplify = simplify(txtWithAds);
  this.$contentNew.innerHTML = txtSimplify;
  this.$contentNew.querySelector("h1")?.remove();
  this.$contentNew.querySelector("table")?.remove();
  Array.from(this.$contentNew.querySelectorAll("a")).forEach((el) => el.remove());
  
  const $mark = document.createElement("div");
  const position = localStorage.getItem('novel-reader-position') || 'center';
  this.body.classList.add(position)
  $mark.innerHTML = getPositonLabel(position)
  $mark.addEventListener('click', () => {
    const position = localStorage.getItem('novel-reader-position') || 'center';
    this.body.classList.remove(position)
    const next = nextPosition(position);
    this.body.classList.add(next)
    $mark.innerHTML = getPositonLabel(next)
    localStorage.setItem('novel-reader-position', next)
  })
  $mark.classList.add(CLASSNAME_BOOK_MARK);
  this.$contentNew.appendChild($mark);
};

// 去除正文中的广告
function removeTextADS(txt) {
  let ads = [
    /&nbsp;/g,
    /https?(.+)html/g,
    /wa?(.+)com/g,
    /八一中文网(.+)com/g,
    /<h1>.+<h1>/g,
    /请记住(.+)域名：/g,
    "【推荐下，换源app追书真的好用，这里下载大家去快可以试试吧。】",
    "【认识十年的老书友给我推荐的追书app，换源app！真特么好用，开车、睡前都靠这个朗读听书打发时间，这里可以下载】",
    "【讲真，最近一直用换源app看书追更，换源切换，朗读音色多，安卓苹果均可。】",
    "【话说，目前朗读听书最好用的app，换源app，安装最新版。】"
  ];
  ads.forEach((item) => {
    txt = txt.replace(item, "");
  });
  return txt;
}

// 处理底部导航
Reader.prototype.processReadNav = function () {
  if (this.$prev) {
    this.$navNew.appendChild(this.$prev);
  } else {
    this.$navNew.innerHTML += "<span>上一张</span>";
  }

  this.processReadNavSeparate();

  if (this.$menu) {
    this.$navNew.appendChild(this.$menu);
  } else {
    this.$navNew.innerHTML += "<span>目录</span>";
  }
  this.$navNew.textContent 
  this.processReadNavSeparate();
  if (this.$next) {
    this.$navNew.appendChild(this.$next);
  } else {
    this.$navNew.innerHTML += "<span>下一章</span>";
  }
  this.processReadNavSeparate();

  if (this.$space1) {
    this.$navNew.appendChild(this.$space1);
  }

  if (this.$space2) {
    this.$navNew.appendChild(this.$space2);
  }
};

// 处理底部分割线
Reader.prototype.processReadNavSeparate = function () {
  let separate = document.createElement("div");
  separate.classList.add(CLASSNAME_BOTTOM_SEPARATE);
  this.$navNew.appendChild(separate);
};

export default Reader;
