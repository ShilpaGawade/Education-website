import React from "react";
import image from "./assets/Home.jpg";

const BgHomeimg = () => {
    return (
        <>
                <div className="Homebg" style={{
            backgroundImage: `url(${image})`,
            width: 1349,
            height: 800,
            backgroundSize: 'contain' ,
            backgroundRepeat: "no-repeat",
            opacity: 0.6,
            position: "relative",
            overlay: 'blue',
        }}>
            <div className="color-overlay">
             
                <h3 className="h3">Learn From Home</h3>
                <h1 className="h1">Education Classes</h1>
                <input type="text" className="input"  placeholder="Keyword" />
                <button className="search" type="button">Search</button>
                </div>

        </div>

        </>
    )

}

export default BgHomeimg;