import { useRef, useState } from "react"
import type { CategoryType } from "../types/categoryType"
import { colourObjs } from "../utility"
import useExStore from "../store/expenses"

interface CatItemPropsType extends CategoryType{
    canUd?: boolean
}

export const CategoryItem = ({name,uniqueName,colour,canUd}: CatItemPropsType) => {

    const editCategory = useExStore((state) => state.editCategory)
    const delCategory = useExStore((state) => state.deleteCategory)

    const [isEditing, setIsEditing] = useState(false)

    const nameRef = useRef<HTMLInputElement>(null)
    const colourRef = useRef<HTMLSelectElement>(null)

    const handleEdit = (catUname: string) => {
        if (isEditing) {
            editCategory(catUname, {name: nameRef.current?.value, colour: colourObjs.find((col) => col.main === colourRef.current?.value)})

            setIsEditing(false)
        } else  {
            setIsEditing(true)
        }
    }

    const handleDelete = (catUname: string) => {
        delCategory(catUname)
    }

    return (
        <div style={{backgroundColor: colour.mute}}>
            <form
                className="flex flex-col gap-1"
            >
                {isEditing ?
                    <input className="p-1 border" ref={nameRef} type="text" defaultValue={name} /> :
                    <span>{name}</span>
                }

                { isEditing ? 
                    <div>
                        <label htmlFor="colour">Colour:</label>
                        <select id="colour" ref={colourRef} required>
                            <option value="" disabled>Select a category</option>
                            {colourObjs.map((col) => (
                                <option value={col.main}>{col.main}</option>
                            ))}
                        </select>
                    </div> : ''
                }
            </form>

            {canUd ? 
                <div
                    className="flex gap-2"
                >
                    <button
                        className="p-1 border bg-green-200"
                        onClick={() => handleDelete(uniqueName)}
                    >DEL</button>

                    <button
                        className="p-1 border bg-green-200"
                        onClick={() => handleEdit(uniqueName)}
                    >
                        {isEditing ? "DONE" : "EDIT"}
                    </button>
                </div> : ''
            }
        </div>
    )
}