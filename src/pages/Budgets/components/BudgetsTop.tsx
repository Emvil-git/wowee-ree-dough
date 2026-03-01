import useExStore from "../../../store/expenses"

export const BudgetsTop = () => {
    
    const budgets = useExStore((state) => state.budgets)
    
    return(
        <div>
            <div className="flex flex-col">
                <span>Monthly {budgets.monthly === null ? "Not Assigned" : budgets.monthly}</span>
                <span>Weekly {budgets.weekly === null ? "Not Assigned" : budgets.weekly}</span>
                <span>Daily {budgets.daily === null ? "Not Assigned" : budgets.daily}</span>
            </div>
    
            <button
                className="p-1 border bg-amber-300"
            >
                Set Budgets
            </button>

            {/* TODO WEEKDAY/WEEKEND SPLIT */}
        </div>
    )
}