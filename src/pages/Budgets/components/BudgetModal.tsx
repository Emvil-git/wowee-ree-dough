import React, { useContext } from "react"
import { BudgetsModalForm } from "../../../components/BudgetsModalForm"
import BudgetContext from "../budgetcontext"

export const BudgetModal = () => {

    const {bModalShow, setBModalShow, bModalMode} = useContext(BudgetContext)

    const handleCloseClick = (ev:React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault()
        if (bModalShow) {
            setBModalShow(false)
        }
    }

    return(
        <div className="absolute bg-gray-950 w-100 h-100 grid place-items-center">
            <button className="bg-white" onClick={handleCloseClick}>CLOSE</button>
            {
                (() =>{
                    switch (true){
                        case bModalMode === "setBudget":
                            return <BudgetsModalForm page="budget"/>
                        default:
                            return ''
                    }
                })() // iffy time
            }
        </div>
    )
}