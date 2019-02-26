export async function sum (a, b) {
  return Promise.resolve(a + b)
}

export default class Multiple {
  static divider = '*'
  static log = (...args) => {
    console.log(...args)
  }
  constructor () {
    this.a = 0
    this.b = 0
  }
  setA (a) {
    this.a = Number(a)
  }
  setB (b) {
    this.b = Number(b)
  }
  render () {
    const { a, b } = this
    const divider = this.constructor.divider
    const text = `${a} ${divider} ${b} = ${a * b}`
    this.constructor.log(text)
    return text
  }
}
