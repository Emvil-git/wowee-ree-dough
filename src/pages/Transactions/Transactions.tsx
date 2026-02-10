import { useMemo, useState } from "react"
import useExStore from "../../store/expenses"
import TransacItem from "../../components/TransacItem"
import { TxPageContext } from "../../contexts/cTransactionPage"
import { getCurrMonth, getCurrYear, isoGetMonth, isoGetYear } from "../../utility_fx"

const Transactions = () => {

    const transactions = useExStore((state) => state.transactions)

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

    return(
        <TxPageContext value={{isFiltered, setIsFiltered, filterMonth, setFilterMonth, filterYear, setFilterYear}}>
            <div>
                <div>
                    TODAY
                    <span>sort/ group by</span>
                </div>
                <div>
                    {sortedTx.map((tx) => 
                        <TransacItem key={tx.id} {...tx} canUD={false}/>
                    )}
                </div>
            </div>
        </TxPageContext>
    )
}

export default Transactions