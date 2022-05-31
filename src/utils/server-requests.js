//const url = 'http://localhost:3000';
const url = '';

export function getUsers() {
  return fetch(`${url}/community`, {
    method: 'GET',
  });
}

export function getUser(id) {
	return fetch(`/community/${id}`);
}

export function subscribe(email) {
  return fetch(`${url}/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: `${email}`,
    }),
  });
}

export function unsubscribe() {
  return fetch(`${url}/unsubscribe`, { method: 'POST' });
}
