import { useRef, useState } from "react"
import useExStore from "../store/expenses"

interface BudgetUpdates {
    daily?: number|null
    weekly?: number|null
    monthly?: number|null
}

export const BudgetsModalForm = () => {
    
    const cBudget = useExStore((state) => state.budgets)
    const updateBudget = useExStore((state) => state.updateBudget)

    const [isEditing, setIsEditing] = useState(false)

    const dailyRef = useRef<HTMLInputElement>(null)
    const weeklyRef = useRef<HTMLInputElement>(null)
    const monthlyRef = useRef<HTMLInputElement>(null)

    const handleEdit = () => {
        
        if (isEditing) {

            const updates:BudgetUpdates = {}
        
            if (Number(dailyRef.current?.value) !== cBudget.daily) {
                console.log("daily change")
                updates.daily = Number(dailyRef.current?.value) === 0 ? null : Number(dailyRef.current?.value) 
            }
            if (Number(weeklyRef.current?.value) !== cBudget.weekly) {
                console.log("weekly change")
                updates.weekly = Number(weeklyRef.current?.value) === 0 ? null : Number(weeklyRef.current?.value) 
            }
            if (Number(monthlyRef.current?.value) !== cBudget.monthly) {
                updates.monthly = Number(monthlyRef.current?.value) === 0 ? null : Number(monthlyRef.current?.value) 
            }

            console.log(dailyRef.current?.value)
            console.log(monthlyRef.current?.value)
            console.log(weeklyRef.current?.value)

            console.log (updates)

            if (Object.keys(updates).length > 0) {
                updateBudget(updates)
            }

            setIsEditing(false)
        } else {
            setIsEditing(true)
        }

        
    }
    
    return (
        <form
            className="flex flex-col gap-[1em] max-w-120 bg-white"
        >
            {isEditing ?
                <input className="p-1 border" ref={dailyRef} type="text" defaultValue={cBudget.daily ? cBudget.daily : '0'} /> :
                <span>Daily: {cBudget.daily ? cBudget.daily : 'No budget set'}</span>
            }
            {isEditing ?
                <input className="p-1 border" ref={weeklyRef} type="text" defaultValue={cBudget.weekly ? cBudget.weekly : '0'} /> :
                <span>Monthly: {cBudget.weekly ? cBudget.weekly : 'No budget set'}</span>
            }
            {isEditing ?
                <input className="p-1 border" ref={monthlyRef} type="text" defaultValue={cBudget.monthly ? cBudget.monthly : '0'} /> :
                <span>Monthly: {cBudget.monthly ? cBudget.monthly : 'No budget set'}</span>
            }
            <div className="flex">
                <button
                    type="button"
                    className="p-1 border bg-green-200"
                    onClick={() => handleEdit()}
                >
                    {isEditing ? "DONE" : "EDIT"}
                </button>
                <button>
                    CLEAR
                </button>
            </div>
        </form>
    )
}