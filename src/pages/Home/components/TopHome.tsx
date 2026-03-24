import ProgBar from "../../../components/progBar/ProgBar"
import { useTime } from "../../../hooks/useTime"
import { isoToDate } from "../../../utility_fx"

export const TopHome = () => {
    const {isoLocal} = useTime()

    return (
        <div className="w-full border border-gray-500 p-2">
            <p>{isoToDate(isoLocal)}</p>
            <p>weekx of month</p>
            <ProgBar timePeriod="daily"/>
            {/* TODO: Overview button, check spendings so far */}
        </div>
    )
}

export default TopHome