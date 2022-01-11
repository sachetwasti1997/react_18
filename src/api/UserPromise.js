import axios from "axios";
import wrapPromise from "../promiseWrapper/WrapPromise";

const fetchUser = (userId) => {
  return axios
      .get('https://jsonplaceholder.typicode.com/users/'+userId)
      .then(res => res.data)
      .catch(err => console.log(err))
}

export const fetchUserData = (userId) => {
  const userPromise = fetchUser(userId)
  return{
    user: wrapPromise(userPromise)
  }
}

