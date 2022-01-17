const react18 = {
	suspense : `
	
		It allows us to suspend rendering the component or component subtree whenever we have to wait for 
		something, typically it means when we are fetching data or using an ajex request, but it can be anything
		Under the hood during the render a promise is thrown, and when that happens react suspends rendering
		of the component and waits for that promise to either resolve or reject
		If it resolves it will rerender the component that shows the data now, and if it rejects its considered an
		error and error boundary kiks in
		Now for Suspense we need to set the suspense boundary, and we have to provide some fallback UI, in this 
		case we use loading spinner
		Once we do that we can remove all the codes to check if the data has been fetched, or are there any
		potential errors and we can leave all those responsibilities to the <Suspense/> and the <ErrorBoundary/>.
		When we use that we will see something like this 
	
	`,
	errors : `
		
		Now we can look how suspense works in case of an error, we can have errors while using suspense, but
		the way we handle them changes radically, just like we have <Suspense/> tag as a boundary for suspending 
		components when something is waiting, when asynchronous action is performed, just like that we have
		<ErrorBoundary/> to catch and handle errors when it is produced just like any other functions that
		catches errors in React Lifecycle
		
	`,
	nesting_suspense: `
	
		We can nest multiple suspends, react will use the closest parent <Suspense/> components,
		It can be very useful when we want to control which part of the UI is replaced by a fallback
		
		What a component suspends it will walk up the component tree and find the first suspense and if there are
		multiple furthur up the tree they won't be used
		In react 17 if we provide a fallback component with null then it will not be used to suspense, it will
		search for the next suspense in the component tree, below it
		But with react 18 if there are no fallback components then it will understand that we won't show anything
		for fallback and it will not search for any other suspens component
	
	`,
	parallel_suspense: `
	
		We can use as many suspense componets as we want not just in nesting but also in parallel. Basically multiple
		parallel suspend can all suspend at the same time and resume when the process gets completed
	
	`
}