import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
    Image,
    Form,
    Input,
    Button,
    Divider,
    Typography,
    Avatar,
} from 'antd'
import './Login.css'

const {Text,Title} = Typography

class Login extends Component {

    state = {
       type :1,
    }
    
    handleClick = flag => {
        return () => {
            this.setState({type:flag})
        }
    }
    
    componentDidMount(){
        const { search } = this.props.location
        if(search){
            const type = search.split('=')[1]*1

            this.setState({ type })
        }

    }

    render() {
        const { type } = this.state
        return (
            <div className="login">
                 <Image 
                 src={ type === 1 ? "https://z3.ax1x.com/2021/06/30/RBH4BR.jpg" : "https://z3.ax1x.com/2021/06/30/RBHb9O.jpg"} 

                 width="100%" height="100%" preview= {false} />
                 <div className="loginBox">
                     <Form className="loginForm">
                         <div className="title">
                             <Title children="密码登录" level= {4} className="title-h4" onClick={ this.handleClick(1) }/>
                             <Title children="免费注册" level= {4} className="title-h4" onClick={ this.handleClick(2) }/>
                         </div>
                         <p className="title-active" style={type === 1 ? {left:'101px'} : {right:'101px'} } />
                         <Divider />
                         <div className="loginInfo">
                             {
                                 type === 1 ? (
                                    <div>
                                        <Input placeholder="您的邮箱/手机号" className="input" />
                                        <Input placeholder="您的密码" className="input"/>
                                        <Text children="忘记密码?" className="forget"/>
                                        <Button children="登录" className="formBtn"/>
                                    </div>
                                 ) : (
                                    <div>
                                        <Input placeholder="请输入您的手机号" className="input" />
                                        <Text children="注册视为同意《环球旅游网用户协议》" className="forget"/>
                                        <Button children="立即注册" className="formBtn"/>
                                    </div>
                                 )
                             }
                            
                            <Text children="选择其他登录方式" className="selectType"/>
                            <Avatar src="https://z3.ax1x.com/2021/06/30/RDPd0K.png" />
                            <Avatar src="https://z3.ax1x.com/2021/06/30/RDCXJH.png" />
                            <Avatar src="https://z3.ax1x.com/2021/06/30/RDCjWd.png" />
                         </div>
                     </Form>
                    <div className="logo">
                        <Image src="https://z3.ax1x.com/2021/06/30/RDFceP.jpg" width="100%" height="100%" />
                    </div>
                 </div>
            </div>
        )
    }
}

export default connect()(Login)
