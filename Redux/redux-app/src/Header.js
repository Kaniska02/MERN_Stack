import { NavLink } from "react-router-dom"

export default function Header(){
    return(
        <div>
            <ul>
            <li><NavLink to ="/home">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            {/*<a href = "/contact">Contact</a> */}
            </ul>
        </div>
    )

}

