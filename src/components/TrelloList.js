import TrelloCard from './TrelloCard';
import TrelloActionBtn from './TrelloActionBtn';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const ListContainer = styled.div`
	background-color: #dfe3e6;
	border-radius: 3px;
	width: 300px;
	height: 100%;
	padding: 8px;
	margin-right: 8px;
`;

const TrelloList = ({ title, cards, listID, index }) => {
	return (
		<Draggable draggableId={String(listID)} index={index}>
			{(provided) => (
				<ListContainer
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}>
					<Droppable droppableId={String(listID)}>
						{(provided) => (
							<div ref={provided.innerRef} {...provided.droppableProps}>
								<h4>{title}</h4>
								{cards.map((card, index) => (
									<TrelloCard key={card.id} cardID={card.id} index={index}>
										{card.text}
									</TrelloCard>
								))}
								{provided.placeholder}
								<TrelloActionBtn listID={listID} />
							</div>
						)}
					</Droppable>
				</ListContainer>
			)}
		</Draggable>
	);
};

export default TrelloList;
