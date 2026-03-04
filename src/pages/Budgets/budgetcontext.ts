import { createContext } from "react"
import { type FilterType } from "../../types/utilTypes"

interface BudgetContextVals {
    filterMode: FilterType
    setFilterMode: (nFilter: FilterType) => void
}

const BudgetContext = createContext<BudgetContextVals>(
    {
        filterMode: "daily",
        setFilterMode: () => {}
    }
)

export default BudgetContext