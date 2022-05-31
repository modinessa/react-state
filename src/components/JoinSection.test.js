import {Provider} from "react-redux";
import {render, fireEvent} from '@testing-library/react';
import renderer from 'react-test-renderer';
import {rest} from 'msw';
import {setupServer} from 'msw/node';

import {store} from "../utils/store";
import {JoinSection} from './JoinSection';

const VALID_EMAIL = 'valid@gmail.com'
const NOT_VALID_EMAIL = 'dont_care@gogol.ru';

const mockServer = setupServer(
	rest.post('/subscribe',
		(req, res, ctx) =>
		  res(ctx.status(req.body.email === VALID_EMAIL ? 200 : 401))),
	rest.post('/unsubscribe', (req, res, ctx) => res()),
)

describe('JoinSection', () => {
	let joinSection;
	let input;
	let submitButton;
	
	beforeAll(() => {
		mockServer.listen();
	});

	afterAll(() => {
		mockServer.close();
	});

	beforeEach(() => {
		joinSection = render(
			<Provider store={store}>
				<JoinSection/>
			</Provider>
		);
		input = joinSection.getByLabelText('user-email-input');
		submitButton = joinSection.getByLabelText('submit-button');
	});

	it('renders component', () => {
		expect(renderer.create(
			<Provider store={store}>
				<JoinSection/>
			</Provider>)).toMatchSnapshot();
	});

	it('submits valid email', async () => {
		let btn;
		expect(store.getState().users.isSubscribed).toEqual(false);

		fireEvent.change(input, {target: {value: VALID_EMAIL}});
		fireEvent.click(submitButton);

		btn = await joinSection.findByText('Unsubscribe');

		expect(btn).not.toBeUndefined();
		expect(store.getState().users.isSubscribed).toEqual(true);

		fireEvent.click(btn);

		btn = await joinSection.findByText('Subscribe');

		expect(btn).not.toBeUndefined();
		expect(store.getState().users.isSubscribed).toEqual(false);
	});

	it('submits invalid email', async () => {
		expect(store.getState().users.isSubscribed).toEqual(false);

		fireEvent.change(input, {target: {value: NOT_VALID_EMAIL}});
		fireEvent.click(submitButton);

		const btn = await joinSection.findByText('Subscribe');

		expect(btn).not.toBeUndefined();
		expect(store.getState().users.isSubscribed).toEqual(false);
	});
});
