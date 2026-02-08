import { useRef, useState } from "react";
import useExStore from "../store/expenses";

interface TransacItemProps {
    id: string;
    name: string;
    value: number;
    date: string;
    categoryUname: string,
    canUD?: boolean
}

export const TransacItem = ({id, name, value, date, categoryUname, canUD} : TransacItemProps) => {

    const [isEditing, setIsEditing] = useState<boolean>(false)

    const editTransaction = useExStore((state) => state.editTransaction)
    const delTransaction = useExStore((state) => state.deleteTransaction)

    const nameRef = useRef<HTMLInputElement>(null)
    const valueRef = useRef<HTMLInputElement>(null)

    const handleEdit = (eId: string) => {
        if (isEditing) {
            editTransaction(eId, {name: nameRef.current?.value, value: Number(valueRef.current?.value)})

            setIsEditing(false)
        } else  {
            setIsEditing(true)
        }
    }

    const handleDelete = (dId: string) => {
        delTransaction(dId)
    }

    return(
        <div className="p-2 border flex flex-col gap-1" key={id}>
            {/* {name}
            {value}
            {date}
            {categoryUname} */}

            <form
            action=""
            >
                {isEditing ?
                    <input className="p-1 border" ref={nameRef} type="text" defaultValue={name} /> :
                    <span>{name}</span>
                }
                {isEditing ?
                    <input className="p-1 border"  ref={valueRef} type="number" defaultValue={value} /> :
                    <span>{value}</span>
                }
                <span>{date}</span>
                <span>{categoryUname}</span>
            </form>

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
        </div>
    )
}

export default TransacItem