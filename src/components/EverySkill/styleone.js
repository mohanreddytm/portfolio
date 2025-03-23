import styled from "styled-components";

const ImageContainer = styled.div`
    background-image:url(${props => props.image});
    background-size:cover;
`


export default ImageContainer