import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionBtn from './TrelloActionBtn';

const App = ({ lists }) => {
	return (
		<div>
			Hello World!
			<div style={styles.listContainer}>
				{lists.map((list) => (
					<TrelloList title={list.title} cards={list.cards} key={list.id} />
				))}
				<TrelloActionBtn list />
			</div>
		</div>
	);
};

const styles = {
	listContainer: {
		display: 'flex',
		flexDirection: 'row',
	},
};

const mapStateToProps = (state) => ({
	lists: state.lists,
});

export default connect(mapStateToProps)(App);
