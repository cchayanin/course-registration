import './App.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import pages from './pages'

function App() {
	const { CR01, CR02 } = pages.cr
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/cr/cr01" component={CR01} />
					<Route path="/cr/cr02" component={CR02} />
					<Redirect to="/" />
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App
