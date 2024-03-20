import styled from 'styled-components';
import stylesConfig from "../config/styles.config";

export default styled.p`
  font-size: 12px;
  margin: 0;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 8px;
  }
`;
