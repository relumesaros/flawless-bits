import styled from 'styled-components';
import stylesConfig from "../config/styles.config";

export default styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48%;
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    width: 100%;
    padding-top: 10px;
  }
`;
