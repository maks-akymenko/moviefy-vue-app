export function truncate (str, maxLength) {
  return str.length > maxLength
    ? str.substring(0, maxLength) + '...'
    : str
}

export function formatDate (value) {
  if (!value) return ''
  return value.split('-')[0]
}
export function reverseDate (value) {
  if (!value) return ''
  return value
    .split('-')
    .sort((a, b) => a > b ? 1 : -1)
    .join('-')
}

export function convertTime (mins) {
  let h = Math.floor(mins / 60)
  let m = mins % 60
  h = h < 10 ? '0' + h : h
  m = m < 10 ? '0' + m : m
  return `${h}h ${m}m`
}

export function numberWithCommas (amount) {
  let parts = amount.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return `$${parts.join('.')}`
}

export function kebabCaseTransformer (str) {
  return str.split(' ').map(word => word.toLowerCase()).join('-')
}
