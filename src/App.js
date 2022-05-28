import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CommunitySection } from "./components/CommunitySection";
import {JoinSection} from "./components/JoinSection"

function App() {
  return (
		<main id="app-container">
			<Routes>
				<Route path="/" element={<JoinSection />}/>
				<Route path="/community" element={<CommunitySection/>}/>
			</Routes>
		</main>
  );
}

export default App;
