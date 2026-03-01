import { createContext } from "react"

interface BudgetContextVals {
    bModalShow: boolean
    setBModalShow: (bModalShow: boolean) => void
    bModalMode: "setBudget"
    setBModalMode: (bModalMode: "setBudget") => void
}

const BudgetContext = createContext<BudgetContextVals>(
    {
        bModalShow: false,
        setBModalShow: () => {},
        bModalMode: "setBudget",
        setBModalMode: () => {}
    }
)

export default BudgetContext