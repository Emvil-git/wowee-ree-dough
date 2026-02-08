import { useMemo } from "react"
import TransacItem from "../../../components/TransacItem"
import useExStore from "../../../store/expenses"

export const TransacHome = () => {

    const transactions = useExStore((state) => state.transactions)

    const sortedTx = useMemo(() => {
        return[...transactions].sort((a, b) => b.date.localeCompare(a.date))
    }, [transactions])

    return(
        <div>
            {sortedTx.map((tx) => (
                <TransacItem {...tx}/>
            ))}
        </div>
    )
}

export default TransacHome