import React, { useEffect } from "react";
import { Users } from "./Users";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, setIsHide} from "./reducer";

export function CommunitySection() {
	const {users, isHide} = useSelector((state) => state.users);
	const dispatch = useDispatch();

	// eslint-disable-next-line
	useEffect(() => {dispatch(fetchUsers())}, []);

	return (
		<section className="app-section app-section--big-community">
			<div className={`app-section--big-community_title-block
											${isHide ? "add-margin" : ""}`}>
				<h2 className="app-title dark">
					Big Community of<br/>
					People Like You
				</h2>
				<button className="app-section--big-community_button"
								onClick={ () => dispatch(setIsHide(!isHide))}>
					{!isHide ? "Hide section" : "Show section"}
				</button>
			</div>
			{!isHide && 
				<>
					<h3 className="app-subtitle dark">
						We’re proud of our products, and we’re really excited<br/>
						when we get feedback from our users.
					</h3>
					<Users users={users} />
				</>
			}
		</section>
	)
}