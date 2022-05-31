import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom"; 

import {Navigation} from './Navigation';

describe('Navigation', () => {
	it('renders component', () => {
		expect(renderer.create(
			<BrowserRouter>
				<Navigation/>
			</BrowserRouter>)).toMatchSnapshot();
	});
});
