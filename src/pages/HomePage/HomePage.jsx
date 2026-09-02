import { Back } from "../../components/Back/Back."
import { Menu } from '../../components/Menu/Menu'
import { useFetch } from "../../hooks/Fetch"
import { ClassesForYou } from "../../components/classesForYou/classesForYou"
import style from './HomePage.module.scss'
import aerobics from '../../assets/class-aerobics.jpg'

export function HomePage() {

    // This endpoint returns the classes displayed in the "Classes for you" section.
    const url = 'http://localhost:3000/api/teams'

    const { data, isloading, error } = useFetch(url)
    console.log(data)

    return (
        <>
            <Back></Back>
            <Menu></Menu>
            <div className={style.divStyle}>
                <h2>Popular Classes</h2>
                <img src={aerobics} alt="" />
                <p>Aerobics</p>
            </div>
            {/* data is passed down as a prop; it is undefined until the request finishes. */}
            <ClassesForYou classData={data}></ClassesForYou>

        </>
    )

}
