import stylesConfig from "../../shared/config/styles.config";
import styled from 'styled-components';

export default styled.div`
  box-sizing: border-box;
  margin-top: ${stylesConfig.navbarHeight.desktop - 1}px;
  height: calc(100% - ${stylesConfig.navbarHeight.desktop - 1}px);
  width: 100%;
  position: absolute;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    margin-top: ${stylesConfig.navbarHeight.mobile - 1}px;
    height: calc(100% - ${stylesConfig.navbarHeight.mobile - 1}px);
  }
`;
