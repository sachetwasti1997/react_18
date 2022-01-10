import React ,{Suspense,useState} from 'react';
import {SuspenseList} from 'react'

import {UsersList} from "./UsersList";
import UserDetails from "./UserDetails";
import UserPost from "./UserPost";
import {Spinner} from "./Spinner";

const MainApp = () => {

  const [fetchUserResource, setFetchUserResource] = useState(null)
  const [fetchPostResource, setFetchPostResource] = useState(null);
  const [isUserClicked, setIsUserClicked] = useState(false)

  return (
    <div className="container my-5">
      <div className={"row justify-content-md-center"}>
        <div className={"col-3"}>
          <h1>Users:</h1>
          <Suspense fallback={<Spinner/>}>
            <UsersList
              setFetchUser={setFetchUserResource}
              setFetchPost={setFetchPostResource}
              setIsUserClicked={setIsUserClicked}
            />
          </Suspense>
        </div>
        <div className={"col"}>
          {
              <div className={"container"}>
                {/*<SuspenseList revealOrder={"together"}>*/}
                  <h1>Users Details</h1>
                  <Suspense fallback={<Spinner/>}>
                    {fetchUserResource && <UserDetails resource={fetchUserResource}/>}
                  </Suspense>
                  <h1>User's Posts</h1>
                  <Suspense fallback={<Spinner/>}>
                    {fetchPostResource && <UserPost resource={fetchPostResource}/>}
                  </Suspense>
                {/*</SuspenseList>*/}
              </div>
          }
        </div>
      </div>
    </div>
  );
}

export default MainApp;