import { createContext } from "react"

interface BudgetContextVals {
    bModalShow: boolean
    setBModalShow: (bModalShow: boolean) => void
}

const BudgetContext = createContext<BudgetContextVals>(
    {
        bModalShow: false,
        setBModalShow: () => {}
    }
)

export default BudgetContext