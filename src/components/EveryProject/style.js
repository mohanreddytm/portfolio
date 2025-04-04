import styled from "styled-components";

const ProjectContainer = styled.div`
    background-image:url(${props => props.image});
    background-size:cover;

`;

export default ProjectContainer;