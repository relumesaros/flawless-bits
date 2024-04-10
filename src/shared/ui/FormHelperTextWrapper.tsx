import styled from 'styled-components';
import SubText from "./SubText";
import stylesConfig from "../config/styles.config";

export default styled(SubText)`
  height: 40px;
  color: ${stylesConfig.colors.red};
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    height: 15px;
  }
`;
