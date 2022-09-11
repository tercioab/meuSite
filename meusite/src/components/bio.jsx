import React from "react";
import getUser from "../helpers/data";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import { FaceRetouchingOffOutlined } from "@mui/icons-material";

class Bio extends React.Component {
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
		return (
			<>
				<content>
					<div className='bio'>
						<h1>Olá me chamo {user.name}</h1>
						<p>{user.bio}</p>
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

export default Bio;
