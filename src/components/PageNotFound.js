import React from "react";
import { Link } from "react-router-dom";


export function PageNotFound() {
	return (
		<div className="app-section">
			<div className="app-not-found">
				<h2>Page Not found</h2>
				<p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
				<Link to="/" className="link-not-found">
					&#10229; Back to our site
				</Link>
			</div>
		</div>
	)
} 