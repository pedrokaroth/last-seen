class LastSeen {
  /**
   * @type {Date}
   */
  #lastSeen

  constructor(lastSeen) {
    this.#lastSeen = lastSeen
  }

  getLastSeen() {
    const secondsDiff = Math.abs(this.#lastSeen - new Date()) / 1000

    return this.formatLastSeen(secondsDiff)
  }

  formatLastSeen(seconds) {
    const formats = [
      { gte: 0, lte: 1, format: 'Online', apply: function () { return this.format } },
      { gte: 2, lte: 59, format: 'Last seen ## seconds ago', apply: function (s) { return this.format.replace('##', s) } },
      { gte: 60, lte: 3599, format: 'Last seen ## minutes ago', apply: function (s) { return this.format.replace('##', s / 60) } },
      { gte: 3600, lte: 86400 - 1, format: 'Last seen ## hour ago', apply: function (s) { return this.format.replace('##', (s / 3600).toFixed()) } },
      { gte: 86400, lte: 2592000 - 1, format: 'Last seen ## days ago', apply: function (s) { return this.format.replace('##', (s / 86400).toFixed()) } },
      { gte: 2592000, lte: 31104000, format: 'Last seen ## months ago', apply: function (s) { return this.format.replace('##', (s / 2592000).toFixed()) } },
      { gte: 31104000, lte: Infinity, format: 'Last seen ## years ago', apply: function (s) { return this.format.replace('##', (s / 31104000).toFixed()) } }
    ]

    const format = formats.find((f) => f.gte <= seconds && f.lte >= seconds)

    return format.apply(seconds)
  }
}

module.exports = LastSeen