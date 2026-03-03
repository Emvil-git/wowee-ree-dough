import React from "react"
import useAppStateStore from "../../store/appStates"
import { TxModal } from "./TxModal";
import { CatModal } from "./CatModal";
import { BudgetModal } from "./BudgetModal";

export const AppModal = () => {

    const modalShow = useAppStateStore((state) => state.modalShow)
    const modalMode = useAppStateStore((state) => state.modalMode)
    const setModalShow = useAppStateStore((state) => state.setModalShow)

    const handleCloseClick = (ev:React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault()
        if (modalShow) {
            setModalShow(false)
        }
        console.log(modalShow)
    }

    return(
        <div className="absolute bg-gray-950 w-screen h-screen grid place-items-center top-0">
            <button className="bg-white" onClick={handleCloseClick}>CLOSE</button>
            {
                (() =>{
                    switch (true){
                        case modalMode === "transaction":
                            return <TxModal/>
                        case modalMode === "category":
                            return <CatModal/>
                        case modalMode === "budget":
                            return <BudgetModal/>
                        default:
                            return ''
                    }
                })() // iffy time
            }
        </div>
    )
}