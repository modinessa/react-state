import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { CommunitySection } from "./components/CommunitySection";
import { PageNotFound } from "./components/PageNotFound";
import { JoinSection } from "./components/JoinSection";
import { User } from "./components/User";

function App() {

  return (
		<main id="app-container">
			<div>
				<Navigation />
				<Header />
			</div>
			<Routes>
				<Route exact path="/" element={
					<>
						<CommunitySection/>
						<JoinSection/>
					</>
				}/>
				<Route path="/community" element={<CommunitySection/>}></Route>
				<Route path="/community/:id" element={<User/>}/>
				<Route path="*" element={<PageNotFound/>}/>
				<Route path="/not-found" element={<PageNotFound/>}/>
			</Routes>
		</main>
  );
}

export default App;
