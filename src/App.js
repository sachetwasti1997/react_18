import React, {Suspense} from 'react';
import {Spinner} from "./components/Spinner";
import {BrowserRouter} from "react-router-dom";
import {NavBar} from "./components/NavBar";

import {AppRoutes} from "./components/AppRoutes";

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={<Spinner/>}>
        <BrowserRouter>
          <NavBar/>
          <AppRoutes/>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;















