import ProgBar from "../../../components/progBar/ProgBar"
import { useTime } from "../../../hooks/useTime"
import { isoToDate } from "../../../utility_fx"
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

    return (
        <div className="w-full border border-gray-500 p-4 shrink-0">
            {/* TODO: FILTER TYPE SETTER */}
            {/* TODO: TOTAL SPENDING FOR FILTER TYPE */}
            <div className="w-full flex justify-between items-center">
                <p className="text-xl">{isoToDate(isoLocal)}</p>

                <div>
                    

                    <div>
                        <select name="" id="" value={filterMode} onChange={handleFilterSelect}>
                            {(Object.keys(filterOptions) as FilterType[]).map(filt => (
                                <option key={filt} value={filt}>{filterOptions[filt]}</option>
                            ))}
                        </select>

                        <button
                            className="border-2 py-0 px-2"
                            onClick={handleTheseNuts}
                        >
                            Set Budgets
                        </button>
                    </div>
                </div>
            </div>
            
            {/* <p>weekx of month</p> */}
            <div className="my-2">
                <p className="text-6xl"><span className="text-4xl mr-1">PHP</span>{total.toFixed(2)}</p>
                <p className="text-lg">{totalLabeller()}</p>
            </div>
            <ProgBar timePeriod={filterMode}/>
            {/* TODO: Overview button, check spendings so far */}
        </div>
    )
}

export default TopHome