import { useContext, useMemo } from "react"
import TransacItem from "../../../components/TransacItem"
import useExStore from "../../../store/expenses"
import useAppStateStore from "../../../store/appStates"
import { useCategorisedTx } from "../../../hooks/useCategorisedTx"
import HomeContext from "../homecontext"
import { txFilter } from "../../../utility_fx"
import { DateTime } from "luxon"

export const TransacHome = () => {

    const transactions = useExStore((state) => state.transactions)
    const clearTx = useExStore((state) => state.clearTransactions)
    const categories = useExStore((state) => state.categories)

    const filterMode = useAppStateStore((state) => state.filterMode)

    // const {filterMode} = useContext(HomeContext)

    const filteredTx = useMemo(() => {
        return txFilter(transactions, DateTime.now(), filterMode)
    }, [transactions,filterMode])

    const sortedTx = useMemo(() => {
        return[...filteredTx].sort((a, b) => b.date.localeCompare(a.date))
    }, [filteredTx])

    const categorisedTx = useCategorisedTx(sortedTx, categories)

    return(
        <div className="rounded-lg p-2 mt-4 w-full flex flex-col gap-2 flex-1 min-h-0 overflow-y-auto pb-4 bg-stone-800">
            {/* {sortedTx.map((tx) => (
                <TransacItem key={tx.id} {...tx} canUD={true}/>
            ))} */}

            {
                categorisedTx.length ?
                categorisedTx.map((tx) => (
                <TransacItem key={tx.id} {...tx} canUD={true} />
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