import React, { useRef, useContext, type FormEvent } from "react"
import useExStore from "../../../store/expenses"
import HomeContext from "../homecontext"
import { type CategoryType } from "../../../types/categoryType"

export const AddCatModal = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)

    const addCat = useExStore((state) => state.addCategory)

    const {setHomeModalShow} = useContext(HomeContext)

    const handleSubmit = (e: FormEvent) => {
            e.preventDefault();
            const newCat: CategoryType = {
                uniqueName: crypto.randomUUID(),
                name: nameRef.current?.value ? nameRef.current?.value : ""
            };
    
            console.log("ADDING NEW TX")
    
            addCat(newCat)
    
            console.log("resetting add modal form")
    
            if (formRef.current) {
                formRef.current.reset()
            }
    
            console.log("closing add modal")
            setHomeModalShow(false)
        }

    return (
        <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-[1em] max-w-120 bg-white"
            >
            <div>
                <label htmlFor="name">Category Name:</label>
                <input 
                    id="name"
                    type="text" 
                    ref={nameRef} 
                    placeholder="Gambling" 
                    required 
                />
            </div>
        
          <button type="submit">Submit</button>
        </form>
    )
}