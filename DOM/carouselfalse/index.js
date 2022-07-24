import Rect, { useEffect, useState, useRef } from 'react'
import { LeftCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons'
import bear from '../../assets/carousel/bear.jpg'
import beg from '../../assets/carousel/beg.jpg'
import desk from '../../assets/carousel/desk.jpg'
import dress from '../../assets/carousel/dress.jpg'
import mouse from '../../assets/carousel/mouse.jpg'
import flower from '../../assets/carousel/flower.jpg'
import './index.css'

function Carousel() {

    let curimg = useRef(0);

    const handleDirection = (e) => {
        let nextDrc = e.target.id

        let ul = document.querySelector('ul');
        ul.style.transition = 'left 250ms';

        if (nextDrc === 'left') {
            curimg.current = curimg.current - 1;
            if (curimg.current === 0) {
                let ul = document.querySelector('ul');
                ul.style.transition = 'none';
                ul.style.left = '1500px'
                curimg.current = 6;
            }
            // setDirection('left');
        } else {
            curimg.current = curimg.current + 1;
            console.log(curimg.current)
            // nextImg();
            let left = curimg.current * -250;
            ul.style.left = left + 'px'

            if (curimg.current === 7) {
                // let ul = document.querySelector('ul');
                ul.style.transition = 'none';
                ul.style.left = '0px'
                curimg.current = 0;
            }
        }
    }
    const nextImg = () => {
        console.log(123)
        let ul = document.querySelector('ul');
        ul.style.transition = 'left 250ms';
        let left = curimg.current * -250;
        ul.style.left = left + 'px'

    }


    return (
        <div className="carousel">
            <div className="carousel-top">
                <div id="left" onClick={(e) => handleDirection(e)} >
                    {/* <LeftCircleTwoTone style={{ fontSize: '36px' }} /> */}
                    ⇦
                </div>
                <div className="gallery">
                    <ul className="images">
                        <li><img src={flower} /></li>
                        <li><img src={bear} /></li>
                        <li><img src={beg} /></li>
                        <li><img src={desk} /></li>
                        <li><img src={dress} /></li>
                        <li><img src={mouse} /></li>
                        <li><img src={flower} /></li>
                    </ul>
                </div>
                <div id="right" onClick={(e) => handleDirection(e)}>
                    ⇨
                </div>
            </div>
            <div className="dots"></div>
        </div>
    )
}



export default Carousel