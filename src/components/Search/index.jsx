import "./search.css";

const Search = ({
	search,
	setSearch,
	emojiList,
	setEmojiList,
	emojiListJSON,
}) => {
	return (
		<header>
			<h1>😎 EmojiSearch 😎</h1>
			<input
				type="text"
				name="emojiSearch"
				placeholder="Search an emoji..."
				value={search}
				onChange={(e) => {
					setSearch(e.target.value);
					const emojiSelec = [];
					emojiListJSON.map((emoji) => {
						if (emoji.keywords.indexOf(e.target.value) !== -1) {
							emojiSelec.push(emoji);
						}
					});
					setEmojiList(emojiSelec);
				}}
			/>
		</header>
	);
};

export default Search;
