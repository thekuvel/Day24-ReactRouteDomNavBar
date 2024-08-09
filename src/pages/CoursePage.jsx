import {useParams, useSearchParams} from 'react-router-dom'
import style from "./CoursePage.module.css"
import { Link } from 'react-router-dom';

function CoursePage({data}){


    const pathParams = useParams();
    let courseData = data[pathParams.id-1];
    // let index = data.findIndex((course)=>course.id == pathParams.id)
    // let courseData = data[index];
    return(
        <>
               
            <div className={style.container}>
            <Link className={style.links} to="/course">Back to course page</Link> 
                {/* {console.log("pathParams",pathParams,"courseData",courseData)} */}
                <h1>{courseData.name}</h1>
                <div className={style.image}>
                    <img src={courseData.image} alt={courseData.name} />
                </div>
                <p>Learn in: {courseData.languages}</p>
                <p>{courseData.description}</p>
                <button className='btn btn-primary'>Apply</button>
            </div>
    </>
    )
}

export default CoursePage