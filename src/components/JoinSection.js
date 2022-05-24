import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { subscribe, unsubscribe } from "../js/server-requests.js";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required().matches(/^[A-Za-z\s]+$/i),
});

export function JoinSection() {

	const [isSubscribed, setIsSubscribed] = useState(false);
	const {
		register,
		handleSubmit,
		formState
	} = useForm(
		//{resolver: yupResolver(schema)}
	);

	const { isSubmitting } = formState;
	const onSubmit = (data) => {
		console.log(isSubscribed);
		setIsSubscribed(!isSubscribed);
		
		if(!isSubscribed) {
			return subscribe(data.email);
		} else {	
			return unsubscribe();
		}
	};

	const onError = (errors, e) => console.log(errors, e);

	return (
		<section className="app-section app-section--image-joun-us">
			<h2 className="app-title">
      	Join Our Program
    	</h2>
			<h3 className="app-subtitle">
      	Sed do eiusmod tempor incididunt<br/>
				ut labore et dolore magna aliqua.
    	</h3>
			<form className={`app-section--form-join-us
											${isSubscribed ? "unsubscribe" : ""} `}
						name="EmailForm"
						onSubmit={handleSubmit(onSubmit, onError)}>
				<input {...register("email")} className="app-section--email-join-us"
								type="email" id="user-email" name="email" placeholder="Email"/>
				<button id="subBtn" type="submit"
								className="app-section__button app-section__join-us--button"
								disabled={isSubmitting} >
					{!isSubscribed ? "Subscribe" : "Unsubscribe"}
					{isSubmitting}
				</button>
			</form>
		</section>

	)
}