import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const CardContainer = styled.div`
	margin-bottom: 8px;
`;

const TrelloCard = ({ cardID, index, children }) => {
	return (
		<Draggable draggableId={String(cardID)} index={index}>
			{(provided) => (
				<CardContainer
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}>
					<Card>
						<CardContent>
							<Typography gutterBottom>{children}</Typography>
						</CardContent>
					</Card>
				</CardContainer>
			)}
		</Draggable>
	);
};

export default TrelloCard;
