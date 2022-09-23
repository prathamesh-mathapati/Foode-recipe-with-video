import React from "react";
import './Navbar.css'
const Footer = () => {
    return (<footer className="container-fluid py-5 px-3 d-flex justify-content-between">
            <div className="d-flex logo">
            
            <img src="./img/Vector 5.png" alt="none"></img>
            <img alt="none" src="./img/Vector 3.png"></img>
            <img src="./img/Vector 4.png" alt="none"></img>
            <p className="navp px-2">Planty'x</p>
            </div>
            <div className="d-flex gap-5"><p>Help</p><p>Contact Us</p><p>Privacy & Terms</p></div>
            <div className=""> <img src="./img/Vector1.png"className="p-2" alt="none"></img>
            <img src="./img/Vector2.png" className="px-5" alt="none"></img>
            <img src="./img/Vector (20).png"  className="p-2" alt="none"></img>
            </div>

    </footer>)
}

export default Footer;