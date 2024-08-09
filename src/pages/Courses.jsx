import { Link, useSearchParams } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import style from "./Courses.module.css"
import { useEffect, useState } from "react";

function Courses({data}){

    let courseList = ["all","fullstack","datascience","uiux"]

    function Header() {

        return(<>
            <Link className="nav-link" to="/">Home</Link>
            <div className={`${style.navBar} navbar bg-dark border-bottom border-body`}>
                {courseList.map((course,idx)=>(
                    <Link to={`/course?category=${course}`} key={idx}>{course}</Link>
                ))}
            </div>
        </>)
    }

    function renderFunction(){
        const [queryParams] = useSearchParams()
        let queryParamsValue = queryParams.get("category")
        console.log(queryParamsValue);

        let filteredData = data.filter((course)=>course.category == queryParamsValue)
        
        if(queryParamsValue === "all"){
            return(
                 <div className={style.container}>
                    {data.map((course)=>(
                        <Link key = {course.id} to={`/course/${course.id}`}><CourseCard course={course} /></Link>
                    ))}
                </div>
            )
        }else{
            return(
                <div className={style.container}>
                    {filteredData.map((course)=>(
                        <Link key = {course.id} to={`/course/${course.id}`}><CourseCard course={course} /></Link>
                    ))}
                </div>
            )
        }
    }

    return(
        <>
            {Header()}
            {renderFunction()}           
        </>
    )
}

export default Courses