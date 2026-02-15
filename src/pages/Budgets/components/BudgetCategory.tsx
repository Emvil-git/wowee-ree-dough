import type React from "react"
import useExStore from "../../../store/expenses"
import { CategoryItem } from "../../../components/CategoryItem"

export const BudgetCategory = () => {
    
    const categories = useExStore((state) => state.categories)
    const clearCategories = useExStore((state) => state.clearCategories)
    
    const handleClear = (ev: React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault()

        clearCategories()
    }

    return (
        <div>
            <div>
                {categories.map(cat => 
                    <CategoryItem key={cat.uniqueName} {...cat} canUd={true}/>
                )}
            </div>
            <div>
                <button
                    className="p-1 bg-red-400 border"
                    onClick={handleClear}
                >CLEAR CATEGORIES</button>
            </div>
        </div>
    )
}