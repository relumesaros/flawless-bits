import React from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

const LoaderTransparentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #aab5cca1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default ({ children, active, size = 38 }) => {
  return (
    <>
      {children}
      {active && (
        <LoaderTransparentWrapper>
          <CircularProgress style={{ color: '#c1c1c1' }} size={size} />
        </LoaderTransparentWrapper>
      )}
    </>
  );
};
