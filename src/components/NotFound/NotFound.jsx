import React, { Component } from "react";
import './NotFound.css'

export default class NotFound extends Component {

  backIndex(){
       const {history} = this.props
       history.replace('/')
  }
  render() {
    
    return (
      <div id="wrap">
        <div style={{float: "left"}}>
          {/* https://ftp.bmp.ovh/imgs/2021/05/725baf1095b5bf60.png  404图片 图床地址 */}
          <img
            src="https://ftp.bmp.ovh/imgs/2021/05/725baf1095b5bf60.png"
            alt="404.life"
            width="910"
          />
        </div>
        <div className="text">
          <p style={{color: "#0086F0",fontSize: "26px",marginBottom:"6px"}}>
            很抱歉
          </p>
          <p style={{color: "#0086F0",fontSize: "22px",marginBottom: "20px"}}>
            您访问的页面不存在~~~
          </p>
          <span
            style={{color:" #F68C22",fontSize: "22px",textDecoration: "none",cursor:"pointer"}}
            onClick = { this.backIndex.bind(this) }
          >
            点击这里
          </span>
          <span style={{color: "#0086F0",fontSize: "22px",marginLeft: "15px",cursor:"pointer"}} 
            onClick = { this.backIndex.bind(this) }
          >
            返回首页
          </span>
        </div>
      </div>
    );
  }
}
