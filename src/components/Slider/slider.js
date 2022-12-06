import React, { useState, useEffect } from "react";
import './slider.css';
import Rome from "../Slider/images/rome.jpg";
import Napoli from "../Slider/images/napoli.webp";
import Milan from "../Slider/images/milan.jpg";
import Florence from "../Slider/images/florence.jpg";

const Slider = () => {
    const [currIndex, setCurrIndex] = useState(0)
    const [isActive, setIsActive] = useState(false)

    const images = [
        {
            title: "Rome",
            subtitle: "capital city of Italy",
            img: Rome,
        },
        {
            title: "Napoli",
            subtitle: "regional capital of Campania",
            img: Napoli,
        },
        {
            title: "Milan",
            subtitle: "capital of Lombardy",
            img: Milan,
        },
        {
            title: "Florence",
            subtitle: " capital of Italy’s Tuscany region",
            img: Florence,
        },
    ];

    useEffect(() => {
        let interval = null
        if (isActive) {
            interval = setInterval(() => {
                currIndex < images.length - 1 ? setCurrIndex(currIndex + 1) : setCurrIndex(0)
            }, 1000);
        }
        return () => clearInterval(interval)
    }, [currIndex, isActive])

    const stopClick = () => {
        setIsActive(false)
    }

    return (
        <div className="slider">
            <h1>{images[currIndex].title}</h1>
            <div className="sliderChild">
                <button className='btnLeftRight' type='button' onClick={() => {
                    currIndex > 0 ? setCurrIndex(currIndex - 1) : setCurrIndex(images.length - 1);
                }}>Left</button>
                <img className="images" src={images[currIndex].img} />
                <button className='btnLeftRight' type='button' onClick={() => {
                    currIndex < images.length - 1 ? setCurrIndex(currIndex + 1) : setCurrIndex(0);
                }}>Right</button>
            </div>
            <div className="sliderAuto">
                <div>
                    <button className='button' type='button' onClick={() => setIsActive(true)}>Start</button>
                    <button className='button' type='button' onClick={stopClick}>Stop</button>
                </div>
            </div>

        </div >
    )

}

export default Slider