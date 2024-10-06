function UI() {
  this.init();
}

UI.prototype.init = function () {
  console.log("[info] 欢迎使用 [斗鱼绿化] 插件");
};

UI.prototype.mounted = function () {
  this.body = document.body;
};

UI.prototype.process = function () {
  this.body.classList.add("douyu");
};

export default UI;
