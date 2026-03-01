import React, { useContext } from "react"
import useExStore from "../../../store/expenses"
import BudgetContext from "../budgetcontext"

export const BudgetsTop = () => {
    
    const budgets = useExStore((state) => state.budgets)
    const {bModalMode, setBModalMode, setBModalShow} = useContext(BudgetContext)
    
    const handleOpenModal = (ev:React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault()

        setBModalMode("setBudget")
        setBModalShow(true)
    }

    return(
        <div>
            <div className="flex flex-col">
                <span>Monthly {budgets.monthly === null ? "Not Assigned" : budgets.monthly}</span>
                <span>Weekly {budgets.weekly === null ? "Not Assigned" : budgets.weekly}</span>
                <span>Daily {budgets.daily === null ? "Not Assigned" : budgets.daily}</span>
            </div>
    
            <button
                className="p-1 border bg-amber-300"
                onClick={handleOpenModal}
            >
                Set Budgets
            </button>

            {/* TODO WEEKDAY/WEEKEND SPLIT */}
        </div>
    )
}