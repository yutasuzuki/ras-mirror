type toDate = (value: string | Date) => Date | undefined

const regex = /\d{4}\d{1,2}\d{1,2}|\d{4}\/\d{1,2}\/\d{1,2}|\d{4}年\d{1,2}月\d{1,2}|\d{4}-\d{1,2}-\d{1,2}/

export const toDate: toDate = (value) => {
  if (typeof value === 'object') {
    if (!isNaN(value.getTime())) {
      return value
    }
  } else {
    const p = value.match(regex)
    if (p) {
      const date = new Date(value)
      if (!isNaN(date.getTime())) {
        return date
      }
    }
  }
  return undefined
}