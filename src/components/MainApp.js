import React ,{Suspense,useState} from 'react';

import {UsersList} from "./UsersList";
import UserDetails from "./UserDetails";
import UserPost from "./UserPost";
import {Spinner} from "./Spinner";

import './mainApp.css'
import {ErrorBoundary} from "react-error-boundary";
import {ErrorBoundaryComponent} from "./ErrorBoundaryComponent";
import {useSelector} from "react-redux";

const MainApp = () => {

    const [fetchUserResource, setFetchUserResource] = useState(null)
    const [fetchPostResource, setFetchPostResource] = useState(null);
    const [isUserClicked, setIsUserClicked] = useState(false)
    const [userId, setUserId] = useState(null)

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
                            setUserId = {setUserId}
                        />
                    </Suspense>
                </div>
                <div className={"col"}>
                    { isUserClicked?
                        <div className={"container"}>
                            <h1>User Details</h1>
                            <Suspense fallback={<Spinner/>}>
                                <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
                                    {fetchUserResource && <UserDetails resource={fetchUserResource} userId={userId}/>}
                                </ErrorBoundary>
                            </Suspense>
                            <h1 style={{marginTop:'50px'}}>User Posts</h1>
                            <Suspense fallback={<Spinner/>}>
                                <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
                                    {fetchPostResource && <UserPost resource={fetchPostResource} userId={userId}/>}
                                </ErrorBoundary>
                            </Suspense>
                        </div>:
                        <div className={"container nodata"}>
                            <h1>Select An User</h1>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default MainApp;