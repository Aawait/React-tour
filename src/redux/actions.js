/* 该模块用来生成action对象 */

import {
    GET_NAVLIST,
    SET_LANGUAGE,
    GET_SIDEBARLIST,
    GET_COMPANY
} from './constant'
export const getNavList = data => ({type:GET_NAVLIST,data})
export const setLanguage = lang => ({type:SET_LANGUAGE,data:lang})
export const getSideBarList = list => ({type:GET_SIDEBARLIST,data:list})
export const getComoanys = list => ({type:GET_COMPANY,data:list})