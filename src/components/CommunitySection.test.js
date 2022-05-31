import {Provider} from "react-redux";
import renderer from 'react-test-renderer';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, fireEvent} from '@testing-library/react';

import {store} from "../utils/store";
import {CommunitySection} from './CommunitySection';

const mockServer = setupServer(
	rest.get('/community', (req, res, ctx) => res(ctx.json([]))),
)

describe('CommunitySection', () => {
	it('renders component', () => {
		expect(renderer.create(
			<Provider store={store}>
				<CommunitySection/>
			</Provider>)).toMatchSnapshot();
	});

	it('hides users section', async () => {
		const communitySection = render(
			<Provider store={store}>
				<CommunitySection/>
			</Provider>);
		let hideButton = communitySection.getByLabelText('hide-users-section');
		
		expect(store.getState().users.isHide).toEqual(false);

		fireEvent.click(hideButton);

		hideButton = await communitySection.findByText('Show section');

		expect(hideButton).not.toBeUndefined();
		expect(store.getState().users.isHide).toEqual(true);

		fireEvent.click(hideButton);

		hideButton = await communitySection.findByText('Hide section');

		expect(hideButton).not.toBeUndefined();
		expect(store.getState().users.isHide).toEqual(false);
	});
});
