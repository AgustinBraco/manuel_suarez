import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing, Radio, Contact } from './screens';
import { Header, Footer } from './components';

const App = () => (
	<Router>
		<Header />
		<Routes>
			<Route exact path="/" element={<Landing />} />
			<Route exact path="/radio" element={<Radio />} />
			<Route exact path="/contacto" element={<Contact />} />
			<Route exact path="*" element={<Landing />} />
		</Routes>
		<Footer />
	</Router>
);

export default App
