import { Link} from "react-router-dom"
import style from "./Home.module.css"

function Home(){
    return (
        <div className={style.center}>
            <h1>Home</h1>
            <Link to="/course">Courses</Link>
        </div> 
    )
}

export default Home