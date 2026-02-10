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

export const isoZToLocal = (isoString: string):string => {
  const zDT = DateTime.fromISO(isoString)

  return zDT.toLocal().toISO() || '' // there's probably a better way to do this
}

export const isoGetMonth = (isoString: string) => {
  const dateObj = new Date(isoString)

  return dateObj.toLocaleString('en-gb', {month: "long"})
}

export const isoGetYear = (isoString: string)  => {
  const dateObj = new Date(isoString)

  return dateObj.toLocaleString('en-gb', {year: "numeric"})
}

export const getCurrMonth = () => {
  const currDate = new Date()

  return currDate.toLocaleString('en-gb', {month: "long"})
}


export const getCurrYear = () => {
  const currDate = new Date()

  return currDate.toLocaleString('en-gb', {year: "numeric"})
}