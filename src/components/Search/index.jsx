import "./search.css";

const Search = ({ search, setSearch, setEmojiList, emojiListJSON }) => {
	const handleSearch = (e) => {
		setSearch(e.target.value);
		const emojiSelec = [];
		emojiListJSON.map((emoji) => {
			if (emoji.keywords.indexOf(e.target.value.toLowerCase()) !== -1) {
				emojiSelec.push(emoji);
			}
		});
		setEmojiList(emojiSelec);
	};

	return (
		<header>
			<h1>😎 EmojiSearch 😎</h1>
			<input
				type="text"
				name="emojiSearch"
				placeholder="Search an emoji..."
				value={search}
				onChange={handleSearch}
			/>
		</header>
	);
};

export default Search;
