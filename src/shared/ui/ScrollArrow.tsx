import React from 'react';
import styled from 'styled-components';
import stylesConfig from '../config/styles.config';
import onScrollToHandler from "../../features/navbar/lib/useScroll";

const ScrollWrapper = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ScrollDownWrapper = styled(ScrollWrapper)`
  bottom: 20px;
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    bottom: 10px;
  }
`;

const ScrollDownComponentWrapper = styled.div`
  cursor: pointer;
  text-align: center;
  width: 50px;
  height: 40px;
  font-size: 40px;
  line-height: 40px;
  color: ${stylesConfig.colors.gray1};

  &:hover {
    background: ${stylesConfig.colors.graySection};
    color: ${stylesConfig.colors.gray1Opacity30};
  }

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    width: 30px;
    height: 25px;
    font-size: 20px;
    line-height: 20px;
  }
`;

interface IScrollArrow {
    scrollDestination: string
}

export const ScrollArrowDown = ({scrollDestination}: IScrollArrow) => {
    const {onScrollTo} = onScrollToHandler();
    return (
        <ScrollDownWrapper>
            <ScrollDownComponentWrapper onClick={() => onScrollTo(scrollDestination)}>
                &#x2193;
            </ScrollDownComponentWrapper>
        </ScrollDownWrapper>
    )
}

export const ScrollUpWrapper = styled(ScrollWrapper)`
  top: 20px;
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    top: 10px;
  }
`;

export const ScrollArrowUp = ({scrollDestination}: IScrollArrow) => {
    const {onScrollTo} = onScrollToHandler();
    return (
        <ScrollUpWrapper>
            <ScrollDownComponentWrapper onClick={() => onScrollTo(scrollDestination)}>
                &#x2191;
            </ScrollDownComponentWrapper>
        </ScrollUpWrapper>
    )
}

