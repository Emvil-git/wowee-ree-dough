import { useState } from "react"
import HomeToolbar from "./components/HomeToolbar"
import TopHome from "./components/TopHome"
import TransacHome from "./components/TransacHome"
import HomeContext from "./homecontext"
import { AddModal } from "./components/AddModal"
import type { ModalModeType } from "../../types/homeTypes"

const Home = () => {
    const [homeModalShow, setHomeModalShow] = useState(false)
    const [modalMode, setModalMode] = useState<ModalModeType>("transaction")

    return(
        <HomeContext value={{homeModalShow, setHomeModalShow, modalMode, setModalMode}}>
            <div className="w-screen flex flex-col items-center">
                This is the homepage
                {homeModalShow ? <AddModal/> : ''}
                <TopHome/>
                <TransacHome/>
                <HomeToolbar/>
            </div>
        </HomeContext>
    )
}

export default Home