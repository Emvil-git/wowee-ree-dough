import React, { useContext } from "react"
import useAppStateStore from "../../store/appStates"
import { TxModal } from "./TxModal";
import { CatModal } from "./CatModal";
import { BudgetModal } from "./BudgetModal";
// import HomeContext from "../homecontext"
// import { AddTxModal } from "./AddTxModal"
// import { AddCatModal } from "./AddCatModal"
// import { BudgetsModalForm } from "../../../components/BudgetsModalForm"
import useExStore from "../../store/expenses";
// import { getFullDateTime } from "../../../utility_fx";
// import type { TransactionType } from "../../../types/transactionType";

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

    // const handleSubmit = (e: FormEvent) => {
    //     e.preventDefault();
    //     const newTx: TransactionType = {
    //         id: crypto.randomUUID(),
    //         name: nameRef.current?.value ? nameRef.current?.value : "",
    //         value: valueRef.current ? parseFloat(valueRef.current.value) : 0,
    //         date: getFullDateTime(),
    //         categoryUname: "catDEFAULT",
    //     };

    //     console.log("ADDING NEW TX")

    //     addTx(newTx)

    //     console.log("resetting add modal form")

    //     if (formRef.current) {
    //         formRef.current.reset()
    //     }

    //     console.log("closing add modal")
    //     setHomeModalShow(false)
    // }

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