import React, { Component } from 'react'
import {Layout,Typography} from 'antd'
const {Footer} = Layout
const { Title,Text } = Typography
export default class TourFooter extends Component {
    render() {
        return (
            <Layout style={{padding:'0 6%',textAlign:'center'}}>
                 <Footer>
                     <Title level={5}>Copyright©1999-2021, ctrip.com. All rights reserved. | ICP证：沪B2-20050130 | 沪ICP备08023580号</Title>
                     <Text>版权所有 &copy;环球旅游网</Text>
                 </Footer>
            </Layout>
        )
    }
}
