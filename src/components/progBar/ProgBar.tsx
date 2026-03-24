import { useState } from "react"
import useExStore from "../../store/expenses"
import { BudgetBtn } from "../BudgetsBtn"
import { Bar } from "./Bar"

interface ProgBarPropType {
    timePeriod: "daily" | "weekly" | "monthly"
}

export const ProgBar = ({timePeriod}: ProgBarPropType) => {
    const [max, setMax] = useState(100)
    const [fill, setFill] = useState(40)

    const transactions = useExStore((state => state.transactions))
    const budgets = useExStore((state => state.budgets))

    const total = transactions.length ? transactions.map(
        (tx) => tx.value
    ).reduce(
        (acc, val) => acc + val
    ) : 0

    return (
        <div className="w-full">
            {/* {total}/{max} */}
            { budgets.daily ? <Bar max={budgets.daily} fill={total}/> : <BudgetBtn/> }
        </div>
    )
}

export default ProgBar