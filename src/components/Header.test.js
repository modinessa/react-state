import {BrowserRouter} from 'react-router-dom'; 
import renderer from 'react-test-renderer';

import {Header} from './Header';

describe('Header', () => {
	it('renders full header for main page', () => {
		window.history.pushState({}, '', '/');

		const header = renderer.create(<BrowserRouter><Header/></BrowserRouter>);
		
		expect(header).toMatchSnapshot();
	});
	
	it('renders header for other than main page', () => {
		window.history.pushState({}, '', '/bla-bla-bla');

		const header = renderer.create(<BrowserRouter><Header/></BrowserRouter>);
		
		expect(header).toMatchSnapshot();
	});
});
