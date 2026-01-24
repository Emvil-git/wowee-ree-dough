import { useState } from "react"

export const ProgBar = () => {
    const [max, setMax] = useState(100)
    const [fill, setFill] = useState(40)

    return (
        <div className="w-full max-w-[32em]">
            {fill}/{max}
        </div>
    )
}

export default ProgBar