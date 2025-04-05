import styled from "styled-components";

const ProjectContainer = styled.div`
background-image: url(${(props) => props.image});
background-size: cover;
width: 100%;`
;

export default ProjectContainer;