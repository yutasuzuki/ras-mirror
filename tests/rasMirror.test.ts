import { rasMirror } from '../src/rasMirror'

const stringJson = { 
  "result": "false",
  "count": "2",
  "items": [
    {
      "id": "1",
      "name": "foo",
      "create_at": "2022/12/31 12:34:50",
      "delete_at": "null"
    },
    {
      "id": "2",
      "name": "bar",
      "create_at": "2023-1-1 1:23:45",
      "delete_at": "null"
    }
  ]
}
type itemType = {
  id: number
  name: string
  status: boolean
}

type jsonType = {
  result: boolean
  count: number
  items: Omit<itemType, 'status'>[]
}

const result = { 
  result: false,
  count: 2,
  items: [
    {
      id: 1,
      name: "foo",
      create_at: new Date("2022/12/31 12:34:50"),
      delete_at: null
    },
    {
      id: 2,
      name: "bar",
      create_at: new Date("2023-1-1 1:23:45"),
      delete_at: null
    }
  ]
}

describe('rasMirror()のテスト', () => {
  it('valueが文字列化されたオブジェクトを変換する', () => {
    expect(rasMirror<jsonType>(stringJson)).toEqual(result)
  })
  it('文字列のbooleanを入れてもBooleanを返す', () => {
    expect(rasMirror(`true`)).toEqual(true)
  })
  it('文字列のnumberを入れてもnumberを返す', () => {
    expect(rasMirror('12')).toEqual(12)
  })
  it('文字列化したオブジェクトを変換して返す', () => {
    expect(rasMirror(JSON.stringify(stringJson))).toEqual(result)
  })
  it('"Hello world"を入れたら"Hello world"を返す', () => {
    expect(rasMirror("Hello world")).toEqual("Hello world")
  })
  it('"undefined"を入れたらundefinedを返す', () => {
    expect(rasMirror("undefined")).toEqual(undefined)
  })
  it('"Null"を入れたらnullを返す', () => {
    expect(rasMirror("Null")).toEqual(null)
  })
  it('"NaN"を入れたらNaNを返す', () => {
    expect(rasMirror("NaN")).toEqual(NaN)
  })
})