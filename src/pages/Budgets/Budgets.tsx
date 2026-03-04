import { BudgetsTop } from "./components/BudgetsTop"
import { BudgetCategory } from "./components/BudgetCategory"
import BudgetContext from "./budgetcontext"
import { useState } from "react"
import type { FilterType } from "../../types/utilTypes"

const Budgets = () => {
    const [filterMode, setFilterMode] = useState<FilterType>("daily")
    return(
        <BudgetContext value={{filterMode, setFilterMode}}>
            <div>
                This is the budgets page
                <BudgetsTop/>
                <BudgetCategory/>
            </div>
        </BudgetContext>
    )
}

export default Budgets