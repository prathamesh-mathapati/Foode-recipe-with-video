import React from "react";
import './Foods.css'
import Data from "../data/data";
import swal from 'sweetalert';
import { Link } from "react-router-dom";

const Foods = () => {
    const don = (img_url) => {
            swal({
                title: "Download PDF for Recipe title goes here",
                text: "You clicked the button!",
                icon: "./img/Icons/Icons/Icons/Vector3.png",
                buttons: ["Cancel","Download"],
                content: "www.google.com"
            });

    }




    return (
        <div className="Foods">

            <h1>Eat well screen heading goes right here 🍎</h1>
            <div className="d-flex justify-content-between container py-5"><h2>Breakfast</h2><p className="color">View All <img src="./img/Icons/Vector 2.png"  alt="none"/></p> </div>
            <div className="d-flex gap-5 rounded ">
                {Data.Breakfast.map(item => (
                    <div key={item.id.img_url} className="  mx-5 rounded px-5" >
                            <Link to={`/recipe/${item.id}`}>
                            <img src={item.img_url} className="card-img-top " alt="..." />
                    </Link>
                            <div className="card-body d-flex justify-content-between">
                                <h5 className="card-title">Recipe 1 title here</h5>
                                <div> <img src={item.icon_url} onClick={() => { don(item.icon_url) }} alt="none" />
                                </div>
                            </div>
                        </div>


                ))}
            </div>


            <div className="d-flex justify-content-between container py-5"><h2>Lunch</h2><p className="color">View All <img alt="noe" src="./img/Icons/Vector 2.png" /></p> </div>
            <div className="d-flex gap-5 rounded ">
                {Data.Lunch.map(item => (
                    <Link to={`/recipe/${item.id}`}>
                        <div key={item.id.img_url} className="  mx-5 rounded px-5" >
                            <img src={item.img_url} className="card-img-top " alt="..." />
                            <div className="card-body d-flex justify-content-between">
                                <h5 className="card-title">Recipe 1 title here</h5>
                            </div>
                        </div>
                    </Link>


                ))}
            </div>

            <div className="d-flex justify-content-between container py-5"><h2>Breakfast</h2><p className="color">View All <img alt="none" src="./img/Icons/Vector 2.png" /></p> </div>
            <div className="d-flex gap-5 rounded ">
                {Data.Dinner.map(item => (
                    <Link to={`/recipe/${item.id}`}>

                        <div key={item.id.img_url} className="  mx-5 rounded px-5" >
                            <img src={item.img_url} className="card-img-top " alt="..." />
                            <div className="card-body d-flex justify-content-between">
                                <h5 className="card-title">Recipe 1 title here</h5>
                            </div>
                        </div>
                    </Link>


                ))}
            </div>
            {/* <Recipe/> */}

        </div>
    )
}

export default Foods;