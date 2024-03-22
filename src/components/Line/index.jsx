import "./line.css";

const Line = ({ emojiList }) => {
	return (
		<>
			<main>
				<div className="container">
					{emojiList.map((emoji) => {
						return (
							<button key={emoji.title} className="emoji">
								<p>{emoji.symbol}</p>
								<p>{emoji.title}</p>
							</button>
						);
					})}
				</div>
			</main>
		</>
	);
};

export default Line;
