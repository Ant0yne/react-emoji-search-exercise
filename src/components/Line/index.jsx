import "./line.css";

const Line = ({ emojiList }) => {
	return (
		<>
			<main>
				<div className="container">
					{emojiList.map((emoji) => {
						return (
							<div key={emoji.title} className="emoji">
								<p>{emoji.symbol}</p>
								<p>{emoji.title}</p>
							</div>
						);
					})}
				</div>
			</main>
		</>
	);
};

export default Line;
