class SauceThemeSwitcher {
  constructor(fractal) {
    const { events } = fractal

    this.events = events
    this.storage = window.localStorage
    this.storageKey = 'sauce-theme'

    this.theme = this.storage.getItem(this.storageKey)

    this.events.on('main-content-loaded', () => {
      this.preview = document.querySelector('.Preview-iframe')
    })
    this.events.trigger('main-content-loaded')

    this.select = document.querySelector('.sauce-theme-switcher__select')

    this.select.addEventListener('change', () => this.setTheme())

    if (this.theme) {
      this.select.value = this.theme
      return
    }

    this.setTheme()
  }

  setTheme() {
    this.storage.setItem(this.storageKey, this.select.value)
    // eslint-disable-next-line no-self-assign
    this.preview.src = this.preview.src
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-new
  new SauceThemeSwitcher(window.fractal)
})
