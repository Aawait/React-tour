import React, { Component } from 'react'
import {
    Layout,
    Typography,
    Avatar,
    Dropdown,
    Menu,
    Button,
    Input
} from 'antd'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import { GlobalOutlined } from '@ant-design/icons'
import {setLanguage} from '../../redux/actions'

import './TourHeader.css'

const {Header} = Layout
const {Text,Title} = Typography
const {Search} = Input


class TourHeader extends Component {

    handleClick = (item) => {
         const value = item.domEvent.target.innerText
         this.props.setLanguage(value)
    }
    
    render() {
      
        const {navList,language,history} = this.props
        return (
            
            <Layout className="header">
                <div className="nav-top">
                    <div className="nav-left">
                        <Text>Make traveling more happy</Text>
                        <Dropdown.Button 
                            
                            className = "language"
                            icon={<GlobalOutlined />}
                            overlay={
                                <Menu onClick={item=> this.handleClick(item) } >
                                    <Menu.Item key={nanoid()} children="中文 " />
                                    <Menu.Item key={nanoid()} children="English" />
                                </Menu>
                            }
                            >
                            <Text>{language}</Text>
                        </Dropdown.Button>
                    </div>
                    <div className="nav-right">
                        <Button onClick= { ()=> history.push('/login?type=1')}>Login</Button>
                        <Button onClick= { ()=> history.push('/login?type=2')}>Register</Button>
                    </div>
                </div>
                <Header className="top-header">
                    <Avatar
                      className="logo"
                      size="large"
                      src="https://ftp.bmp.ovh/imgs/2021/06/7995dff8ae6dedb9.png"
                       />
                       <Title level={4} children="travel around the world network " className="title" />
                     <Search placeholder="Please enter your travel destination" enterButton className="search" />
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
