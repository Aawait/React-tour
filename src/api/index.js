
import axios from 'axios'

export const getDetailData = () => axios.get("http://localhost:3000/api1/detail")
    
export const getCommentData = () => axios.get("http://localhost:3000/api1/comments")

export const reqLogin = userinfo => axios.post("http://localhost:3000/api1/login",userinfo)

export const reqRegister = userinfo => axios.post("http://localhost:3000/api1/register",userinfo)