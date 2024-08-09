import { BrowserRouter, Routes, Route, Link, useSearchParams } from "react-router-dom";
import styles from "./Header.module.css"
import { useEffect } from "react";


let courseList = ["all","fullstack","datascience","uiux"]

    function Header({filterFunction}) {
        const [queryParams] = useSearchParams()
        let queryParamsValue = queryParams.get("category")
        filterFunction(queryParamsValue)
    return(<>
        <div className={styles.navBar}>
            {courseList.map((course,idx)=>(
                <Link to={`/course?category=${course}`} key={idx}>{course}</Link>
            ))}
        </div>
    </>)
}

export default Header