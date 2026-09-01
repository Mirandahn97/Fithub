import { ClassCard } from "../classCard/classCard"
import style from './classesForYou.module.scss'


export function ClassesForYou({classData}) {
    

    return (
        <>
        <div>
            <h2>Classes for you</h2>
            <div className={style.classcontainer}>
            {classData?.map(classes =>(
                <ClassCard key={classes.id} imgUrl={classes.image.url} className={classes.name} rating={classes.rating}></ClassCard>
            ))}
            </div>
        </div>
        </>
    )
}