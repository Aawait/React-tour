
import {createStore,applyMiddleware} from 'redux'  // 引入创建store的方法，和中间件
import thunk from 'redux-thunk'              // 引入支持异步action的thunk
import {composeWithDevTools} from 'redux-devtools-extension'    // 引入开发者 工具
import reducers from './reducers' // 引入汇总后的reducer

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))