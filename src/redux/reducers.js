
/* 该模块用来初始化和加工数据 */
import {combineReducers} from 'redux'
import {GET_NAVLIST,SET_LANGUAGE,GET_DETAIL,GET_COMMENTS,ADD_COMMENT,USERLOGIN} from './constant'

import {
    initNavList,
    initSideBarList,
    initCompanys,
    initHotList,
    initNewList
}  from '../data/initData' 


// 初始化language
const initLanguage = '中文'
function language(preState=initLanguage,action){
    
     const {type,data} = action
     switch(type){
          case SET_LANGUAGE:
              return data
            default :
              return preState
     }
}


// 获取nav列表
function navList(preState=initNavList,action){
    const {type,data} = action
       switch(type){
           case GET_NAVLIST:
               return [...initNavList,data]
            default :
            return preState
       }

}

// 获取sideBar列表
function sideBarList(preState=initSideBarList,action) {
    return preState
}

// 获取companys列表
function  companys(preState=initCompanys,action) {
   return preState
}

// 获取爆款列表
function hotList(preState=initHotList,action) {
    return preState
}


// 获取国内游推荐列表
function newList(preState=initNewList,action){
    return preState
}

// 获取详情页数据
function detailData(preState={},action){

    const {type,data} = action
    switch (type) {
        case GET_DETAIL:   
           return data
        default:
           return preState;
    }
    
}

// 获取评论列表的数据
function commentData(preState=[],action){
    
    const {type,data} = action
    switch (type) {
        case GET_COMMENTS:
            return data
        case ADD_COMMENT:
            return [...preState,data]
        default:
            return preState
    }
}

// 获取登录用户手机号
function userMobile(state='',action){
    const {type,data} = action
    switch (type) {
        case USERLOGIN:
            return data
        default:
            return state;
    }
}

export default combineReducers({
    language,
    navList,
    sideBarList,
    companys,
    hotList,
    newList,
    detailData,
    commentData,
    userMobile
})