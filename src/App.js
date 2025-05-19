import { Page1 } from './Pages/Page-1/Page-1'
import { Details } from './Pages/Details/Details'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
	return (
		<BrowserRouter>
			<div className='container'>
				<Routes>
					<Route path='/' element={<Page1 />} />
					<Route path='/user/:id' element={<Details />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
