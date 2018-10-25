export function truncate (str, maxLength) {
  return str.length > maxLength
    ? str.substring(0, maxLength) + '...'
    : str
}

export function formatDate (value) {
  if (!value) return ''
  return value.split('-')[0]
}

export function formatRating (rate) {
  return rate * 10 + '%'
}