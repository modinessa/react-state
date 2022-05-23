import React from 'react';

export function CommunitySection() {
	return (
		<section className="app-section app-section--big-community">
			<h2 class="app-title dark">
				Big Community of<br/>
				People Like You
			</h2>
			<button className="app-section--big-community_button">
				Hide section
			</button>
			<h3 class="app-subtitle dark">
				We’re proud of our products, and we’re really excited<br/>
				when we get feedback from our users.
			</h3>
			<div class="app-section__users">
			</div>
		</section>
	)
}

{/*export const USER_CONTAINER_CLASS = 'app-section__members';
export const USER_CARD_CLASS = 'app-section__member-card';
export const USER_REVIEW = 'PLACEHOLDER: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolor.';

 addUsers(users) {
    const usersContainer = document.querySelector('.app-section__users');
    usersContainer.classList = constants.USER_CONTAINER_CLASS;
    // eslint-disable-next-line
    users.map((user) => {
      const userCard = document.createElement('div');
      userCard.classList = constants.USER_CARD_CLASS;

      const review = user.review || constants.USER_REVIEW;
      userCard.innerHTML =
				`<img src='${user.avatar}' class="app-section__member-img"
					alt="User 		photo"/>
				<p class="app-section__member-review">
				${review}
				</p>
				<div class="app-section__member-name">
				${user.firstName} ${user.lastName}
				</div>
				<div class="app-section__member-position">
				${user.position}
				</div>`;
      usersContainer.appendChild(userCard);
    });
  } */}