import { useState } from "react"
import useExStore from "../store/expenses"

export const ProgBar = () => {
    const [max, setMax] = useState(100)
    const [fill, setFill] = useState(40)

    const transactions = useExStore((state => state.transactions))

    const total = transactions.length ? transactions.map(
        (tx) => tx.value
    ).reduce(
        (acc, val) => acc + val
    ) : 0
    

    return (
        <div className="w-full max-w-[32em]">
            {total}/{max}
        </div>
    )
}

export default ProgBar