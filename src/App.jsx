import { useState } from "react";

import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";

import emojiList from "./assets/json/emojiList.json";

import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Search />
			<Line emojiList={emojiList} />
			<Footer />
		</>
	);
}

export default App;
