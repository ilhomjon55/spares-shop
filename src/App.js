import { Switch } from 'react-router-dom';

import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';

import Public from './Components/Routers/Public.js';
import Private from './Components/Routers/Private.js';

import Home from './Pages/Home/Home.js';
import Login from './Pages/Login/Login.js';
import Spares from './Pages/Spares/Spares.js';

import OnlyPage from './Pages/OnlyPage/OnlyPage.js';

function App() {
	return (
		<>
			<Header />

			<main>
				<Switch>
					<Public path='/' component={Home} exact />
					<Public path='/login' component={Login} exact />

					<Private path='/shops' component={OnlyPage} exact />
					<Private path='/promotions' component={OnlyPage} exact />
					<Private path='/deliverypayment' component={OnlyPage} exact />
					<Private path='/liked' component={OnlyPage} exact />
					<Private path='/selected' component={OnlyPage} exact />
					<Private path='/catalog' component={OnlyPage} exact />
					<Private path='/catalogto' component={OnlyPage} exact />
					<Private path='/disks' component={OnlyPage} exact />
					<Private path='/batteries' component={OnlyPage} exact />
					<Private path='/autooil' component={OnlyPage} exact />
					<Private path='/autolamps' component={OnlyPage} exact />
					<Private path='/accessories' component={OnlyPage} exact />
					<Private path='/spares' component={Spares} exact />
				</Switch>
			</main>

			<Footer />
		</>
	);
}

export default App;
