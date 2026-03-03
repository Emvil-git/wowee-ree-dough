import React, { useContext } from "react"
import useExStore from "../../../store/expenses"
import BudgetContext from "../budgetcontext"
import useAppStateStore from "../../../store/appStates"

export const BudgetsTop = () => {
    
    const budgets = useExStore((state) => state.budgets)
    const setModalMode = useAppStateStore((state) => state.setModalMode)
    const setModalShow = useAppStateStore((state) => state.setModalShow)
    
    const handleOpenModal = (ev:React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault()

        setModalMode("budget")
        setModalShow(true)
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