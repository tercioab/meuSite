import React from "react";
import Button from "@mui/material/Button";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import Nav from "../components/nav";
import Header from "../components/header";
import Skills from "../components/skills";
import Footer from "../components/footer";
import CardComp from "../components/card";

class Sobre extends React.Component {
	render() {
		return (
			<>
				<Header />

				<Nav />

				<div className='about'>
					<h1>sobre mim</h1>
					<p>
						Me chamo Walthércio, atualmente residindo em São Jose Dos Campos (SP) tenho
						aproximadamente 5 anos de experiencia como design gráfico (freelancer) atuando
						na área de criação de banners, capas para álbuns musicais e peças gráficas
						para web. Atualmente estou em transição de carreira estudando desenvolvimento
						web full-stack na Trybe, já tendo concluido o bloco de fundamentos agora estou
						prestes a concluir o bloco de front end, onde tive meus conhecimentos
						aprofundados em JS, React, redux, BootStrap, CSS, Html5, Linux , Git & Bash.
						Sou uma pessoa que presa muito pela colaboração e empatia no local de trabalho
						acho que esses são principios basicos para um bom trabalho em grupo e uma boa
						convivência.
					</p>
					<div className='button-about'>
						<Button size='small' href='/helpers/Profile.pdf' variant='contained' download>
							<SimCardDownloadIcon /> Curriculum
						</Button>
                    </div>
				</div>
				<Skills />
				<Footer />
			</>
		);
	}
}

export default Sobre;
