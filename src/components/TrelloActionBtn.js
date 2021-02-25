import { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Textarea from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { addList, addCard } from '../actions';

const TrelloActionBtn = ({ list, listID, dispatch }) => {
	const [formOpen, setFormOpen] = useState(false);
	const [formText, setFormText] = useState('');

	const renderAddBtn = () => {
		const btnText = list ? 'Add another List' : 'Add another Card';
		const btnTextOpacity = list ? 1 : 0.5;
		const btnTextColor = list ? 'white' : 'inherit';
		const btnBGColor = list ? 'rgba(0,0,0,.15)' : 'inherit';

		return (
			<div
				onClick={() => setFormOpen(true)}
				style={{
					...styles.openFormBtnGrp,
					opacity: btnTextOpacity,
					color: btnTextColor,
					backgroundColor: btnBGColor,
				}}>
				<Icon>add</Icon>
				<p>{btnText}</p>
			</div>
		);
	};

	const handleAddList = () => {
		if (formText) {
			dispatch(addList(formText));
			setFormText('');
		}
		return;
	};

	const handleAddCard = () => {
		if (formText) {
			dispatch(addCard(listID, formText));
			setFormText('');
		}
		return;
	};

	const renderForm = () => {
		const placeholderText = list
			? 'Enter List Title...'
			: 'Enter a title for the Card...';

		const btnTitle = list ? 'Add List' : 'Add Card';

		return (
			<div>
				<Card
					style={{
						overflow: 'visible',
						minHeight: 80,
						minWidth: 272,
						padding: '6px 8px 2px',
					}}>
					<Textarea
						placeholder={placeholderText}
						autoFocus
						onBlur={() => setFormOpen(false)}
						value={formText}
						onChange={(e) => setFormText(e.target.value)}
						style={{
							resize: 'none',
							width: '100%',
							overflow: 'hidden',
							outline: 'none',
							border: 'none',
						}}
					/>
				</Card>
				<div style={styles.formBtnGrp}>
					<Button
						onMouseDown={() => (list ? handleAddList() : handleAddCard())}
						variant='contained'
						style={{ color: 'white', backgroundColor: '#5aac44' }}>
						{btnTitle}
					</Button>
					<Icon style={{ marginLeft: 8, cursor: 'pointer' }}>close</Icon>
				</div>
			</div>
		);
	};

	return formOpen ? renderForm() : renderAddBtn();
};

const styles = {
	openFormBtnGrp: {
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
		borderRadius: 3,
		height: 36,
		width: 272,
		paddingLeft: 10,
	},
	formBtnGrp: {
		marginTop: 8,
		display: 'flex',
		alignItems: 'center',
	},
};

export default connect()(TrelloActionBtn);
