import { toString } from '../src/toString'

describe('toString()のテスト', () => {
  it('"Hello world"を入れたら"Hello world"を返す', () => {
    expect(toString("Hello world")).toEqual("Hello world")
  })
  it('"undefined"を入れたらundefinedを返す', () => {
    expect(toString("undefined")).toEqual(undefined)
  })
  it('"Null"を入れたらnullを返す', () => {
    expect(toString("Null")).toEqual(null)
  })
  it('"NaN"を入れたらNaNを返す', () => {
    expect(toString("NaN")).toEqual(NaN)
  })
})