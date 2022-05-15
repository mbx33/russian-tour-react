// These are cards for the custom itinerary page
import * as React from 'react';
import { useState } from 'react';
import './styles/index.css';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Button from '@mui/material/Button';
import { useCart } from 'react-use-cart';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function TourCard(props) {
	const [expanded, setExpanded] = useState(false);
	const [color, setColor] = useState({
		active: 'false',
		color: '#2e002e',
	});

	// For the snack bar ----------------------------
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	//shopping Cart setup
	const { addItem } = useCart();

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	function handleToggle() {
		if (color.active === 'false') {
			setColor({
				color: 'red',
				active: 'true',
			});
		} else {
			setColor({
				color: '#2e002e',
				active: 'false',
			});
		}
	}

	return (
		<div>
			<Card sx={{ maxWidth: 355 }} elevation={4} style={{ margin: '20px' }}>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: '#2e002e' }} aria-label="recipe">
							{props.avatar}
						</Avatar>
					}
					title={props.name}
					subheader={props.duration}
				/>
				<CardMedia component="img" height="194" image={props.image} alt={props.name} />
				<CardContent className="expandedContentHead">
					<Typography
						variant="body2"
						color="text.secondary"
						style={{ textAlign: 'center' }}
					>
						{props.brief}
						{/* This is a brief description of the tour, also maybe displays time as
            well as price and other general information. */}
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton
						aria-label="add to favorites"
						style={color} /* <--need to make this change from white to red*/
						onClick={handleToggle}
					>
						<FavoriteIcon />
					</IconButton>

					<ExpandMore
						style={{ color: '#2e002e' }}
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent className="expandedContent">
						<Typography
							paragraph
							style={{ textAlign: 'center', textDecoration: 'underline' }}
						>
							<strong>Tour Info:</strong>
						</Typography>
						<Typography paragraph>{props.description}</Typography>
						<p style={{ textAlign: 'center' }}>Price: ${props.price}</p>
						<Button
							variant="contained"
							onClick={() => {
								addItem(props.item);
								handleClick();
							}}
						>
							Add to Tour
						</Button>
					</CardContent>
				</Collapse>
			</Card>

			{/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
			<Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
					Tour Added Successfully!
				</Alert>
			</Snackbar>
		</div>
	);
}
