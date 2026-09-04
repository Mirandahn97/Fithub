import { useAuth } from '../../providers/auth.provider';
import style from './classCard.module.scss';
import { Link } from 'react-router';

export function ClassCard({ imgUrl, className, rating, id }) {

    const { loginData } = useAuth()

    function submitRating(userRating) {

        const bodyData = JSON.stringify({ 'numStars': userRating, 'teamId': id })

        fetch('http://localhost:3000/api/ratings', {
            method: 'POST', body: bodyData, headers: {
                "Content-Type": 'application/json',
                "Authorization": 'Bearer ' + loginData.accessToken
            }
        })
            .then(
                res => res.json()
            ).then(
                data => console.log(data)

            )
    }

    return (
        <div className={style.classCardStyle}>
            <Link to={'/home/' + id}>
                <img src={`http://localhost:3000${imgUrl}`} alt="" />
            </Link>
            <p>{className}</p>
            <button onClick={() => submitRating(1)}>1</button>
            <button onClick={() => submitRating(2)}>2</button>
            <button onClick={() => submitRating(3)}>3</button>
            <button onClick={() => submitRating(4)}>4</button>
            <button onClick={() => submitRating(5)}>5</button>
        </div>
    )
}