import TrelloList from './TrelloList';
import { connect } from 'react-redux';
import TrelloActionBtn from './TrelloActionBtn';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from '../actions';
import styled from 'styled-components';

const ListContainer = styled.div`
	display: flex;
	flexdirection: row;
`;

const App = ({ lists, dispatch }) => {
	const onDragEnd = (result) => {
		// Reordering logic
		const { destination, source, draggableId, type } = result;
		if (!destination) return;
		dispatch(
			sort(
				source.droppableId,
				destination.droppableId,
				source.index,
				destination.index,
				draggableId,
				type
			)
		);
	};
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div>
				<Droppable droppableId='all-list' direction='horizontal' type='list'>
					{(provided) => (
						<ListContainer {...provided.droppableProps} ref={provided.innerRef}>
							{lists.map((list, index) => (
								<TrelloList
									listID={list.id}
									key={list.id}
									title={list.title}
									cards={list.cards}
									index={index}
								/>
							))}
							{provided.placeholder}
							<TrelloActionBtn list />
						</ListContainer>
					)}
				</Droppable>
			</div>
		</DragDropContext>
	);
};

const mapStateToProps = (state) => ({
	lists: state.lists,
});

export default connect(mapStateToProps)(App);
