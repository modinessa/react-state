import React from 'react';

export function JoinSection() {
	return (
		<section className="app-section app-section--image-joun-us">
			<h2 className="app-title">
      	Join Our Program
    	</h2>
			<h3 class="app-subtitle">
      	Sed do eiusmod tempor incididunt<br/>
				ut labore et dolore magna aliqua.
    	</h3>
			<form className="app-section--form-join-us" name="EmailForm">
				<input className="app-section--email-join-us"
								type="email" id="user-email" name="email" placeholder="Email"/>
				<button id="subBtn" type="submit"
								className="app-section__button app-section__join-us--button" >
					Subscribe
				</button>
			</form>
		</section>

	)
}