import { toNumber } from '../src/toNumber'

describe('toNumber()のテスト', () => {
  it('"1"を入れたら1を返す', () => {
    expect(toNumber("1")).toEqual(1)
  })
  it('"-1"を入れたら-1を返す', () => {
    expect(toNumber("-1")).toEqual(-1)
  })
  it('"-1.1"を入れたら-1.1を返す', () => {
    expect(toNumber("-1.1")).toEqual(-1.1)
  })
  it('"1.1.1"を入れたらundefinedを返す', () => {
    expect(toNumber("1.1.1")).toEqual(undefined)
  })
})