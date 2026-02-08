import { useMemo } from "react"
import TransacItem from "../../../components/TransacItem"
import useExStore from "../../../store/expenses"

export const TransacHome = () => {

    const transactions = useExStore((state) => state.transactions)
    const clearTx = useExStore((state) => state.clearTransactions)

    const sortedTx = useMemo(() => {
        return[...transactions].sort((a, b) => b.date.localeCompare(a.date))
    }, [transactions])

    return(
        <div>
            {sortedTx.map((tx) => (
                <TransacItem key={tx.id} {...tx} canUD={true}/>
            ))}

            <div className="mt-4">
                <button
                    className="border p-1 bg-red-400"
                    onClick={() => clearTx()}
                >
                    CLEAR TX
                </button>
            </div>
        </div>
    )
}

export default TransacHome