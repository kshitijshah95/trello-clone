import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionBtn from './TrelloActionBtn';

const App = ({ lists }) => {
	return (
		<div>
			<div style={styles.listContainer}>
				{lists.map((list) => (
					<TrelloList
						listID={list.id}
						key={list.id}
						title={list.title}
						cards={list.cards}
					/>
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
