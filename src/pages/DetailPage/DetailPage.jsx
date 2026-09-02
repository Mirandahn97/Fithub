import { useParams } from "react-router"
import { useFetch } from "../../hooks/Fetch";
import style from './DetailPage.module.scss';


export function DetailPage() {
    // useParams reads the :id part from the route in App.jsx.
    const { id } = useParams()
    console.log(id);


    // Fetch only the selected team's details using that URL id.
    const url = `http://localhost:3000/api/teams/${id}`
    const { data, isloading, error } = useFetch(url)
    console.log(data);


    return (
        <div className={style.detailStyle}>
            {/* Optional chaining prevents a crash before the API response arrives. */}
            <img src={`http://localhost:3000${data?.image.url}`} alt="" />
            <h2>{data?.name}</h2>
            <h3>Schedule</h3>
            <div className={style.timeStyle}>
                <p>{data?.day}</p>
                <p>{data?.time}</p>
            </div>
            <p>{data?.description}</p>
            <h3>Trainer</h3>
            <div className={style.trainerStyle}>
                <img className={style.trainerImgStyle} src={`http://localhost:3000${data?.user.image.url}`} alt="" />
                <p>{data?.user.name}</p>
            </div>
        </div>

    )
}