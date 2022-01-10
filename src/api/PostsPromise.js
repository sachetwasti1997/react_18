import axios from "axios";
import wrapPromise from "../promiseWrapper/WrapPromise";

export const fetchPostData = (userId) => {
  const posts = fetchPosts(userId)
  return{
    userPosts: wrapPromise(posts)
  }
}

const fetchPosts = (userId) => {
  return axios
    .get('https://jsonplaceholder.typicode.com/posts?userId='+userId)
    .then(res => res.data)
    .catch(err => console.log(err))
}