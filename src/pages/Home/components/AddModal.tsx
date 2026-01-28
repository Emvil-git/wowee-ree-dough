import { useContext } from "react"
import HomeContext from "../homecontext"

export const AddModal = () => {
    const {homeModalShow, setHomeModalShow} = useContext(HomeContext)

    const handleCloseClick = (ev:React.MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault()
        if (homeModalShow) {
            setHomeModalShow(false)
        }
    }

    return(
        <div className="absolute bg-gray-950 w-screen h-screen grid place-items-center">
            <form action="" className="bg-white">
                <button onClick={handleCloseClick}>CLOSE</button>
                modal now open
            </form>
        </div>
    )
}