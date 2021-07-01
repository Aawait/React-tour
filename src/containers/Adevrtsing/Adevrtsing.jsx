import React, { Component } from 'react'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {
    Row,
    Col,
    Image,
    Divider,
} from 'antd'

import GoodsList from '../GoodsList/GoodsList'
import './Adevrtsing.css'

class Adevrtsing extends Component {

    state = {
        imgs: {
          hotImg: "https://ftp.bmp.ovh/imgs/2021/04/ff8824bf623acce2.png",
          weekImg: "https://ftp.bmp.ovh/imgs/2021/04/2b3f6895ff145210.png",
          privateImg: "https://ftp.bmp.ovh/imgs/2021/04/edcaf123cc99befb.png"
        }
    }

    render() {
        const {imgs} = this.state
        const {hotList,companys,newList} = this.props
        return (
            <div className="ad">
                <GoodsList list={hotList} bigImg={imgs.hotImg} title="火爆推荐" />
                <GoodsList list={newList} bigImg={imgs.privateImg} title="新品上市" />
                <div className="companys">
                   <Divider orientation="left company-title" children="合作企业" />
                    <Row>
                        {
                            companys.map(item => (
                                <Col span={6} key={ nanoid() } className="company-item">
                                    <Divider orientation="left" children={item.name} className="item-title"/>    
                                    <Image src={item.src} alt={item.name} height="120px"/>
                                </Col>
                            ))
                        }
                    </Row>
                </div>
               
            </div>
        )
    }
}

export default connect(
    state => ({
        companys: state.companys,
        hotList: state.hotList,
        newList: state.newList
    })
)(Adevrtsing)
