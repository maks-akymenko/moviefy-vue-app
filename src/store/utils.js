
import { schema, normalize } from 'normalizr'

export function normalizeArray (array) {
  const arrayItem = new schema.Entity('map')
  return normalize({ array }, { array: [arrayItem] })
}