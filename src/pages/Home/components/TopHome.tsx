import ProgBar from "../../../components/progBar/ProgBar"
import { useTime } from "../../../hooks/useTime"
import { isoToDate } from "../../../utility_fx"
import useExStore from "../../../store/expenses"
import { useContext } from "react"
import HomeContext from "../homecontext"
import { useMemo } from "react"
import { txFilter } from "../../../utility_fx"
import { DateTime } from "luxon"

export const TopHome = () => {
    const {isoLocal} = useTime()

    const transactions = useExStore((state => state.transactions))
    const {filterMode} = useContext(HomeContext)

    const filteredTx = useMemo(() => {
            return txFilter(transactions, DateTime.now(), filterMode)
        }, [transactions])

    const total = useMemo(() => {
        return filteredTx.length ? filteredTx.map(
            (tx) => tx.value
        ).reduce(
            (acc, val) => acc + val
        ) : 0
    }, [filteredTx])

    const totalLabeller = () => {
        switch (filterMode){
            case "all":
                return "Total recorded spending"
            case "daily":
                return "Today's spending"
            case "weekly":
                return "This week's spending"
            case "monthly":
                return "This month's spending"
        }
    }

    return (
        <div className="w-full border border-gray-500 p-4">
            {/* TODO: FILTER TYPE SETTER */}
            {/* TODO: TOTAL SPENDING FOR FILTER TYPE */}
            
            <p>{isoToDate(isoLocal)}</p>
            <p>weekx of month</p>
            <div className="my-2">
                <p className="text-6xl"><span className="text-4xl mr-1">PHP</span>{total.toFixed(2)}</p>
                <p className="text-lg">{totalLabeller()}</p>
            </div>
            <ProgBar timePeriod="daily"/>
            {/* TODO: Overview button, check spendings so far */}
        </div>
    )
}

export default TopHome