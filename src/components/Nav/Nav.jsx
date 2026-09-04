import { NavLink } from "react-router"
import { Login } from "../Login/Login";
import { useAuth } from "../../providers/auth.provider"
import style from './Nav.module.scss'

export function Nav() {

    const { loginData, logout } = useAuth();
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
                            <h2>Login</h2>
                            <Login></Login>
                        </li>
                        : <>
                            <li>
                                <NavLink to='/login'>My Schedule</NavLink>
                            </li>
                            <li>
                                <button onClick={logout}>Log out</button>
                            </li>
                        </>
                    }

                </ul>
            </nav>
        </>
    )
}