import { useState } from "react"
import HomeToolbar from "./components/HomeToolbar"
import TopHome from "./components/TopHome"
import TransacHome from "./components/TransacHome"
import HomeContext from "./homecontext"
import type { FilterType } from "../../types/utilTypes"

const Home = () => {
    const [filterMode, setFilterMode] = useState<FilterType>("all")

    return(
        <HomeContext value={{filterMode, setFilterMode}}>
            <div className="relative w-screen max-w-120 flex flex-col items-center pt-4 h-screen">
                <TopHome/>
                <TransacHome/>
                <HomeToolbar/>
            </div>
        </HomeContext>
    )
}

export default Home