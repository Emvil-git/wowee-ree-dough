import { BudgetsTop } from "./components/BudgetsTop"
import { BudgetCategory } from "./components/BudgetCategory"

const Budgets = () => {
    return(
        <div>
            This is the budgets page
            <BudgetsTop/>
            <BudgetCategory/>
        </div>
    )
}

export default Budgets