import styled from 'styled-components';

import stylesConfig from "../config/styles.config";

export default styled.h2`
  max-width: 750px;
  font-size: 40px;
  
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    padding: 0;
    text-align: center;
    margin: 0;
  }
`;
