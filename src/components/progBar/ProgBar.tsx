import useExStore from "../../store/expenses"
import { BudgetBtn } from "../BudgetsBtn"
import { Bar } from "./Bar"
import type { FilterType } from "../../types/utilTypes"
import { useMemo } from "react"
import { txFilter } from "../../utility_fx"
import { DateTime } from "luxon"
import useAppStateStore from "../../store/appStates"

interface ProgBarPropType {
    timePeriod: FilterType
}

export const ProgBar = ({timePeriod}: ProgBarPropType) => {

    const transactions = useExStore((state => state.transactions))
    const budgets = useExStore((state => state.budgets))
    const filterMode = useAppStateStore((state) => state.filterMode)

    const filteredTx = useMemo(() => {
            return txFilter(transactions, DateTime.now(), filterMode)
        }, [transactions,filterMode])

    const total = filteredTx.length ? filteredTx.map(
        (tx) => tx.value
    ).reduce(
        (acc, val) => acc + val
    ) : 0

    const handleBar = () => {
        switch (timePeriod) {
            case "weekly" :
                return budgets.weekly ? <Bar max={budgets.weekly} fill={total}/> : <BudgetBtn/>
            case "monthly" :
                return budgets.monthly ? <Bar max={budgets.monthly} fill={total}/> : <BudgetBtn/>
            default :
                return budgets.daily ? <Bar max={budgets.daily} fill={total}/> : <BudgetBtn/>
        }
    }

    return (
        <div className="w-full">
            {/* {total}/{max} */}

            {handleBar()}

            {/* { budgets.daily ? <Bar max={budgets.daily} fill={total}/> : <BudgetBtn/> } */}
        </div>
    )
}

export default ProgBar