
function obj2arr(obj) {
  let arr = []
  Object.keys(obj).map((objk, objindex) => {
    arr.push(obj[objk])
  })
  return arr;
}

//模拟键盘触发事件方法
function triggerKeyDownEvent(el, keyCode) {
  var eventObj = document.createEventObject ?
    document.createEventObject() : document.createEvent("Events");

  if (eventObj.initEvent) {
    eventObj.initEvent("keydown", true, true);
  }

  eventObj.keyCode = keyCode;
  eventObj.which = keyCode;

  el.dispatchEvent ? el.dispatchEvent(eventObj) : el.fireEvent("onkeydown", eventObj);
}
function triggerKeyUpEvent(el, keyCode) {
  var eventObj = document.createEventObject ?
    document.createEventObject() : document.createEvent("Events");

  if (eventObj.initEvent) {
    eventObj.initEvent("keyup", true, true);
  }

  eventObj.keyCode = keyCode;
  eventObj.which = keyCode;

  el.dispatchEvent ? el.dispatchEvent(eventObj) : el.fireEvent("onkeydown", eventObj);
}


function Controller() {
  this.gamepads = [];
  this.connectState = 0; // 0 wait 1 connecting 2 disconnect
}

Controller.prototype.init = function () {
  window.addEventListener("gamepadconnected", (e) => {
    let gamepad = e.gamepad;
    console.log("%d 号控制器 %s 已连接", gamepad.index, gamepad.id);
    this.onConnect && this.onConnect(gamepad.index)
    this.connectState = 1;
    let gamepads = obj2arr(navigator.getGamepads());
    this.store(gamepads)
    this.update()
  });
  window.addEventListener("gamepaddisconnected", (e) => {
    let gamepad = e.gamepad;
    console.log("%d号控制器 %s 已断开", gamepad.index, gamepad.id);
    this.onDisconnect && this.onDisconnect(gamepad.index)
    this.gamepads.splice(gamepad.index, 1)
    if (this.gamepads.length == 0) {
      this.connectState = 2;
      console.log("所有控制器都已经断开")
    }
  });
}

Controller.prototype.update = function () {
  this.check();
  let updateReq;
  if (this.connectState == 2) {
    window.cancelAnimationFrame(updateReq)
  } else {
    updateReq = window.requestAnimationFrame(this.update.bind(this))
  }
}

Controller.prototype.store = function (gamepads) {
  // 遍历所有控制器
  gamepads.forEach((item, index) => {
    if (item) {
      let gp = {
        axes: [],
        buttons: []
      };
      item.axes.forEach((val, key) => {
        gp.axes.push(val)
      })
      item.buttons.forEach((val, key) => {
        gp.buttons.push(val.value)
      })
      this.gamepads.push(gp)
    }
  })
}

Controller.prototype.check = function () {
  let gamepads = obj2arr(navigator.getGamepads());
  gamepads.forEach((item, index) => {
    if (item) {
      item.axes.forEach((val, key) => {
        if (val != this.gamepads[index].axes[key]) {
          this.gamepads[index].axes[key] = val
          this.emit('axes', index, key, val)
        }
      })
      item.buttons.forEach((val, key) => {
        if (val.value != this.gamepads[index].buttons[key]) {
          this.gamepads[index].buttons[key] = val.value
          this.emit('buttons', index, key, val.value)
        }
      })
    }
  })

}

Controller.prototype.emit = function (event, index, key, val) {
  if (event == 'axes') {
    this.onChangeJoy && this.onChangeJoy(index, key, val)
  } else {
    this.onChangeBtn && this.onChangeBtn(index, key, val)
    // 12
    let arr = [0, 1, 2, 3, 12, 13, 14, 15]
    let target = [13, 27, 18, 17, 38, 40, 37, 39]
    let findIndex = arr.findIndex((item) => item == key)
    // 38 
    if (findIndex > -1) {
      val ? triggerKeyDownEvent(document, target[findIndex]) : triggerKeyUpEvent(document, target[findIndex])
    }
  }
}

export default Controller