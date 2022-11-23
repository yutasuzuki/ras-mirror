import { rasMirrorUnit } from './rasMirrorUnit'
import { toObject } from './toObject'

type rasMirror = <T>(value: string | object) => T 

export const rasMirror: rasMirror = <T>(value: string | object) => {
  if (typeof value === 'object') {
    return toObject<T>(value)
  }
  try {
    const result = JSON.parse(value)
    if (typeof result === 'number' || typeof result === 'boolean') return result as T
    return toObject<T>(result)
  } catch (error) {
    return rasMirrorUnit<T>(value)
  }
}