import {rest} from 'msw';
import {setupServer} from 'msw/node';

import {fetchUsers, setIsHide, fetchUser, setIsSubscribed, setIsSubmitting} from "./reducer";
import {store} from "../utils/store";

const FAKE_USER_ID = 'FAKE_USER_1';
const USER1 = {
	id: FAKE_USER_ID,
};
const USER2 = {
	id: 'FAKE_USER_2',
};
const NO_USER_ID = 'NO_USER';

const mockServer = setupServer(
	rest.get('/community',
	  (req, res, ctx) => res(ctx.json([USER1, USER2]))),
	rest.get(`/community/${FAKE_USER_ID}`,
	  (req, res, ctx) => res(ctx.json(USER1))),
	rest.get(`/community/${NO_USER_ID}`,
	  (req, res, ctx) => res(ctx.status(404))),
)

describe('reducer', () => {
	beforeAll(() => {
		mockServer.listen();
	});

	afterAll(() => {
		mockServer.close();
	});

	it('fetches users', async () => {
		const {payload} = await store.dispatch(fetchUsers());

		expect(payload).toEqual([USER1, USER2]);
	});

	it('fetches user', async () => {
		const {payload} = await store.dispatch(fetchUser(FAKE_USER_ID));

		expect(payload).toEqual(USER1);
		expect(store.getState().users.userNotFound).toEqual(false);
	});

	it('fetches user which not exist', async () => {
		await store.dispatch(fetchUser(NO_USER_ID));

		expect(store.getState().users.user).toBeNull();
		expect(store.getState().users.userNotFound).toEqual(true);
	});

	it('changes isHide', () => {
		expect(store.getState().users.isHide).toEqual(false);
		store.dispatch(setIsHide(true));

		expect(store.getState().users.isHide).toEqual(true);
	});

	it('changes isSubscribed', () => {
		expect(store.getState().users.isSubscribed).toEqual(false);
		store.dispatch(setIsSubscribed(true));

		expect(store.getState().users.isSubscribed).toEqual(true);
	});

	it('changes isSubmitting', () => {
		expect(store.getState().users.isSubmitting).toEqual(false);
		store.dispatch(setIsSubmitting(true));

		expect(store.getState().users.isSubmitting).toEqual(true);
	});
});
