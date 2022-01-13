import axios from "axios";
import wrapPromise from "../promiseWrapper/WrapPromise";

const fetchPosts = (userId) => {
    return axios
        .get('https://jsonplaceholder.typicode.com/posts?_limit=2&userId='+userId)
        .then(res => res.data)
        .catch(err => {throw err})
}

export const fetchPostData = (userId) => {

    const posts = fetchPosts(userId)
    return{
        userPosts: wrapPromise(posts)
    }
}