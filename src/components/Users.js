<<<<<<< HEAD
import React from "react";
import * as constants from "../constants/constants.js";

export function Users({users}) {
	return (
		<div className="app-section__users ">
			{users.map((user) => (
				<div key={user.id} className = {constants.USER_CARD_CLASS}>
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
			))}
		</div>
	)
}
=======
		import React from "react";
		import * as constants from "../constants/constants.js";
		
		export function Users({users}) {
			return (
				<div className="app-section__users ">
					{users.map((user) => (
					<div key={user.id} className = {constants.USER_CARD_CLASS}>
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
					))}
				</div>
			)
		}
>>>>>>> 745986d467c6bcca5bf7155bb0a99a7a77a5e364
