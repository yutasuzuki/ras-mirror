import { rasMirror } from '../src/rasMirror'

const stringJson = { 
  "result": "false",
  "count": 2,
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

const stringArray = [
  {
    "id": 1,
    "name": "foo"
  },
  {
    "id": "2",
    "name": "bar"
  }
]


type jsonType = {
  result: boolean
  count: number
  items: {
    id: number
    name: string
  }[]
}

type ArrayType = {
  id: number
  name: string
}[]

console.log(rasMirror<jsonType>(stringJson))
console.log(rasMirror<ArrayType>(stringArray))
