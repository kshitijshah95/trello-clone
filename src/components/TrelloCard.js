import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const TrelloCard = ({ children }) => {
	return (
		<Card style={styles.cardContainer}>
			<CardContent>
				<Typography color='textSecondary' gutterBottom>
					{children}
				</Typography>
			</CardContent>
		</Card>
	);
};

const styles = {
	cardContainer: {
		marginBottom: 8,
	},
};
export default TrelloCard;
