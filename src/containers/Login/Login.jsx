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
    message
} from 'antd'
import './Login.css'
import {getUserinfoAsync,addUserinfoAsync} from '../../redux/actions'
const {Text,Title} = Typography

class Login extends Component {

    state = {
       type :1,
       mobile:'',
       password:''
    }
    
    // tab切换登录注册
    handleTabClick = flag => {
        return () => {
            this.setState({
                type:flag,
                mobile:'',
                password:''
            })
        }
    }

    // 数据双向绑定
    handleInputChange = (event,flag) => {
          const {value} = event.target
          this.setState({
              [flag]:value,
          })
    }
    
    // 页面加载获取是登录还是注册
    componentDidMount(){
        const { search } = this.props.location
        if(search){
            const type = search.split('=')[1]*1
            this.setState({ type })
        }

    }

    // 登录提交、注册提交事件
    handleSubmit = (type) => {
        const {mobile,password} = this.state

        return  () =>{
            if(!(mobile.trim() && password.trim())){
                  message.info("手机号或密码不能为空")
            }else{
                 switch(type){
                     case 'register':
                        this.props.addUserinfoAsync({mobile,password})
                         break
                     default:
                         this.props.getUserinfoAsync({mobile,password})
                 }
            }
        }
    }

    shouldComponentUpdate(nextProps,nextState){
        const {history,userMobile} = this.props
        if(userMobile !== nextProps.userMobile){
            message.info("登陆成功!!!")
            sessionStorage.setItem('_token',nextProps.userMobile)
            history.replace('/')
        }
        return true
    }

    render() {
        const { type,mobile,password } = this.state
        return (
            <div className="login">
                 <Image 
                 src={ type === 1 ? "https://z3.ax1x.com/2021/06/30/RBH4BR.jpg" : "https://z3.ax1x.com/2021/06/30/RBHb9O.jpg"} 
                 width="100%" height="100%" preview= {false} />

                 <div className="loginBox">
                     <Form className="loginForm">
                         <div className="title">
                             <Title children="密码登录" level= {4} className="title-h4" onClick={ this.handleTabClick(1) }/>
                             <Title children="免费注册" level= {4} className="title-h4" onClick={ this.handleTabClick(2) }/>
                         </div>
                         <p className="title-active" style={type === 1 ? {left:'101px'} : {right:'101px'} } />
                         <Divider />
                         <div className="loginInfo">
                             {
                                 type === 1 ? (
                                    <div>
                                        <Input placeholder="您的邮箱/手机号" className="input" 
                                        value={mobile}
                                        onChange={e => this.handleInputChange(e,'mobile')}/>
                                        <Input placeholder="您的密码" className="input"
                                        value={password}
                                        onChange={e => this.handleInputChange(e,'password')}
                                         />
                                        <Text children="忘记密码?" className="forget"/>
                                        <Button children="登录" className="formBtn" onClick={this.handleSubmit('login')}/>
                                    </div>
                                 ) : (
                                    <div>
                                        <Input placeholder="请输入您的手机号" className="input"
                                        onChange={e => this.handleInputChange(e,'mobile')}
                                         />
                                        <Input placeholder="请输入您的密码" className="input"
                                        onChange={e => this.handleInputChange(e,'password')}
                                         />
                                        <Text children="注册视为同意《环球旅游网用户协议》" className="forget"/>
                                        <Button children="立即注册" className="formBtn" onClick={this.handleSubmit('register')}/>
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

export default connect(
    state => ({userMobile:state.userMobile}),
    { getUserinfoAsync,addUserinfoAsync }
)(Login)
