import { Routes, Route } from "react-router"
import Home from "./pages/Home/Home"
import Transactions from "./pages/Transactions/Transactions"
import Budgets from "./pages/Budgets/Budgets"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/transactions" element={<Transactions/>}/>
            <Route path="/budgets" element={<Budgets/>}/>
        </Routes>
    )
}

export default AppRoutes