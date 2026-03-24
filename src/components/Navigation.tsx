import { NavLink } from "react-router"

const Navigation = () => {
    return (
        <nav className="absolute bottom-0 w-screen flex justify-center py-4">
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