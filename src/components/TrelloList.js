import TrelloCard from './TrelloCard';
import TrelloActionBtn from './TrelloActionBtn';

const TrelloList = ({ title, cards }) => {
	return (
		<div style={style.container}>
			<h4>{title}</h4>
			{cards.map((card) => (
				<TrelloCard key={card.id}>{card.text}</TrelloCard>
			))}
			<TrelloActionBtn />
		</div>
	);
};

const style = {
	container: {
		backgroundColor: '#dfe3e6',
		borderRadius: 3,
		width: 300,
		height: '100%',
		padding: 8,
		marginRight: 8,
	},
};

export default TrelloList;
