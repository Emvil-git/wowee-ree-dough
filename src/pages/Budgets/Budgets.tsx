import { BudgetsTop } from "./components/BudgetsTop"
import { BudgetCategory } from "./components/BudgetCategory"
import BudgetContext from "./budgetcontext"
import { useState } from "react"

const Budgets = () => {
    const [bModalShow, setBModalShow] = useState(false)
    return(
        <BudgetContext value={{bModalShow,setBModalShow}}>
            <div>
                This is the budgets page
                <BudgetsTop/>
                <BudgetCategory/>
            </div>
        </BudgetContext>
    )
}

export default Budgets