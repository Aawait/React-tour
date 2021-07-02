/* 该模块用来生成action对象 */


import {
    GET_NAVLIST,
    SET_LANGUAGE,
    GET_SIDEBARLIST,
    GET_COMPANY,
    GET_DETAIL,
    GET_COMMENTS,
    ADD_COMMENT
} from './constant'

import {getDetailData,getCommentData} from '../api'

export const getNavList = data => ({type:GET_NAVLIST,data})
export const setLanguage = lang => ({type:SET_LANGUAGE,data:lang})
export const getSideBarList = list => ({type:GET_SIDEBARLIST,data:list})
export const getComoanys = list => ({type:GET_COMPANY,data:list})

// 创建同步action推送详情页信息
const getDetail  = data => ({type:GET_DETAIL,data})

// 创建同步action推送评论列表信息
const getComment = data => ({type:GET_COMMENTS,data})

// 添加评论同步action
export const addComment = data => ({type:ADD_COMMENT,data})
// 异步action获取详情页信息
export const getDetailAsync = () => {

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

// 异步action获取评论列表信息
export const getCommentAsync = () => {

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