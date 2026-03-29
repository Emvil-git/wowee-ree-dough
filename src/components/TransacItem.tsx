import { useRef, useState } from "react";
import useExStore from "../store/expenses";
import { isoZToLocal } from "../utility_fx";
import DateDisplay from "./DateDisplay";
import type { CategoryType } from "../types/categoryType";
import { CatDisplay } from "./CatDisplay";

interface TransacItemProps {
    id: string;
    name: string;
    value: number;
    date: string;
    category?: CategoryType,
    canUD?: boolean
}

export const TransacItem = ({id, name, value, date, category, canUD} : TransacItemProps) => {

    const categories = useExStore((state) => state.categories)
    
    const [isEditing, setIsEditing] = useState<boolean>(false)

    const editTransaction = useExStore((state) => state.editTransaction)
    const delTransaction = useExStore((state) => state.deleteTransaction)

    const nameRef = useRef<HTMLInputElement>(null)
    const valueRef = useRef<HTMLInputElement>(null)
    const categoryRef = useRef<HTMLSelectElement>(null)

    const handleEdit = (eId: string) => {
        if (isEditing) {
            editTransaction(eId, {name: nameRef.current?.value, value: Number(valueRef.current?.value), categoryUname: categoryRef.current?.value})

            setIsEditing(false)
        } else  {
            setIsEditing(true)
        }
    }

    const handleDelete = (dId: string) => {
        delTransaction(dId)
    }

    return(
        <div className="relative p-4 pt-6 border-3 border-stone-950 flex flex-col gap-1 rounded-md mt-1 text-gray-50 -skew-x-4 bg-stone-800" key={id}>
            {/* {name}
            {value}
            {date}
            {categoryUname} */}

            <div className="absolute bg-rose-600 -top-[0.5em] px-2 rounded-sm -skew-x-4 left-3 text-lg text-gray-50 border-3 border-stone-950">
                <DateDisplay date={isoZToLocal(date)}/>
            </div>

            <form
            className="flex flex-col gap-1 skew-x-4"
            >
                <div className="flex justify-between">
                    <div className="text-2xl">
                        {isEditing ?
                            <input className="p-1 border" ref={nameRef} type="text" defaultValue={name} /> :
                            <span>{name}</span>
                        }
                    </div>

                    { isEditing ? 
                    <div>
                        <label htmlFor="category">Category:</label>
                        <select id="category" ref={categoryRef} required>
                            <option value="" disabled>Select a category</option>
                            {categories.map((cat) => (
                                <option value={cat.uniqueName}>{cat.name}</option>
                            ))}
                        </select>
                    </div> :
                    <>{category ? <CatDisplay {...category}/> : 'BOMBACLAAT'}</>
                }
                </div>

                {/* <span>{category ? category.name : 'BOMBACLAAT'}</span> */}

                
                <span>
                    <span className="text-4xl mr-2">PHP</span>
                    {isEditing ?
                    <input className="p-1 text-4xl border"  ref={valueRef} type="number" defaultValue={value} /> :
                    <span className="text-6xl">{value.toFixed(2)}</span>
                }
                </span>
            

            {canUD ? 
                <div
                    className="flex gap-2"
                >
                    <button
                        className="p-1 border bg-green-200"
                        onClick={() => handleDelete(id)}
                    >DEL</button>

                    <button
                        className="p-1 border bg-green-200"
                        onClick={() => handleEdit(id)}
                    >
                        {isEditing ? "DONE" : "EDIT"}
                    </button>
                </div> : ''
            }
            </form>
        </div>
    )
}

export default TransacItem