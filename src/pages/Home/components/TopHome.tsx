import ProgBar from "../../../components/ProgBar"
import { useTime } from "../../../hooks/useTime"

export const TopHome = () => {
    const {isoLocal} = useTime()

    return (
        <div className="border border-gray-500">
            <p>{isoLocal}</p>
            <p>weekx of month</p>
            <ProgBar/>
            {/* TODO: Overview button, check spendings so far */}
        </div>
    )
}

export default TopHome