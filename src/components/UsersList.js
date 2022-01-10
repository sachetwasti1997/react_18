import React from "react";
import {fetchUsersData} from "../api/UsersPromise";
import {fetchUserData} from "../api/UserPromise";
import {fetchPostData} from "../api/PostsPromise";

const resource = fetchUsersData()

export const UsersList = (props) => {
  const userList = resource.userList.read()
  const onUserClick = (userId) => {
    props.setFetchUser(fetchUserData(userId))
    props.setFetchPost(fetchPostData(userId))
    props.setIsUserClicked(true)
  }
  return(
    <div>
      <ul className={'list-group'}>
        {
          userList.map(user => (
            <div className={'card'} key={user.id} style={{margin: '10px'}}>
              <div className={'card-body'} onClick={() => onUserClick(user.id)}>
                {user.username}
              </div>
            </div>
          ))
        }
      </ul>
    </div>
  )
}