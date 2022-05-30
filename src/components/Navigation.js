import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
	return (
		<div className="app-navigation">
			<Link to="/" className="app-navigation__logo" href="#">
				Project
			</Link>

			<nav className="app-navigation__nav">
				<ul className="app-navigation__nav-list">
					<Link to="community" className="app-navigation__nav-list-item">
						Community
					</Link>

					<Link to="about us" className="app-navigation__nav-list-item">
						About us
					</Link>

					<Link to="projects" className="app-navigation__nav-list-item">
						Projects
					</Link>

					<Link to="contact" className="app-navigation__nav-list-item">
						Contact
					</Link>
				</ul>
			</nav>
		</div>
	)
}
