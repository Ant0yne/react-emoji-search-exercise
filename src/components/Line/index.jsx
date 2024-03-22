import "./line.css";

const Line = ({ emojiList }) => {
	return (
		<>
			<main>
				<div className="container">
					<div id="emoji-list">
						{emojiList.map((emoji) => {
							return (
								<button
									key={emoji.title}
									className="emoji"
									onClick={() => {
										navigator.clipboard.writeText(emoji.symbol);
									}}>
									<p>{emoji.symbol}</p>
									<p>{emoji.title}</p>
								</button>
							);
						})}
					</div>
				</div>
			</main>
		</>
	);
};

export default Line;
