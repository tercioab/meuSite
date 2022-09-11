import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import getUser from "../helpers/data";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import Button from "@mui/material/Button";
import { FaceRetouchingOffOutlined } from "@mui/icons-material";

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			user: [],
		};
	}

	componentDidMount = async () => {
		this.setState({
			user: await getUser(),
		});
	};

	render() {
		const { user } = this.state;
		console.log(user);
		return (
			<>
				<Header />
				<Nav />
				<content>
					<div className='bio'>
						<h1>Olá me chamo {user.name}</h1>
						<p> Sou {user.bio}</p>
						<div className='bio-buttons'>
							<Button
								size='small'
								target='_blank'
								variant='contained'
								href='https://www.linkedin.com/in/walthercio-almeida/'
							>
								<LinkedInIcon /> Linkedin
							</Button>{" "}
							<Button
								size='small'
								target='_blank'
								variant='contained'
								href='https://github.com/tercioab'
								icon={FaceRetouchingOffOutlined}
							>
								<GitHubIcon />
								Github
							</Button>
							
						</div>
					</div>
				</content>
			</>
		);
	}
}

export default Home;
