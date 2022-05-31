import renderer from 'react-test-renderer';
import {BrowserRouter} from "react-router-dom"; 

import {PageNotFound} from './PageNotFound';

describe('PageNotFound', () => {
	it('renders component', () => {
		expect(renderer.create(
			<BrowserRouter>
				<PageNotFound/>
			</BrowserRouter>)).toMatchSnapshot();
	});
});