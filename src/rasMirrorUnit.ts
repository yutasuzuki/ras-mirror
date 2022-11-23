import { toBoolean } from './toBoolean'
import { toNumber } from './toNumber'
import { toDate } from './toDate'
import { toString } from './toString'

type rasMirrorUnit = <T>(value: any) => T

export const rasMirrorUnit: rasMirrorUnit = (value) => {
  if (typeof value === 'number') return value
  if (typeof value === 'boolean') return value
  if (typeof value === 'object') {
    if (!isNaN(value.getTime())) return value
  }
  const bool = toBoolean(value)
  if (typeof bool === 'boolean') return bool
  return toDate(value) || toNumber(value)|| toString(value)
}