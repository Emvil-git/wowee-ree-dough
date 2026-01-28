import { useContext } from "react"
import HomeContext from "../homecontext"

export const HomeToolbar = () => {

    const { homeModalShow ,setHomeModalShow } = useContext(HomeContext)

    const handleAddClick = (ev:React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault()
        if (!homeModalShow) {
            setHomeModalShow(true)
        }
    }

    return(
        <div className="absolute bottom-0 w-screen bg-gray-200">
            <button onClick={handleAddClick}>ADD</button>
        </div>
    )
}

export default HomeToolbar