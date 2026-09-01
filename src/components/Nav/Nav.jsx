import { NavLink } from "react-router"
import style from './Nav.module.scss'

export function Nav() {

    return (
        <>
            <nav className={style.navStyle}>
                <ul>
                    <li>
                        <NavLink to='/home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/search'>Search</NavLink>
                    </li>
                    <li>
                        <NavLink to='/login'>Login</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}