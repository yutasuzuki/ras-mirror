import { toDate } from '../src/toDate'

describe('toDate()のテスト', () => {
  it('"202211"を入れてDateで返す', () => {
    expect(toDate("202211")).toEqual(new Date('202211'))
  })
  it('"2022/1/1"を入れてDateで返す', () => {
    expect(toDate("2022/1/1")).toEqual(new Date('2022/1/1'))
  })
  it('"2022/1/1"を入れてDateで返す', () => {
    expect(toDate("2022/1/1 12:00:00")).toEqual(new Date('2022/1/1 12:00:00'))
  })
  it('無効な時間を入れてundefinedで返す', () => {
    expect(toDate("2022/1/1 432:00:00")).toEqual(undefined)
  })
  it('時間のみを入れてundefinedで返す', () => {
    expect(toDate("22:00:00")).toEqual(undefined)
  })
  it('Dateを入れてDateで返す', () => {
    expect(toDate(new Date('2022/1/1'))).toEqual(new Date('2022/1/1'))
  })
})