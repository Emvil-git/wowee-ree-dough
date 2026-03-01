import { BudgetsTop } from "./components/BudgetsTop"
import { BudgetCategory } from "./components/BudgetCategory"
import BudgetContext from "./budgetcontext"
import { useState } from "react"
import { BudgetModal } from "./components/BudgetModal"

const Budgets = () => {
    const [bModalShow, setBModalShow] = useState(false)
    const [bModalMode, setBModalMode] = useState<"setBudget">("setBudget")
    return(
        <BudgetContext value={{bModalShow,setBModalShow, bModalMode, setBModalMode}}>
            <div>
                This is the budgets page
                <BudgetsTop/>
                <BudgetCategory/>
            </div>

            {bModalShow ? <BudgetModal/> : ''}
        </BudgetContext>
    )
}

export default Budgets