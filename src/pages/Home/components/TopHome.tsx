import ProgBar from "../../../components/progBar/ProgBar"
import { useTime } from "../../../hooks/useTime"
import { getCurrMonth, getCurrYear, isoToDate } from "../../../utility_fx"
import useExStore from "../../../store/expenses"
import React, { useContext } from "react"
import HomeContext from "../homecontext"
import { useMemo } from "react"
import { txFilter } from "../../../utility_fx"
import { DateTime } from "luxon"
import type { FilterType } from "../../../types/utilTypes"
import useAppStateStore from "../../../store/appStates"

export const TopHome = () => {

    const filterOptions: Record<FilterType, string> = {
        daily:"Daily",
        weekly:"Weekly",
        monthly:"Monthly",
        yearly:"Yearly",
        all:"All Time"
    }

    const {isoLocal} = useTime()

    const transactions = useExStore((state => state.transactions))
    const setModalMode = useAppStateStore((state) => state.setModalMode)
    const setModalShow = useAppStateStore((state) => state.setModalShow)
    const modalShow = useAppStateStore((state) => state.modalShow) //YUHH
    const filterMode = useAppStateStore((state) => state.filterMode)
    const setFilterMode = useAppStateStore((state) => state.setFilterMode)

    // const {filterMode, setFilterMode} = useContext(HomeContext)

    const filteredTx = useMemo(() => {
            return txFilter(transactions, DateTime.now(), filterMode)
        }, [transactions, filterMode])

    const total = useMemo(() => {
        return filteredTx.length ? filteredTx.map(
            (tx) => tx.value
        ).reduce(
            (acc, val) => acc + val
        ) : 0
    }, [filteredTx])

    const handleFilterSelect = (ev:React.ChangeEvent<HTMLSelectElement>) => {
        setFilterMode(ev.target.value as FilterType)
    }

    const handleTheseNuts = (ev:React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault()

        setModalMode("budget")
        if (!modalShow) {
            setModalShow(true)
        }
    }

    const totalLabeller = () => {
        switch (filterMode){
            case "all":
                return "Total recorded spending"
            case "daily":
                return "Today's spending"
            case "weekly":
                return "This week's spending"
            case "monthly":
                return "This month's spending"
            case "yearly":
                return "This year's spending"
        }
    }

    const handleDateThing = () => {
        switch (filterMode){
            case "monthly":
                return `${getCurrMonth()} ${getCurrYear()}`
            case "yearly":
                return getCurrYear()
            default:
                return isoToDate(isoLocal)
        }
    }

    return (
        <div className="relative w-full z-0 pt-4">

            {/* I AM SHADOW BOY SHADOW SHADOW */}
            <div style={{"height": "calc(100% - 1em)"}} className="absolute border-3 border-stone-950 bg-fuchsia-700
        w-full rounded-lg -z-1 -skew-x-8 translate-2">
            </div>

            <div className="relative w-full border-3 border-stone-950 p-4 px-6 shrink-0 -skew-x-8 rounded-lg text-neutral-50 bg-stone-800 z-1">
            {/* TODO: FILTER TYPE SETTER */}
            {/* TODO: TOTAL SPENDING FOR FILTER TYPE */}

            

            <div className="absolute top-[-1.125em] left-[1em] ">
                <span className="text-2xl px-4 bg-rose-600 text-white rounded-md border-3 border-stone-950">{handleDateThing()}</span>

                <div className="absolute h-full w-full bg-fuchsia-700 rounded-md border-3 border-gray-950 top-0 left-0 translate-1.5 -z-1"></div>
            </div>

            <div className="w-full flex justify-end items-center skew-x-8">  
                <div>
                    <div>
                        <select
                        className="rounded-sm px-2 py-1 h-[2em]"
                        name="" id="" value={filterMode} onChange={handleFilterSelect}>
                            {(Object.keys(filterOptions) as FilterType[]).map(filt => (
                                <option key={filt} value={filt}>{filterOptions[filt]}</option>
                            ))}
                        </select>

                        <button
                            className="border-2 py-0 px-2 h-[2em]"
                            onClick={handleTheseNuts}
                        >
                            Set Budgets
                        </button>
                    </div>
                </div>
            </div>
            
            {/* <p>weekx of month</p> */}
            <div className="mb-4 skew-x-8">
                <p className="text-8xl"><span className="text-4xl mr-2">PHP</span>{total.toFixed(2)}</p>
                <p className="text-lg text-stone-500">{totalLabeller()}</p>
            </div>
            <ProgBar timePeriod={filterMode}/>
            {/* TODO: Overview button, check spendings so far */}
        </div>
        </div>
        
    )
}

export default TopHome