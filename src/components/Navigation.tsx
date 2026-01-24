import { NavLink } from "react-router"

const Navigation = () => {
    return (
        <nav>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/budgets">
                Budgets
            </NavLink>
            <NavLink to="/transactions">
                Transctions
            </NavLink>
        </nav>
    )
}

export default Navigation