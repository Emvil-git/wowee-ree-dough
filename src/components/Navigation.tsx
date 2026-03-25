import { NavLink } from "react-router"

const Navigation = () => {
    return (
        <nav className=" h-16 shrink-0 w-screen flex justify-center py-4 bg-gray-900 text-gray-50">
            <div className="flex justify-center">
                <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/budgets">
                Budgets
            </NavLink>
            <NavLink to="/transactions">
                Transctions
            </NavLink>
            </div>
        </nav>
    )
}

export default Navigation