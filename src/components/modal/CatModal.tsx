import { useRef, type FormEvent, useState, useEffect } from "react"
import useExStore from "../../store/expenses"
// import HomeContext from "../homecontext"
import { type CategoryType } from "../../types/categoryType"
import { colourObjs } from "../../utility"
import useAppStateStore from "../../store/appStates"

export const CatModal = () => {

    const formRef = useRef<HTMLFormElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const colourRef = useRef<HTMLSelectElement>(null)
    // const colourContRef = useRef(null)

    const addCat = useExStore((state) => state.addCategory)

    const [isCOpen, setIsCOpen] = useState(false)
    const [cSelected, setCSelected] = useState(colourObjs[0])

    const setModalShow = useAppStateStore((state) => state.setModalShow)

    // useEffect(() => {
    //     const handleClickOutside = (ev: MouseEvent) => {
    //         if (colourContRef.current && !colourContRef.current.contains(ev.target as Node))
    //     }
    // }, [])

    const handleSubmit = (e: FormEvent) => {
            e.preventDefault();
            const newCat: CategoryType = {
                uniqueName: crypto.randomUUID(),
                name: nameRef.current?.value ? nameRef.current?.value : "",
                colour: colourObjs.find((col) => col.main === colourRef.current?.value) || colourObjs[0] // red as fallback idk too lazy to write code that allows undef
            };
    
            console.log("ADDING NEW TX")
    
            addCat(newCat)
    
            console.log("resetting add modal form")
    
            if (formRef.current) {
                formRef.current.reset()
            }
    
            console.log("closing add modal")
            setModalShow(false)
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

            <div>
                <label htmlFor="colour"></label>
                <select
                    name="colour" id="colour"
                    ref={colourRef}    
                >
                    {colourObjs.map(
                        (col) => (
                            <option value={col.main} className={`h-8 w-8 rounded-full bg-[${col.main}]`}>{col.main}</option>
                        )
                    )}
                </select>
            </div>
        
          <button type="submit">Submit</button>
        </form>
    )
}