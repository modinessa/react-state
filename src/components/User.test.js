import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {BrowserRouter, Route, Routes} from 'react-router-dom'; 

import {store} from "../utils/store";
import {User} from './User';
import {fetchUser} from './reducer';

const TEST_USER_ID = 'fake_id';
const TEST_USER = {
	id: TEST_USER_ID,
	firstName: 'first',
	lastName: 'last',
	position: 'test',
	avatar: 'fake_url',
};

const mockServer = setupServer(
	rest.get(`/community/${TEST_USER_ID}`,
	  (req, res, ctx) => res(ctx.json(TEST_USER))),
)

describe('User', () => {
	beforeAll(() => {
		mockServer.listen();
		window.history.pushState({}, '', `/community/${TEST_USER_ID}`);
	});

	afterAll(() => {
		mockServer.close();
	});

	it('renders component with user information', async () => {
		await store.dispatch(fetchUser(TEST_USER_ID));

		const user = renderer.create(
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path="/community/:id" element={<User/>}/>
					</Routes>
				</BrowserRouter>
			</Provider>);

			expect(user).toMatchSnapshot();
	});
});
