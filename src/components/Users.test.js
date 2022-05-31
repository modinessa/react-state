import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom'; 

import {Users} from './Users';

const TEST_USER = {
	id: 'fake_id',
	firstName: 'first',
	lastName: 'last',
	position: 'test',
	avatar: 'fake_url',
};

describe('Users', () => {
	it('renders component without users', async () => {
		expect(renderer.create(
			<BrowserRouter>
				<Users users={[]}/>
			</BrowserRouter>)).toMatchSnapshot();
		});

	it('renders component with users', () => {
		expect(renderer.create(
			<BrowserRouter>
				<Users users={[TEST_USER]}/>
			</BrowserRouter>)).toMatchSnapshot();
	});
});
