import { rasMirrorUnit } from './rasMirrorUnit'

type toObject = <T>(obj: any) => T

const isObject = (value: any) =>  {
  return value !== null && typeof value === 'object'
}

export const toObject: toObject = (obj) => {
  let item: any = {}
  if (Array.isArray(obj)) {
    item = obj.map((value: any) => toObject(value))
  }
  for(let name in obj){
    if (Array.isArray(obj[name])) {
      item[name] = obj[name].map((value: any) => toObject(value))
    } else if(isObject(obj[name])){
      item[name] = toObject(obj[name])
    } else {
      item[name] = rasMirrorUnit(obj[name])
    }
  }
  return item
}
