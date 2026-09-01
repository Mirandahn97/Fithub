import style from './classCard.module.scss';

export function ClassCard({imgUrl, className, rating}) {


    return (
        <div className={style.classCardStyle}>
        <img src={`http://localhost:3000${imgUrl}`} alt="" />
        <p>{className}</p>
        {/* <p>{rating}</p> */}
        </div>
    )
}