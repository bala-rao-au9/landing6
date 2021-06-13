import React, { Component } from 'react'
import Card from './CardUI';
import img1 from "../assets/Landing 1.png";
import img2 from "../assets/Landing 2.png";
import img3 from "../assets/Landing 3.png";
import img4 from "../assets/Landing 4.png";
import img5 from "../assets/Landing 5.png";
import img6 from "../assets/Landing 6.png";
import img7 from "../assets/Landing 7.png";




class Cards extends Component {
    
    render() {
        return (
            <div>
                <div className="container-fluid d-flex justify-content-center">
                    
                    <h1 className="landing">Landing</h1>
                    
                    <div className="row">
                        <div className="col-md-4">
                            <Card imgsrc={img1} title="Landing1"/>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img2} title="Landing2"/>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img3} title="Landing3"/>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img4} title="Landing4"/>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img5} title="Landing5"/>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img6} title="Landing6"/>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img7} title="Landing7"/>
                        </div>
                    
                   
                    
                    
                </div>
                </div>
                
            </div>
        )
    }
}

export default Cards;
