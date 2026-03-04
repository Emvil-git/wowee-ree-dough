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
            <div className="w-screen flex flex-col items-center">
                This is the homepage
                <TopHome/>
                <TransacHome/>
                <HomeToolbar/>
            </div>
        </HomeContext>
    )
}

export default Home