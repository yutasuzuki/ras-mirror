type toNumber = (value: string) => number | undefined
export const toNumber: toNumber = (value) => {
  const dotCount = (value.match(/\./g) || []).length
  if (dotCount < 2) { 
    const num = parseFloat(value)
    if (!isNaN(num)) {
      return num
    }
  }
  return undefined
}