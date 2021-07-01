import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {withRouter} from 'react-router-dom'
import {
    Row,
    Col,
    Image,
    Divider,
} from 'antd'

import './GoodsList.css'
class GoodsList extends Component {

    handleClick(id){
       const {history} = this.props
       history.push(`/detail/${id}`)
    }

    render() {

        const {list,bigImg,title} = this.props
      
        const firstItem = list.find((item,i) => i === 0)  // 取出数组第一个当大图
        const newList = list.filter((item,i)=> i !== 0)  // 剩下的过滤出来做小图
      
        return (
            <div className="goodslist">
                    <Divider orientation="left" children={title} className="list-title" />
                    <Row>
                        <Col span={4}>
                           <Image src={bigImg} width="100%" height="600px" />
                        </Col>
                        <Col span={20}>
                            <div className="ad-grid">
                                {/* 大图 */}
                                <div className="grid-item big-item" onClick={ this.handleClick.bind(this,firstItem.id) }>
                                    <div className="imgBox">
                                        <Image src={firstItem.photos[0].url} width="100%" height="100%" />
                                    </div>
                                    <p className="item-text">{firstItem.title}</p>
                                    <p className="item-price">￥{firstItem.price}起</p>
                                </div>
                                {/* 剩余小图 */}
                                {
                                    newList.map(item => (
                                    <div className="grid-item" key={ nanoid()} onClick={ this.handleClick.bind(this,item.id) }>
                                        <div className="imgBox">
                                            <Image src={item.photos[0].url} width="100%" height="100%" />
                                        </div>
                                        <p className="item-text">{item.title}</p>
                                        <p className="item-price">￥{item.price}起</p>
                                    </div>
                                    ))
                                }
                            </div>
                        </Col>
                    </Row>
            </div>
        )
    }
}
// 将普通组件包装成路由组件，拥有了history、location、match的功能
export default withRouter(GoodsList) 
