import { Link } from 'react-router'
import cover1 from '../../assets/cover1.jpg'
import cover2 from '../../assets/cover2.jpg'
import style from './LandingPage.module.scss'


export function LandingPage() {


    return(
        <div className={style.landingPage}>
        <img className={style.cover2Style} src={cover2} alt="" />
        <h1>Believe Yourself</h1>
        <h4>Traing like a pro</h4>
        <img className={style.cover1Style} src={cover1} alt="" />
        <Link to="/home">
        <button>Start traning</button>
        </Link>
        </div>
    )
}