import React from "react";
import { useForm } from "react-hook-form";
import { subscribe, unsubscribe } from "../utils/server-requests";
import * as constants from "../constants/constants";
import { yupResolver } from "@hookform/resolvers/yup";
import { createRegExp } from "../utils/email-validator";
import * as yup from "yup";
import { setIsSubscribed } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

const schema = yup.object({
  email: yup.string().required("Please Enter your Email")
						.matches(createRegExp(constants.VALID_EMAIL_ENDINGS),
						'Your Email must end with "gmail.com", "outlook.com", or "yandex.ru"')});

export function JoinSection() {
	const dispatch = useDispatch();
	const {isSubscribed} = useSelector((state) => state.users);
	const {
		register,
		handleSubmit,
		formState
	} = useForm(
		{resolver: yupResolver(schema)}
	);
	const { errors, isSubmitting } = formState;

	const onSubmit = (data) => {
		if(!isSubscribed) {
			if (!errors.email) {
				subscribe(data.email)
				.then((response) => {
					if (!response.ok) {
						response.json()
							.then((error) => {
								window.alert(error.error);
							})
					} else {	
						dispatch(setIsSubscribed(!isSubscribed));
					}
				})
			} 	
		} else {	
			unsubscribe();
			dispatch(setIsSubscribed(!isSubscribed));
		}
	};

	const onError = (errors) => {
		window.alert(errors.email.message);
	}

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
								disabled={isSubmitting}>
					{!isSubscribed ? "Subscribe" : "Unsubscribe"}
				</button>
			</form>
		</section>
	)
}
