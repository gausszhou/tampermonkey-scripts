let dq = document.querySelector.bind(document)

function QiDian() {
  this.body = null
  this.novelName = ""
  this.init()
}

QiDian.prototype.init = function () {
  console.log("欢迎使用小说整治插件")
}

QiDian.prototype.mounted = function () {
  this.body = document.body
  this.qidian()
}

// 各个网站的策略
QiDian.prototype.qidian = function () {
  this.process()
}

QiDian.prototype.process = function () {
  this.processContent()
  this.processButton()
}

// 处理内容
QiDian.prototype.processContent = function () {
  this.novelName = dq(".book-info h1 em").textContent
}

// 添加搜索
QiDian.prototype.processButton = function () {
  const button = dq(".book-info h1 em")
  const href = "https://www.google.com/search?q=" + encodeURIComponent(this.novelName) + " site:uukanshu.com"
  button.addEventListener("click", () => {
    window.open(href)
  })
}

export default QiDian
