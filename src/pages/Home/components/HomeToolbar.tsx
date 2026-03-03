import React, { useContext } from "react"
import useAppStateStore from "../../../store/appStates"

export const HomeToolbar = () => {

    
    const setModalMode = useAppStateStore((state) => state.setModalMode)
    const setModalShow = useAppStateStore((state) => state.setModalShow)
    const modalShow = useAppStateStore((state) => state.modalShow)

    const handleAddTxClick = (ev:React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault()
        setModalMode("transaction")
        if (!modalShow) {
            setModalShow(true)
        }
    }

    const handleAddCatClick = (ev:React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault()
        setModalMode("category")
        if (!modalShow) {
            setModalShow(true)
        }
    }

    const handleSetBudgetClick = (ev:React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault()
        setModalMode("budget")
        if (!modalShow) {
            setModalShow(true)
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