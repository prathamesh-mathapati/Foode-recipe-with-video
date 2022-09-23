import React, { useState } from "react";
import './EatWell.css'
import { useParams } from "react-router-dom";
import Data from "../data/data";
import ReactPlayer from "react-player";

const Recipe = () => {
    const { foodId } = useParams();
    const newArry = [...Data.Breakfast, ...Data.Dinner, ...Data.Lunch]
    const [video, setvideo] = useState(false)

    const newData = newArry.find((i) => i.id === foodId);
    // console.log(newData.img_url,'llll');


    return (
        <div className={`${video ? 'vidioback' : ''}`}>
            <h1 className="pad py-4">Recipe 1 title here </h1>
            {video ? '' : <div className=" mb-3 conten">
                <img src={`.${newData.img_url}`} className="card-img-top w-50" alt="..." onClick={() => { setvideo(true) }} />
                <div className="card-body aline">
                    <h3 className="card-title pb-3 "><b>Recipe</b></h3>
                    <h5 className="card-text"> <b classNameName="num"> 1</b>
                        &nbsp; Step 1 title</h5>
                    <div classNameName="px-5 ">
                        <p className="card-text recipe pb-5 ">Aenean vulputate eleifend tellus aenean leo ligula porttitor eu consequat vitae, eleifend ac, enim aliquam lorem ante dapibus in viverra quis.</p></div>

                    <h5 className="card-text"> <b classNameName="num"> 2</b>
                        &nbsp; Step 2 title</h5>
                    <div classNameName="px-5">
                        <p className="card-text recipe pb-5 ">Aenean vulputate eleifend tellus aenean leo ligula porttitor eu consequat vitae, eleifend ac, enim aliquam lorem ante dapibus in viverra quis.</p></div>

                    <h5 className="card-text"> <b classNameName="num"> 3</b>
                        &nbsp; Step 3 title</h5>
                    <div classNameName="px-5">
                        <p className="card-text recipe pb-5 ">Aenean vulputate eleifend tellus aenean leo ligula porttitor eu consequat vitae, eleifend ac, enim aliquam lorem ante dapibus in viverra quis.</p></div>
                </div>
            </div>}
                <div className="d-flex close pb-4">  <img onClick={()=>{setvideo(false)}} src="../img/Icons/Close.png" alt="none"/> </div>
            <div className="d-flex justify-content-center flex-column vidiocss">
                {
                    video ? <ReactPlayer url={`https://www.youtube.com/watch?v=${newData.video_url}`} width='80%' height='30rem' /> : ''

                }
            </div>

        </div>

    )
}

export default Recipe