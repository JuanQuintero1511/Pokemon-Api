import { Link } from "react-router-dom"
import style from "./Nav.module.css"

 export const NavBar = () => {
    return (
        <nav className={ style.mainConteinerNav }>
            <Link to = '/home'> Home </Link>
            <Link to = '/create'> Form </Link> 
        </nav>
    )
}

