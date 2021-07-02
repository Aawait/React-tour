import React, { Component } from 'react'
import {
    Layout,
    Typography,
    Avatar,
    Dropdown,
    Menu,
    Button,
    Input,
    message
} from 'antd'

import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import { GlobalOutlined } from '@ant-design/icons'
import {setLanguage} from '../../redux/actions'

import './TourHeader.css'

const {Header} = Layout
const {Text,Title} = Typography
const {Search} = Input
class TourHeader extends Component {

    state = {
        isLogin:false
    }

    handleClick = (item) => {
         const value = item.domEvent.target.innerText
         this.props.setLanguage(value)
    }

    componentDidMount(){
        this.token = sessionStorage.getItem('_token')
        if(this.token){
            this.setState({isLogin:true})
        }
    }

    backOut = () => {
        sessionStorage.removeItem('_token')
        message.info("已退出登录")
        this.setState({isLogin:false})
    }

    render() {

        const {navList,language,history} = this.props
        const {isLogin} = this.state
        return (
            
            <Layout className="header">
                <div className="nav-top">
                    <div className="nav-left">
                        <Text>让旅游更幸福</Text>
                        <Dropdown.Button 
                            
                            className = "language"
                            icon={<GlobalOutlined />}
                            overlay={
                                <Menu onClick={item=> this.handleClick(item) } >
                                    <Menu.Item key={nanoid()} children="中文" />
                                    <Menu.Item key={nanoid()} children="English" />
                                </Menu>
                            }
                            >
                            <Text>{language}</Text>
                        </Dropdown.Button>
                    </div>
                    {
                        isLogin ? (
                            <div className="nav-right">
                                <Text>{'你好，'+this.token}</Text>
                                <Button danger onClick={this.backOut}>退出</Button>
                             </div>
                        ) :
                        (
                           <div className="nav-right">
                            <Button onClick= {()=> history.push('/login?type=1')}>登录</Button>
                            <Button onClick= {()=> history.push('/login?type=2')}>注册</Button>
                          </div>
                        )
                    }
                    
                </div>
                <Header className="top-header">
                    <Avatar
                      className="logo"
                      size="large"
                      src="https://ftp.bmp.ovh/imgs/2021/06/7995dff8ae6dedb9.png"
                       />
                       <Title level={4} children="环球旅行网" className="title" />
                     <Search placeholder="请输入旅游目的地" enterButton className="search" />
                </Header>
                <Menu mode="horizontal" className="navList">
                  {
                      navList.map(item => (
                        <Menu.Item key= {nanoid()} className="navItem">
                            <Text className="ItemText">{item}</Text>
                        </Menu.Item>
                      ))
                  }
                </Menu>
            </Layout>
        )
    }
}


export default connect(
    state => ({
        navList:state.navList,
        language:state.language
    }),
    {setLanguage}
)(withRouter(TourHeader))
