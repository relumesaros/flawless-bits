import styled from 'styled-components';
import stylesConfig from "../config/styles.config";

export default styled.p`
  font-size: 20px;
  letter-spacing: 2px;
  margin: 0;
  line-height: 30px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 10px;
    line-height: 15px;
    letter-spacing: 1px;
  }
`;
