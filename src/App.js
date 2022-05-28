import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { CommunitySection } from "./components/CommunitySection";
import {JoinSection} from "./components/JoinSection";

function App() {
  return (
		<main id="app-container">
			<Routes>

				<Route path="/" element={
					<>
						<Navigation />
						<Header />
						<JoinSection />
					</>
					}/>
				<Route path="/community" element={<CommunitySection/>}/>
			</Routes>
		</main>
  );
}

export default App;
