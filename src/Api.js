import {wrapPromise} from "./promiseWrapper/WrapPromise";
import {fetchUser} from "./api/UserPromise";
import {fetchPosts} from "./api/PostsPromise";
import {fetchUsers} from "./api/UsersPromise";

export const fetchData = () => {
	const userPromise = fetchUser()
	const postPromise = fetchPosts()
	const usersPromise = fetchUsers()
	return{
		user: wrapPromise(userPromise),
		posts: wrapPromise(postPromise),
		userList: wrapPromise(usersPromise)
	}
}

// const wrapPromise = (promise) => {
//   let status = 'pending'
//   let result;
//   let suspender = promise.then(
//     res => {
//       status = 'success';
//       result = res;
//     },
//     err => {
//       status = 'failure';
//       result = err;
//     }
//   )
//   return {
//     read(){
//       if (status === 'pending'){
//         throw suspender
//       }else if (status === 'failure'){
//         throw result
//       }else if (status === 'success'){
//         return result
//       }
//     }
//   }
// }
//
// const fetchUser = () => {
//   return axios
//     .get('https://jsonplaceholder.typicode.com/users/1')
//     .then(res => res.data)
//     .catch(err => console.log(err))
// }
//
// const fetchPosts = () => {
//   return axios
//     .get('https://jsonplaceholder.typicode.com/posts?_limit=10')
//     .then(res => res.data)
//     .catch(err => console.log(err))
// }
