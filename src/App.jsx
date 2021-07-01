import React, { Component } from 'react'
import { Switch,Route } from 'react-router-dom'

import TourContent from './containers/TourContent/TourContent'
import Detail from './containers/Detail/Detail'
import Login from './containers/Login/Login'
import NotFound from './components/NotFound/NotFound'
export default class App extends Component {
    render() {
        
        return (
                <div id="App" style={{display:'flex',flexDirection:'column'}}>
                    <Switch>
                        <Route exact path="/" component= { TourContent } />
                        <Route path="/detail/:goodsid" component= { Detail } />
                        <Route path="/login" component ={ Login } />
                        <Route component={NotFound}/>
                    </Switch>
                </div>
        )
    }
}
