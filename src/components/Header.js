import React from "react";
import bigLogo from "../assets/your-logo-here.png"
import {useLocation} from "react-router-dom";

export function Header() {
	const location = useLocation();

	return location.pathname === '/' ? (
		<header className="app-section app-section--main-page app-section--image-peak">
		<img 
				src={bigLogo}
				alt="Logo icon" className="app-logo"
		/>
		<h1 className="app-title">
			Your Headline <br />
			Here
			</h1>
			<h2 className="app-subtitle">
				Lorem ipsum dolor sit amet, consectetur <br />
				adipiscing elit sed do eiusmod.
			</h2>
	</header>
	) : (
		<header className="app-section app-section--general app-section--image-peak">
		</header>
	)
}