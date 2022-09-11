import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Button } from "@mui/material";

class CardComp extends React.Component {
	render() {
		return (
			<Card sx={{ maxWidth: 345 }}>
				<CardActionArea>
					<CardMedia
						component='img'
						height='140'
						image='https://github.com/tercioab/felp22_page/raw/main/pagina1.png'
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							Lizard
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							Lizards are a widespread group of squamate reptiles, with over 6,000
							species, ranging across all continents except Antarctica
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button
						size='small'
						target='_blank'
						variant='contained'
						href='https://github.com/tercioab'
					>
						Github
					</Button>
				</CardActions>
			</Card>
		);
	}
}

export default CardComp;
