import { defaultListboxReducer } from "@mui/base"
import React from "react"

class Skills extends React.Component {
    render() {
        return (
            <div className='tecnologies'>
					<h1>SKILLS:</h1>
					<a
						href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                        target='_blank'
                        className="link-skills"
						rel='noreferrer'
					>
						<img
							src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg'
							width='50'
							height='50'
							alt='Javascript'
						/>
						<p>JAVASCRIPT</p>
					</a>

					<a href='https://reactjs.org/' className="link-skills" target='_blank' rel='noreferrer'>
						<img
							src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg'
							width='50'
							height='50'
							alt='React'
						/>
						<p>REACT</p>
					</a>

					<a href='https://redux.js.org/' className="link-skills" target='_blank' rel='noreferrer'>
						<img
							src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg'
							width='50'
							height='50'
							alt='Redux'
						/>
						<p>REDUX</p>
					</a>

					<a
						href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
						target='_blank'
                        rel='noreferrer'
                        className="link-skills"
					>
						<img
							src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg'
							width='50'
							height='50'
							alt='HTML5'
						/>
						<p>HTML5</p>
					</a>

                    <a href='https://www.w3.org/TR/CSS/#css'
                        className="link-skills" target='_blank' rel='noreferrer'>
						<img
							src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg'
							width='50'
							height='50'
							alt='CSS3'
						/>
						<p>CSS3</p>
					</a>

                    <a href='https://getbootstrap.com/' target='_blank'
                        className="link-skills" rel='noreferrer'>
						<img
							src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg'
							width='50'
							height='50'
							alt='Bootstrap'
						/>
						<p>BOOTSTRAP</p>
					</a>
                    <a href="https://pt.wikipedia.org/wiki/Linux"
                        className="link-skills"
                        target='_blank' rel='noreferrer' >
						<img
							src='https://profilinator.rishav.dev/skills-assets/linux-original.svg'
							alt='Linux'
							height='50'
                        />
                        <p>LINUX</p>
					</a>

                    <a href="https://git-scm.com/"
                        className="link-skills"
                        target='_blank' rel='noreferrer' >
						<img
							src='https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg'
							alt='Git'
							height='50'
                        />
                        
                        <p>GIT</p>
					</a>

                    <a href="https://pt.wikipedia.org/wiki/Bash"
                        className="link-skills"
                        target='_blank' rel='noreferrer'
                    >
						<img
							src='https://profilinator.rishav.dev/skills-assets/gnu_bash-icon.svg'
							alt='Bash'
							height='50'
                        />
                        <p>BASH</p>
					</a>

					<a
                        href='https://www.adobe.com/uk/products/
                        photoshop.html'
                        target='_blank'
                        className="link-skills"
						rel='noreferrer'
					>
						<img
							src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored.svg'
							width='50'
							height='50'
							alt='Photoshop'
                        />
                        <p>PHOTOSHOP</p>
					</a>

					<a
                        href='https://www.adobe.com/uk/products/
                        premiere.html'
                        className="link-skills"
						target='_blank'
						rel='noreferrer'
					>
						<img
							src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/premierepro-colored.svg'
							width='50'
							height='50'
							alt='Premiere Pro'
                        />
                        <p>PREMIERE</p>
					</a>
				</div>
        )
    }
}

export default Skills;