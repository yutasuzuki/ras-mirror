import { toBoolean } from '../src/toBoolean'

describe('toBoolean()のテスト', () => {
  it('"true"を渡すとbooleanに変換して返す', () => {
    expect(toBoolean('true')).toEqual(true)
  })
  it('"True"を渡すとbooleanに変換して返す', () => {
    expect(toBoolean('True')).toEqual(true)
  })
  it('"false"を渡すとbooleanに変換して返す', () => {
    expect(toBoolean('false')).toEqual(false)
  })
  it('"False"を渡すとbooleanに変換して返す', () => {
    expect(toBoolean('False')).toEqual(false)
  })
  it('trueを渡すとundefinedを返す', () => {
    expect(toBoolean(true)).toEqual(true)
  })
  it('falseを渡すとundefinedを返す', () => {
    expect(toBoolean(false)).toEqual(false)
  })
  it('"Hello"を渡すとundefinedを返す', () => {
    expect(toBoolean("Hello")).toEqual(undefined)
  })
})