# Ra's Mirror

A legendary mirror said to 'reflect the truth'. It has the effect of revealing the true identity of value that has been disguised as a string, or of restoring what has been transformed into a string.

## Usage

```ts
// boolean
rasMirror<boolean>("true") // true

// Date
rasMirror<Date>("2022-12-31 12:34:10") // 2022-12-31T03:34:10.000Z

// Number
rasMirror<number>("12.345") // 12.345

// String
rasMirror("foo") // "foo"

// null
rasMirror("null") // null

// undefined
rasMirror("undefined") // undefined

// NaN
rasMirror("NaN") // NaN
```

### Array

```ts

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

type ArrayType = {
  id: number
  name: string
}[]

const result = rasMirror<ArrayType>(stringArray)
/* [ { id: 1, name: 'foo' }, { id: 2, name: 'bar' } ] */
```

### Object

```ts
type jsonType = {
  result: boolean
  count: number
  items: itemType[]
}

type itemType = {
  id: number
  name: string
  create_at: Date
  delete_at?: Date 
}

const stringJson = { 
  "result": "false",
  "count": "2",
  "items": [
    {
      "id": "1",
      "name": "foo",
      "create_at": "2022/12/31 12:34:50",
      "delete_at": "undefined"
    },
    {
      "id": "2",
      "name": "bar",
      "create_at": "2023-1-1 1:23:45",
      "delete_at": "undefined"
    }
  ]
}

const result = rasMirror<jsonType>(stringJson)
/* { 
  result: false,
  count: 2,
  items: [
    {
      id: 1,
      name: "foo",
      create_at: new Date("2022/12/31 12:34:50"),
      delete_at: undefined
    },
    {
      id: 2,
      name: "bar",
      create_at: new Date("2023-1-1 1:23:45"),
      delete_at: undefined
    }
  ]
}*/

```


