

function UI() {
  this.boards = []
}

UI.prototype.init = function () {
  this.boards = []
}

UI.prototype.create = function (index) {
  let plugin = document.createElement('div');
  plugin.id = "gauss-plugin"
  document.body.append(plugin)
  this.createBoard(index)
  this.createJoy(index)
  this.createDirect(index)
  this.createABXY(index)
}


UI.prototype.createBoard = function (index) {
  let board = document.createElement('div')
  board.className = `board board${index}`
  board.innerHTML = `
    <div class="board-container"></div>
  `
  document.querySelector("#gauss-plugin").append(board)
  this.boards.push(board)
  this.bindMove(board)

}

UI.prototype.bindMove = function (board) {
  let offsetX = 0;
  let offsetY = 0;
  let endX = 0;
  let endY = 0;
  board.onmousedown = function (e) {
    let rect = board.getBoundingClientRect()
    offsetX = e.clientX - rect.x
    offsetY = e.clientY - rect.y
    console.log(rect)
    board.onmousemove = function (e) {
      endX = e.clientX
      endY = e.clientY
      console.log(endX - offsetX)
      board.style.left = (endX - offsetX) + "px"
      board.style.top = (endY - offsetY) + "px"
    }
  }
  board.onmouseup = function (e) {
    board.onmousemove = null
  }
}

UI.prototype.destroy = function (index) {
  let board = document.querySelector(`.board${index}`)
  board.parentElement.removeChild(board);
}

UI.prototype.createJoy = function (index) {
  let joy0 = document.createElement('div');
  joy0.className = "joy joy0"
  joy0.innerHTML = `
  <div class="mask">
    <div class="stick stick0"></div>
  </div>
      `
  let joy1 = document.createElement('div');
  joy1.className = "joy joy1"
  joy1.innerHTML = `
<div class="mask">
  <div class="stick stick1"></div>
</div>
    `
  let container = document.querySelector(`.board${index}`).querySelector('.board-container');
  container.appendChild(joy0)
  container.appendChild(joy1)
}

UI.prototype.changeJoy = function (index, key, val) {
  let joy = document.querySelector(`.board${index}`).querySelector(`.joy${Math.floor(key / 2)}`)
  let stick = joy.querySelector('.stick')
  if (key == 0 || key == 2) {
    stick.style.left = 50 + val * 50 + "%"
  } else {
    stick.style.top = 50 + val * 50 + "%"
  }
}

UI.prototype.createDirect = function (index) {
  let direct = document.createElement('div')
  direct.className = "direct"
  direct.innerHTML = `
  <div class="direct-container">
    <div class="direct-12  arrow up css-icon icon-arrow-up"></div>
    <div class="direct-13 arrow down css-icon  icon-arrow-down"></div>
    <div class="direct-14 arrow left css-icon  icon-arrow-left"></div>
    <div class="direct-15 arrow right css-icon  icon-arrow-right"></div>
  </div>
  `
  let container = document.querySelector(`.board${index}`).querySelector('.board-container');
  container.appendChild(direct)
}

UI.prototype.createABXY = function (index) {
  let abxy = document.createElement('div')
  abxy.className = "abxy"
  abxy.innerHTML = `
  <div class="abxy-container">
    <div class="btn down  abxy-0 ">A</div>
    <div class="btn right  abxy-1">B</div>
    <div class="btn left  abxy-2">X</div>
    <div class="btn up  abxy-3">Y</div>
  </div>
  `
  let container = document.querySelector(`.board${index}`).querySelector('.board-container');
  container.appendChild(abxy)
}


UI.prototype.changeBtn = function (index, key, val) {

  // abxy
  if (key < 4) {
    let abxy = document.querySelector(`.board${index}`).querySelector(`.abxy`)
    let btn = abxy.querySelector(`.abxy-${key}`)
    if (val) {
      btn.classList.add('active')
    } else {
      btn.classList.remove('active')
    }

  }
  // direct
  else if (key > 11 && key < 16) {
    let direct = document.querySelector(`.board${index}`).querySelector(`.direct`)
    let btn = direct.querySelector(`.direct-${key}`)
    if (val) {
      btn.classList.add('active')
    } else {
      btn.classList.remove('active')
    }
  }

}

export default UI
