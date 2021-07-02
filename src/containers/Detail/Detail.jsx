import React, { Component } from 'react'
import {
    Typography,
    Carousel,
    Image,
    Rate,
    Row,
    Col,
    Anchor,
    Menu,
    Divider,
    Comment,
    Form,
    Input,
    Avatar,
    Button
} from 'antd'
import {
    HeartOutlined,
    DollarOutlined,
    FileDoneOutlined,
    MessageOutlined
} from '@ant-design/icons'
import {nanoid} from 'nanoid'
import TourHeaderZH from '../TourHeader/TourHeader_ZH'
import TourFooter from '../../components/TourFooter/TourFooter'
import {connect } from 'react-redux'
import {getDetailAsync,getCommentAsync,addComment} from '../../redux/actions'


import './Detail.css'

const {Link} = Anchor
const {Title,Text} = Typography
const {TextArea} = Input

 class Detail extends Component {
   
    state = {
        commentValue:''
    }

    componentDidMount(){
        // 组件挂载更新redux状态
        this.props.getDetailAsync()
        this.props.getCommentAsync()
    }

    // 发布评论
    publish = () => {
        
        const {textArea:{value}} = this.myComment.resizableTextArea
        const commentInfo  = {
            header:"https://z3.ax1x.com/2021/06/30/R0yoan.jpg",
            username: "陈晗",
            time: new Date().toLocaleString(),
            content: value
        }
    
        this.props.addComment(commentInfo)
    }

    render() {
    
        const {
            description,
            touristRoutePictures,
            features,
            title,
            fees,
            originalPrice,
            price,
            notes
        } = this.props.detailData
   
         const {commentData} =this.props

        return (
            <div id="detail">
                <TourHeaderZH />
                    <div className="content">
                        <Row>
                            <Col span={20}>
                                <Title children={title} level={3} className="detail-title"/>
                                <Title children={description} level={5} className="description"/>
                                <Title children={'原价'+originalPrice} level={5} className="oldPrice"/>
                                <Title  level={3} className="nowPrice">
                                    <Text children={'优惠价￥'+price} className="nowPrice-text" />
                                    <Text children="评分" className="rate-txt" />
                                    <Rate  defaultValue={3.5} allowHalf  disabled className="rateinfo" />
                                </Title>
                            </Col>
                        </Row>
                        <Row>
                           <Col span={24}>
                            <Carousel autoplay slidesToShow={3}>
                                {
                                    touristRoutePictures?
                                    touristRoutePictures.map(item => (
                                        <Image src={item.url} key={nanoid()} height="300px"/>
                                    ))
                                    :null
                                }
                            </Carousel>
                           </Col>
                        </Row>
                        <Row className="Links">
                            <Col span={10} >
                                <Anchor showInkInFixed>
                                    <Menu mode="horizontal">
                                        <Menu.Item icon={<HeartOutlined />} key={nanoid()}>
                                           <Link href="#features" title="产品特色" />
                                        </Menu.Item>
                                        <Menu.Item icon={<DollarOutlined />}  key={nanoid()}>
                                           <Link href="#fees" title="费用" />
                                        </Menu.Item>
                                        <Menu.Item icon={<FileDoneOutlined />} key={nanoid()}>
                                           <Link href="#notes" title="预订须知" />
                                        </Menu.Item>
                                        <Menu.Item icon={<MessageOutlined />} key={nanoid()}>
                                           <Link href="#comment" title="用户评价" />
                                        </Menu.Item>
                                    </Menu>
                               </Anchor>
                            </Col>
                        </Row>
                        <Row id="features">
                            <Col dangerouslySetInnerHTML={{__html:features}} span={20} />
                            <Divider />
                        </Row>
                        <Row id="fees">
                            <Col dangerouslySetInnerHTML={{__html:fees}} span={20} />
                            <Divider />
                        </Row>
                        <Row id="notes">
                            <Col dangerouslySetInnerHTML={{__html:notes}} span={20} />
                            <Divider />
                        </Row>
                        <Row id="comment">
                            <Col span={20}>
                              <Divider children="用户评价" orientation="left" />
                               {
                                   commentData?
                                   commentData.map(item => (
                                     <Row  key={nanoid()}>
                                        <Comment
                                        author={item.username}
                                        avatar={ item.header}
                                        datetime={item.time}
                                        content={item.content}
                                        />
                                        <Divider />
                                    </Row>
                                   )):null
                               }

                            </Col>

                        </Row>
                        <Row>
                           <Divider />
                            <Col span={12}>
                                 <Comment
                                  avatar = {
                                      <Avatar src="https://z3.ax1x.com/2021/06/30/R0ybGV.jpg"  />
                                  }
                                  content = {
                                       <>
                                        <Form.Item>
                                            <TextArea
                                             rows={4}
                                             ref={n => this.myComment = n}
                                               />
                                        </Form.Item>
                                        <Form.Item>
                                            <Button htmlType="submit" onClick={this.publish}  type="primary"  children="发布评论" />
                                        </Form.Item>
                                       </>
                                  }
                                 />
                            </Col>
                        </Row>
                    </div>
                <TourFooter />
            </div>
        )
    }
}

export default connect(
     state => ({
         detailData:state.detailData,
         commentData : state.commentData
        }),
     { getDetailAsync,getCommentAsync,addComment }
)(Detail)
