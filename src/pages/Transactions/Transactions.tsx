import { useMemo } from "react"
import useExStore from "../../store/expenses"
import TransacItem from "../../components/TransacItem"

const Transactions = () => {

    const transactions = useExStore((state) => state.transactions)

    const sortedTx = useMemo(
        () => {
            return [...transactions].sort((a,b) => b.date.localeCompare(a.date))
        },[transactions]
    )

    return(
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
    )
}

export default Transactions