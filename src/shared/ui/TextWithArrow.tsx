import styled from 'styled-components';

import Text from "./Text";
import stylesConfig from "../config/styles.config";

const WhyUsTextContainer = styled.div`
  display: flex;
  padding: 20px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    padding: 0;
  }
`;

const ArrowRightIconWrapper = styled.div`
  font-size: 20px;
  padding: 3px 5px;

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 10px;
  }
`;

interface IWhyUsItem {
    text: string;
}

const TextWithArrow = ({text}: IWhyUsItem) => {
    return (
        <WhyUsTextContainer>
            <ArrowRightIconWrapper>-</ArrowRightIconWrapper>
            <Text>{text}</Text>
        </WhyUsTextContainer>
    )
}

export default TextWithArrow
