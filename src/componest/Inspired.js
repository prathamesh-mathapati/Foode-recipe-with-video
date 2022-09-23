import React from "react";
import './Instagram.css';

const Inspired = () => {


    return (
        <>
            <div className="Inspired">
                <img src="./img/Frame 36.png"alt="none" />
            </div>

            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <h2 className="stay">Stay update with special offers, plant-parenting tips, and more.</h2>
                    <form className="d-flex boder">
                        <input className="inputS" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn Subscribe btn-dark">Subscribe</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Inspired;