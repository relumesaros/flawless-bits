import styled from 'styled-components';

interface IImageBackground {
    $imageSrc: string;
}

const ImageBackground = styled.div<IImageBackground>`
  content: "";
  background: url("${props => props.$imageSrc}") no-repeat center;
  background-size: cover;
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
`;

export default ImageBackground;
