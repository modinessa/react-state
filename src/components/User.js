import {useParams, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import * as constants from "../constants/constants";
import {setUser} from "./reducer";

export function User() {
	const {id} = useParams();
	const {user} = useSelector((state) => state.users);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	if (user?.id !== id) {
		dispatch(setUser(null));
	}

	if (!user) {
		fetch(`/community/${id}`)
			.then((response) => response.json())
			.then((user) => {
				dispatch(setUser(user));
			}, () => {
				navigate('/not-found');
			});
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