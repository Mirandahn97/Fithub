import { NavLink } from "react-router"
import { useAuth } from "../../providers/auth.provider"
import style from './Nav.module.scss'

export function Nav() {

    const { loginData } = useAuth();
    console.log(loginData)


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
                    {!loginData ?
                        <li>
                            <NavLink to='/login'>Login</NavLink>
                        </li>
                        : <>
                            <li>
                                <NavLink to='/login'>My Schedule</NavLink>
                            </li>
                            <li>
                                <NavLink to='/login'>Log out</NavLink>
                            </li>
                        </>
                    }

                </ul>
            </nav>
        </>
    )
}