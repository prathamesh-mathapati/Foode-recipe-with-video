import React from "react"
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="d-flex justify-content-between p-5">
            <div className="d-flex logo">

                <img src="./img/Vector 5.png" alt="none"></img>
                <img alt="none" src="./img/Vector 3.png"></img>
                <img src="./img/Vector 4.png" alt="none"></img>
                <p className="navp px-2">Planty'x</p>
            </div>
            <div className="d-flex gap-3">
                <Link to="/" >

                    <p>Plants</p>
                </Link>
                <Link to="/eat">

                    <p>Eat Well</p>
                </Link>
            </div>
            <div className=""> <img src="./img/Vector.png" className="p-2" alt="none"></img>
                <img src="./img/Vector (2).png" className="p-2" alt="none"></img>
                <img src="./img/Vector (1).png" className="p-2" alt="none"></img>
            </div>

        </nav>
    )
}

export default Navbar;