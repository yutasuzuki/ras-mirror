type toString = (value: string) => typeof NaN | null | undefined | string
export const toString: toString = (value) => {
  const str = value.toLowerCase()
  if (str === 'nan') return NaN
  if (str === 'null') return null
  if (str === 'undefined') return undefined
  return value
}
