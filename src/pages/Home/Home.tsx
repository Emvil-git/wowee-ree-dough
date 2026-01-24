import HomeToolbar from "./components/HomeToolbar"
import TopHome from "./components/TopHome"
import TransacHome from "./components/TransacHome"

const Home = () => {
    return(
        <div className="w-screen flex flex-col items-center">
            This is the homepage

            <TopHome/>
            <TransacHome/>
            <HomeToolbar/>
        </div>
    )
}

export default Home