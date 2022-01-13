import React, {Suspense} from 'react';
import {ErrorBoundary} from 'react-error-boundary'
import {Spinner} from "./components/Spinner";
import {BrowserRouter} from "react-router-dom";
import {NavBar} from "./components/NavBar";

import {AppRoutes} from "./components/AppRoutes";
import {ErrorBoundaryComponent} from "./components/ErrorBoundaryComponent";

const App = () => {
	return (
		<div className="container">
			<ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
				<Suspense fallback={<Spinner/>}>
					<BrowserRouter>
						<NavBar/>
						<AppRoutes/>
					</BrowserRouter>
				</Suspense>
			</ErrorBoundary>
		</div>
	);
}

export default App;















