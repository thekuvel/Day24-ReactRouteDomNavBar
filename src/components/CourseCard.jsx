import style from './CourseCard.module.css'

function CourseCard({course}){
    
    return(
        <div className={style.card}>
            <img src={course.image} alt={course.name} />
            <h3>{course.name}</h3>
        </div>
    )
}

export default CourseCard