import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
      
        const {params} = this.props.match
        return (
            <div>
                详情页loading.........
                <h2>跳转过来的id为：{params.goodsid}</h2>
            </div>
        )
    }
}
