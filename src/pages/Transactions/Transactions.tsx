import { useMemo, useState } from "react"
import useExStore from "../../store/expenses"
import TransacItem from "../../components/TransacItem"
import { TxPageContext } from "./transactioncontext"
import { getCurrMonth, getCurrYear, isoGetMonth, isoGetYear } from "../../utility_fx"
import { useCategorisedTx } from "../../hooks/useCategorisedTx"

const Transactions = () => {

    const transactions = useExStore((state) => state.transactions)
    const categories = useExStore((state) => state.categories)


    const [filterMonth, setFilterMonth] = useState(getCurrMonth())
    const [filterYear, setFilterYear] = useState(getCurrYear())
    const [isFiltered, setIsFiltered] = useState(false)

    const filteredTx = useMemo(
        () => {
            return isFiltered ? transactions.filter((tx) => {
                isoGetMonth(tx.date) === filterMonth && isoGetYear(tx.date) === filterYear
            }) : [...transactions]
        },[transactions, filterMonth, filterYear, isFiltered]
    )

    const sortedTx = useMemo(
        () => {
            return [...filteredTx].sort((a,b) => b.date.localeCompare(a.date))
        },[transactions, filteredTx]
    )

    const catFiltTx = useCategorisedTx(sortedTx, categories)

    return(
        <TxPageContext value={{isFiltered, setIsFiltered, filterMonth, setFilterMonth, filterYear, setFilterYear}}>
            <div>
                <div>
                    TODAY
                    <span>sort/ group by</span>
                </div>
                <div>
                    {catFiltTx.map((tx) => 
                        <TransacItem key={tx.id} {...tx} canUD={false}/>
                    )}
                </div>
            </div>
        </TxPageContext>
    )
}

export default Transactions