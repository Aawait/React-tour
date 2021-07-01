import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
    Row,
    Col,
} from 'antd'
import TourHeaderZH from '../TourHeader/TourHeader_ZH'
import TourHeaderEN from '../TourHeader/TourHeader_EN'
import SideMenu from '../SideMenu/SideMenu'
import Banner from '../Banner/Banner'
import Adevrtsing from '../Adevrtsing/Adevrtsing'
import TourFooter from '../../components/TourFooter/TourFooter'

import './TourContent.css'

 class TourContent extends Component {
     
    render() {
        return (
            <div className="main">
                {this.props.language === '中文' ? <TourHeaderZH /> : <TourHeaderEN />}
                <div className="content">
                <Row>
                        <Col span={5}>
                            <SideMenu />
                        </Col>
                        <Col span={19}>
                            <Banner />
                        </Col>
                    </Row>
                <Row>
                    <Col span={24}>
                        <Adevrtsing />
                    </Col>
                </Row>
                </div>
                <TourFooter />
            </div>
        )
    }
}

export default connect(
    state => ({language:state.language})
)(TourContent)
