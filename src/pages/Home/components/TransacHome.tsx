import { useMemo } from "react"
import TransacItem from "../../../components/TransacItem"
import useExStore from "../../../store/expenses"
import { useCategorisedTx } from "../../../hooks/useCategorisedTx"

export const TransacHome = () => {

    const transactions = useExStore((state) => state.transactions)
    const clearTx = useExStore((state) => state.clearTransactions)
    const categories = useExStore((state) => state.categories)

    const sortedTx = useMemo(() => {
        return[...transactions].sort((a, b) => b.date.localeCompare(a.date))
    }, [transactions])

    const categorisedTx = useCategorisedTx(sortedTx, categories)

    return(
        <div>
            {/* {sortedTx.map((tx) => (
                <TransacItem key={tx.id} {...tx} canUD={true}/>
            ))} */}

            {
                categorisedTx.length ?
                categorisedTx.map((tx) => (
                <TransacItem key={tx.id} {...tx} canUD={true}/>
                )) :
                <span className="text-center text-sm text-gray-500"> No transactions and shit </span>
            }

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