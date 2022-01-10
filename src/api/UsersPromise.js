import axios from "axios";
import wrapPromise from "../promiseWrapper/WrapPromise";

export const fetchUsersData = () => {
  const usersPromise = fetchUsers()
  return{
    userList: wrapPromise(usersPromise)
  }
}

const fetchUsers = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(res => res.data)
    .catch(err => console.log(err))
}