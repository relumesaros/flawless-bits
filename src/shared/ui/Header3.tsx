import styled from 'styled-components';

import stylesConfig from "../config/styles.config";

export default styled.h3`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 12px;
    margin: 0;
  }
`;
