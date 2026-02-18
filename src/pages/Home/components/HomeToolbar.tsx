import React, { useContext } from "react"
import HomeContext from "../homecontext"

export const HomeToolbar = () => {

    const { homeModalShow ,setHomeModalShow, setModalMode } = useContext(HomeContext)

    const handleAddTxClick = (ev:React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault()
        setModalMode("transaction")
        if (!homeModalShow) {
            setHomeModalShow(true)
        }
    }

    const handleAddCatClick = (ev:React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault()
        setModalMode("category")
        if (!homeModalShow) {
            setHomeModalShow(true)
        }
    }

    const handleSetBudgetClick = (ev:React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault()
        setModalMode("budget")
        if (!homeModalShow) {
            setHomeModalShow(true)
        }
    } 

    return(
        <div className="absolute bottom-0 w-screen bg-gray-200 flex gap-2">
            <button onClick={handleAddTxClick}>ADD TX</button>
            <button onClick={handleAddCatClick}>ADD CAT</button>
            <button onClick={handleSetBudgetClick}>SET BUDGETS</button>
        </div>
    )
}

export default HomeToolbar