import ProjectContainer from './style';

import './index.css';

const EveryProject = (props) => {
    const { project } = props;

    return (
        <li className='every-project'>
            <div className='every-project-left-cont'>
                <img src={project.logo} alt="logo" className="project-logo" />
                <div className='every-project-text-cont-bottom'>
                    <ProjectContainer image={project.contentBg} className='every-project-content'>
                        <h1 className='every-project-heading'>{project.title}</h1>
                        <p className='every-project-desc'>{project.desc}</p>
                    </ProjectContainer>
                </div>
            </div>
            <div className='every-project-right-cont'>
                <p className='every-project-url'>{project.url}</p>
            </div>
        </li>
    );
}

export default EveryProject;