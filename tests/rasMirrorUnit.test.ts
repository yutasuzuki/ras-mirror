import { rasMirrorUnit } from '../src/rasMirrorUnit'

describe('rasMirrorUnit()のテスト', () => {
  it('Numberを入れたらNumberを返す', () => {
    expect(rasMirrorUnit(1234.1234)).toEqual(1234.1234)
  })
  it('trueを入れたらtrueを返す', () => {
    expect(rasMirrorUnit(true)).toEqual(true)
  })
  it('Dateを入れたらDateを返す', () => {
    expect(rasMirrorUnit(new Date())).toEqual(expect.anything())
  })
})