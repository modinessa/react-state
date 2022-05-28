import React from "react";

export function Navigation() {
	return (
		<div className="app-navigation">
			<a className="app-navigation__logo" href="#">Project</a>

			<nav className="app-navigation__nav">
				<ul className="app-navigation__nav-list">
					<li className="app-navigation__nav-list-item">
						<a href="#">Projects</a></li>
					<li className="app-navigation__nav-list-item">
						<a href="#">About us</a></li>
					<li className="app-navigation__nav-list-item">
						<a href="#">Stories</a></li>
					<li className="app-navigation__nav-list-item">
						<a href="#">Contact</a></li>
				</ul>
			</nav>

			<div className="app-navigation__nav-menu-button">
				<div className="app-navigation__nav-menu-button-icon">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
	)
}
