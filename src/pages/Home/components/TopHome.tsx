import ProgBar from "../../../components/ProgBar"

export const TopHome = () => {
    return (
        <div className="border border-gray-500">
            <p>today</p>
            <p>date</p>
            <p>weekx of month</p>
            <ProgBar/>
            {/* TODO: Overview button, check spendings so far */}
        </div>
    )
}

export default TopHome