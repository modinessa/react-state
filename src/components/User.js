import {useParams, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import * as constants from "../constants/constants";
import {fetchUser} from "./reducer";
import { useEffect } from "react";

export function User() {
	const {id} = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	console.log(id);

	useEffect(() => {
		dispatch(fetchUser(id));
	});

	const {user, userNotFound} = useSelector((state) => state.users);
	if (userNotFound) {
		navigate('/not-found');
	}

	return user ? (
		<div className="app-section">
			<div key={user.id} className={constants.USER_CARD_CLASS}>
				<img src={user.avatar} className="app-section__member-img"
						alt="User"/>
				<p className="app-section__member-review">
					{constants.USER_REVIEW}
				</p>
				<div className="app-section__member-name">
					{user.firstName} {user.lastName}
				</div>
				<div className="app-section__member-position">
					{user.position}
				</div>
			</div>
		</div>
	) : <></>;
}