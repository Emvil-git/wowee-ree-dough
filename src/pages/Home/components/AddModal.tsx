import React, { useContext } from "react"
import HomeContext from "../homecontext"
import { AddTxModal } from "./AddTxModal"
import { AddCatModal } from "./AddCatModal"
import { BudgetsModalForm } from "../../../components/BudgetsModalForm"
// import useExStore from "../../../store/expenses";
// import { getFullDateTime } from "../../../utility_fx";
// import type { TransactionType } from "../../../types/transactionType";

export const AddModal = () => {

    // const formRef = useRef<HTMLFormElement>(null)
    // const nameRef = useRef<HTMLInputElement>(null)
    // const valueRef = useRef<HTMLInputElement>(null)
    // const categoryRef = useRef<HTMLSelectElement>(null)

    // const categories = useExStore((state) => state.categories)
    // const addTx = useExStore((state) => state.addTransaction)

    const {homeModalShow, setHomeModalShow, modalMode} = useContext(HomeContext)

    const handleCloseClick = (ev:React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault()
        if (homeModalShow) {
            setHomeModalShow(false)
        }
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
        <div className="absolute bg-gray-950 w-100 h-100 grid place-items-center">
            <button className="bg-white" onClick={handleCloseClick}>CLOSE</button>
            {
                (() =>{
                    switch (true){
                        case modalMode === "transaction":
                            return <AddTxModal/>
                        case modalMode === "category":
                            return <AddCatModal/>
                        case modalMode === "budget":
                            return <BudgetsModalForm page="home"/>
                        default:
                            return ''
                    }
                })() // iffy time
            }
            {/* <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-[1em] max-w-120 bg-white"
            >
                

                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        id="name"
                        type="text" 
                        ref={nameRef} 
                        placeholder="Impulse buy" 
                        required 
                    />
                </div>
            
                <div>
                    <label htmlFor="value">Amount ($):</label>
                    <input 
                        id="value"
                        type="number" 
                        ref={valueRef} 
                        step="0.01" 
                        min="0"
                        placeholder="0.00" 
                        required 
                    />
                </div>
            
                <div>
                    <label htmlFor="category">Category:</label>
                    <select id="category" ref={categoryRef} required>
                        <option value="" disabled>Select a category</option>
                        {categories.map((cat) => (
                            <option value={cat.uniqueName}>{cat.name}</option>
                        ))}
                    </select>
                </div>
            
              <button type="submit">Submit</button>
            </form> */}
        </div>
    )
}