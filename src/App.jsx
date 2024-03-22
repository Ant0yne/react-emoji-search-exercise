import { useState } from "react";

import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";

import emojiListJSON from "./assets/json/emojiList.json";

import "./App.css";

function App() {
	const [search, setSearch] = useState("");
	const [emojiList, setEmojiList] = useState(emojiListJSON);

	return (
		<>
			<Search
				search={search}
				setSearch={setSearch}
				emojiList={emojiList}
				setEmojiList={setEmojiList}
				emojiListJSON={emojiListJSON}
			/>
			<Line emojiList={emojiList} />
			<Footer />
		</>
	);
}

export default App;
