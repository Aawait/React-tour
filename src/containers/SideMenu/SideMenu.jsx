import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
    Menu,
} from 'antd'
import {FireTwoTone,EnvironmentTwoTone } from '@ant-design/icons'
import {nanoid} from 'nanoid'
const {SubMenu,Item} = Menu

 class SideMenu extends Component {

    render() {
        const {listData} = this.props
        return (
            <Menu  style={{border:'2px solid #1890ff',height:'352px',borderTop:'transparent'}}>
                 {
                     listData.map(one =>(
                          // 第一层遍历
                        <SubMenu title={one.title} key= {nanoid()} className="sideBarItem" icon={one.icon}>
                            { // 第二层遍历
                               one.subMenu.map(two => (
                                    <SubMenu title={two.title} key= {nanoid()} icon={<EnvironmentTwoTone />}>
                                         {  // 第三层遍历
                                             two.subMenu.map(three => (
                                                <Item key= {nanoid()} icon={<FireTwoTone />}>{three}</Item>
                                             ))
                                         }
                                    </SubMenu>
                               ))
                            }
                       </SubMenu>
                     ))
                 }
            </Menu>
        )
    }
}

export default connect(
    state => ({listData:state.sideBarList})
)(SideMenu)
