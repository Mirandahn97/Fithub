import menu from '../../assets/menu.svg'
import x from '../../assets/x.svg'
import style from './Menu.module.scss'
import { Nav } from '../Nav/Nav'
import { useState } from 'react'

export function Menu() {

    const [isOpen, setIsOpen] = useState(false)

    const openMenu = () => {
        setIsOpen(true)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <>
            <button className={style.menuBtn} onClick={openMenu} >
                <img src={menu} alt="open" />
            </button>

            {isOpen && (
                <aside className={style.asideStyle}>
                    <img src={x} alt="close" onClick={closeMenu} />
                    <Nav></Nav>
                </aside>
            )}
        </>
    )
}