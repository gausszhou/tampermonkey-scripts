import "./assets/styles/index.scss"
import Controller from './components/controller'
import UI from './components/ui'

window.onload = () => {
  const controller = new Controller()
  const ui = new UI()
  controller.init()
  ui.init()
  controller.onConnect = (id) => {
    ui.create(id)
  }
  controller.onDisconnect = (id) => {
    ui.destroy(id)
  }
  controller.onChangeJoy = (index, key, val) => {
    ui.changeJoy(index, key, val)
  }
  controller.onChangeBtn = (index, key, val) => {
    ui.changeBtn(index, key, val)
  }
  document.onkeydown = (e) => {
    console.log(e.keyCode);
  }
}