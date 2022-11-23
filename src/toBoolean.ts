type toBoolean = (value: string | boolean) => boolean | undefined

export const toBoolean: toBoolean = (value) => {
  if (typeof value === 'boolean') return value
  const str = value.toLowerCase()
  if (str === 'true') {
    return true
  } else if (str === 'false') {
    return false
  }
  return undefined
}