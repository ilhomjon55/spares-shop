import { Switch } from 'react-router-dom';

import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';

import Public from './Components/Routers/Public.js';
import Private from './Components/Routers/Private.js';

import Home from './Pages/Home/Home.js';
import Login from './Pages/Login/Login.js';
import Spares from './Pages/Spares/Spares.js';

function App() {
	return (
		<>
			<Header />

			<main>
				<Switch>
					<Public path='/' component={Home} exact />
					<Public path='/login' component={Login} exact />

					<Private path='/spares' components={Spares} exact />
				</Switch>
			</main>

			<Footer />
		</>
	);
}

export default App;
