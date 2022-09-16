import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button } from "@mui/material";

class CardComp extends React.Component {
	render() {
		const {image, title, description, link } = this.props
		return (
			<Card sx={{ maxWidth: 345 }}>
				<CardActionArea>
					<CardMedia
						component='img'
						height='140'
						image={image}
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{title}
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							{description}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button
						size='small'
						target='_blank'
						variant='contained'
						href={link}
					>
						Github
					</Button>
				</CardActions>
			</Card>
		);
	}
}

export default CardComp;
