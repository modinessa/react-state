import React from "react";
import * as constants from "../constants/constants";
import { Link } from "react-router-dom";

export function Users({users}) {
	return (
		<div className="app-section__users ">
			{users.map((user) => (
			<div key={user.id} className="app-section__member-card app-section__member-card-select">
				<img src={user.avatar} className="app-section__member-img"
						alt="User"/>
				<p className="app-section__member-review">
					{constants.USER_REVIEW}
				</p>
				<Link to={user.id} className="user-link">
					<div className="app-section__member-name">
						{user.firstName} {user.lastName}
					</div>
				</Link>
				<div className="app-section__member-position">
					{user.position}
				</div>
			</div>
			))}
		</div>
	)
}