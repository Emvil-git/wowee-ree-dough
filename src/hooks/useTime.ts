import { useCallback, useState, useEffect } from "react"
import { isoZToLocal } from "../utility_fx"

export const useTime = () => {
    const [currTime, setCurrTime] = useState(new Date())

    const refreshTime = useCallback(
        () => {
            setCurrTime(new Date())
        }, []
    )

    useEffect(() => {
        let timerId: ReturnType<typeof setTimeout>

        const schedMidnight = () => {
            const today = new Date()
            const tmr = new Date(today)

            tmr.setDate(today.getDate() + 1)
            tmr.setHours(0,0,0,0)

            const mstilMN = tmr.getTime() - today.getTime()

            timerId = setTimeout(() => {
                refreshTime()
            }, mstilMN)
        }

        schedMidnight()

        return () => {
            clearTimeout(timerId)
            window.removeEventListener('focus', refreshTime)
        }
    },[currTime, refreshTime])

    return {
        currTime,
        isoDate: currTime.toISOString().split('T')[0],
        isoDT:  currTime.toISOString(),
        isoLocal: isoZToLocal(currTime.toISOString())
    }
}