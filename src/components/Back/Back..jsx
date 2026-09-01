import { useNavigate } from 'react-router'
import back from '../../assets/back.svg'
import style from './Back.module.scss'

export function Back() {

    const navigate = useNavigate()

    return(
        <>
        <img className={style.backBtn} src={back} alt="" onClick={() =>navigate(-1)} />
        </>
    )
}