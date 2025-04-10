import ProjectContainer from './style';



import AOS from "aos";
import "aos/dist/aos.css";
import './index.css';

const EveryProject = (props) => {
    const { project } = props;

    return (
        <li className='every-project'>
            <div className='every-project-left-cont'>
                <img src={project.logo} alt="logo" className="project-logo" />
                <div className='every-project-text-cont-bottom'>
                    <div className="container">
                        <div className="background-text">0{project.projectNo}</div>
                            <div className='content'>
                                <h1 className='every-project-heading'>0{project.projectNo} - {project.title}</h1>
                                <p className='every-project-desc'>{project.desc}</p>
                            </div>
                    </div>
                    
                </div>
            </div>
            <ProjectContainer image={project.image} className='every-project-right-cont'>
                <a href={project.url} className='every-project-url'>{project.url}</a>
            </ProjectContainer>
        </li>
    );
}

export default EveryProject;