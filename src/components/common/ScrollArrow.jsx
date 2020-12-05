import React from 'react';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import stylesConfig from '../../config/stylesConfig';

const ScrollArrowWrapper = styled.div`
  font-size: 40px;
  color: grey;
  width: fit-content;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  opacity: 0.3;
  &:hover {
    color: black;
  }

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 25px;
  }
`;

const ScrollArrow = ({
  onCallback,
  tooltipText,
  ScrollArrowIcon,
  tooltipPlacemnt,
}) => {
  return (
    <ScrollArrowWrapper onClick={onCallback}>
      <Tooltip title={tooltipText} placement={tooltipPlacemnt}>
        <ScrollArrowIcon fontSize="inherit" />
      </Tooltip>
    </ScrollArrowWrapper>
  );
};

export const ScrollArrowDown = props => (
  <ScrollArrow
    {...props}
    ScrollArrowIcon={ArrowDownwardIcon}
    tooltipPlacemnt="top"
  />
);

export const ScrollArrowUp = props => (
  <ScrollArrow
    {...props}
    ScrollArrowIcon={ArrowUpwardIcon}
    tooltipPlacemnt="bottom"
  />
);

export const ScrollArrowUpPosition = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const ScrollArrowDownPosition = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
`;
