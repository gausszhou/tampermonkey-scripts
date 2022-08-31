let dq = document.querySelector.bind(document);
let dqa = document.querySelectorAll.bind(document);

function UI() {
  this.init();
}

UI.prototype.init = function () {
  console.log("[info] 欢迎使用 [Bilibili 绿化] 插件");
};

UI.prototype.mounted = function () {
  this.body = document.body;
};

UI.prototype.bilibili = function () {
  this.body.classList.add("bilibili");
};

export default UI;
