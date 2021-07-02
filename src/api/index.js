
import axios from 'axios'

export const getDetailData = () => axios.get("http://localhost:3000/api1/detail")
    
export const getCommentData = () => axios.get("http://localhost:3000/api1/comments")