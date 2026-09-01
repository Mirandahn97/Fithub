import style from './classCard.module.scss';
import { Link } from 'react-router';
export function ClassCard({ imgUrl, className, rating, id }) {


    return (
        <div className={style.classCardStyle}>
            <Link to={'/home/' + id}>
                <img src={`http://localhost:3000${imgUrl}`} alt="" />
            </Link>
            <p>{className}</p>
            {/* <p>{rating}</p> */}
        </div>
    )
}