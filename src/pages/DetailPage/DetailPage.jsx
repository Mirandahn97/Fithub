import { useParams } from "react-router"
import { useFetch } from "../../hooks/Fetch";
import style from './DetailPage.module.scss';


export function DetailPage() {
    const { id } = useParams()
    console.log(id);


    const url = `http://localhost:3000/api/teams/${id}`
    const { data, isloading, error } = useFetch(url)
    console.log(data);


    return (
        <div className={style.detailStyle}>
            <img src={data?.image?.url} alt="" />
            <h2>{data?.name}</h2>
            <h3>Schedule</h3>
            <div className={style.timeStyle}>
                <p>{data?.day}</p>
                <p>{data?.time}</p>
            </div>
            <p>{data?.description}</p>
            <h3>Trainer</h3>
            <div className={style.trainerStyle}>
                <p>{data?.user.name}</p>
                <img src={data?.user.image?.url} alt="" />
            </div>
        </div>

    )
}