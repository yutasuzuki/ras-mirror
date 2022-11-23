import { toObject } from '../src/toObject'

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

const stringArray = [
  {
    "id": "1",
    "name": "foo",
    status: "false"
  },
  {
    "id": "2",
    "name": "bar",
    status: true
  }
]

describe('toObject()のテスト', () => {
  it('valueが文字列化されたオブジェクトを変換する', () => {
    const res = toObject<jsonType>(stringJson)
    expect(res).toEqual({ 
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
    })
  })
  it('valueが文字列化された配列を変換する', () => {
    const res = toObject<itemType[]>(stringArray)
    expect(res).toEqual([
      {
        id: 1,
        name: "foo",
        status: false
      },
      {
        id: 2,
        name: "bar",
        status: true
      }
    ])
  })
})