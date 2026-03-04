import { DateTime, type DateTimeUnit } from "luxon"
import { type TransactionType } from "./types/transactionType"
import type { FilterType } from "./types/utilTypes"

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

export const filterToLuxon = (filt: FilterType) :DateTimeUnit => {
  switch (filt) {
    case "daily":
      return "day"
    case "monthly":
      return "month"
    case "weekly":
      return "week"
    case "yearly":
      return "year"
    default:
      return "day"
  }
}

export const txFilter = (tsx: TransactionType[], refDate: DateTime, filtMode: FilterType ) => { // maybe I change my mind and use this universally
  const lxMode = filterToLuxon(filtMode)

  if (filtMode !== "all") {
    return tsx.filter((tx) => {
      const txDate = DateTime.fromISO(tx.date)

      return txDate.hasSame(refDate, lxMode)
    })  
  } else {
    return tsx
  }

  
}