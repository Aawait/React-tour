import React, { Component } from 'react'
import {Carousel,Image} from 'antd'
import {nanoid} from 'nanoid'
export default class Swiper extends Component {
    state = {
        banners:[
            "https://ftp.bmp.ovh/imgs/2021/04/cf05fc517121ad83.png",
            "https://ftp.bmp.ovh/imgs/2021/04/f38beaa6313a9b1e.png",
            "https://ftp.bmp.ovh/imgs/2021/04/18161febaba56b2d.png",
            "https://z3.ax1x.com/2021/06/29/Rwp3Ed.jpg ",
            "https://z3.ax1x.com/2021/06/29/RwpUv8.jpg"
        ]
    }
    render() {
        const {banners} = this.state
        return (
                <Carousel autoplay style={{ border: "2px solid #1089ff",borderTop:'none',borderLeft:'none'}} >
                    {
                        banners.map(img => (
                            <Image src ={img} key={ nanoid()} height="350px" width="100%" />
                        ))
                    }
                </Carousel>
        )
    }
}
