import React from "react";
import bigLogo from "../assets/your-logo-here.png"

export function Header() {
	return (
		<header className="app-section app-section--image-overlay app-section--image-peak">
			<img 
					src={bigLogo}
					alt="Logo icon picture" className="app-logo"
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

	)
}