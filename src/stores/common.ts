import { makeAutoObservable, observable } from 'mobx'

class CommonStore {
  title = ''
  theme = 'default'
  testObj = {
    count: 1,
    add: () => {
      this.testObj.count++
    },
    log: () => {
      console.log(this.theme)
    }
  }

  constructor() {
    makeAutoObservable(this)
  }

  setTheme(theme: string) {
    this.theme = theme
  }

  setTitle(title: string) {
    this.title = title
  }

  update(data: Partial<CommonStore>) {
    Object.assign(this, data)
  }
}

export default new CommonStore()
