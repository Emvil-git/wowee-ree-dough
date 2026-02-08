import { DateTime } from "luxon"

export const getDateNOW = (): string => {
    return new Date().toISOString().split('T')[0]
}

export const getIdFromDateNOWNOW = (): bigint => {
  return BigInt(new Date().toISOString().replace(/\D/g, ''))
}

export const getFullDateTime = (): string => {
  return new Date().toISOString()
}

export const isoZToLocal = (isoString: string) => {
  const zDT = DateTime.fromISO(isoString)

  return zDT.toLocal().toISO()
}