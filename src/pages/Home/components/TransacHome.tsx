import TransacItem from "../../../components/TransacItem"
import useExStore from "../../../store/expenses"

export const TransacHome = () => {

    const transactions = useExStore((state) => state.transactions)

    return(
        <div>
            {transactions.map((tx) => (
                <TransacItem {...tx}/>
            ))}
        </div>
    )
}

export default TransacHome