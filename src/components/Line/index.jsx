import "./line.css";

const Line = ({ emojiList }) => {
	return (
		<>
			{emojiList.map((emoji) => {
				return <p key={emoji.title}>{emoji.title}</p>;
			})}
		</>
	);
};

export default Line;
