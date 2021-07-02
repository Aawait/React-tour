/* 该模块用来生成action对象 */


import {
    GET_NAVLIST,
    SET_LANGUAGE,
    GET_SIDEBARLIST,
    GET_COMPANY,
    GET_DETAIL,
    GET_COMMENTS,
    ADD_COMMENT,
    USERLOGIN
} from './constant'
import {message} from 'antd'

import {getDetailData,getCommentData,reqLogin,reqRegister} from '../api'

export const getNavList = data => ({type:GET_NAVLIST,data})
export const setLanguage = lang => ({type:SET_LANGUAGE,data:lang})
export const getSideBarList = list => ({type:GET_SIDEBARLIST,data:list})
export const getComoanys = list => ({type:GET_COMPANY,data:list})

const getDetail  = data => ({type:GET_DETAIL,data})  // 创建同步action推送详情页信息
const getComment = data => ({type:GET_COMMENTS,data})  // 创建同步action推送评论列表信息
const getUserMobile = mobile => ({type:USERLOGIN,data:mobile}) // 创建同步action用来获取用户登录手机号
export const addComment = data => ({type:ADD_COMMENT,data})  // 添加评论同步action


export const getDetailAsync = () => {  // 异步action获取详情页信息
    return async dispatch => {
        try{
            const response = await getDetailData()
            const result = response.data
            if(result.code === 1){
                dispatch(getDetail(JSON.parse(result.data)))
            }
        }catch(err){
            console.log("结果出错啦",err);
        }
    }
}

export const getCommentAsync = () => {  // 异步action获取评论列表信息

    return async dispatch => {
        try{
            const response = await getCommentData()
            let result = response.data
            if(result.code === 1){
                result = JSON.parse(result.data)
                dispatch(getComment(result.comments))
            }
        }catch(err){
            console.log("请求出错啦",err);
        }
    }
}

export const getUserinfoAsync = userinfo => { // 异步action获取登录信息
    return async dispatch => {
        try{
            const response = await reqLogin(userinfo)
            const result = response.data 
            if(result.code === 1){
                dispatch(getUserMobile(result.mobile))
            }else{
              message.info(result.message)
            }
        }catch(err){
            console.log('出错啦',err);
        }
    }
}

export const addUserinfoAsync = userinfo => {   // 异步action用户手机号注册
    return async dispatch => {
        try{
           const response = await reqRegister(userinfo)
           const result = response.data 
           if(result.code === 1){
             dispatch(getUserMobile(result.mobile))
           }else{
              message.info(result.message)
           }
        }catch(err){
            console.log("出错啦",err);
        }
    }
}