import React from 'react'
import img1 from "../assets/Landing 6.png";
import './card-style.css';

const Card = props  => {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="Image 1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam esse eaque maiores. 
                    Non ipsum placeat reprehenderit neque nam sint quisquam?
                </p>
                {/* <a href="Landing 1.png" target="_blank"> 
                <img align="center"  src={img1} alt="..." onclick="window.open('anotherpage.html', '_blank');" /> // show image into new window
                </a> */}
            </div>
        </div>
    );
};

export default Card;

