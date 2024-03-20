import React from 'react';
import styled from 'styled-components';

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

interface ILoaderTransparent {
    children: () => JSX.Element;
    isActive: boolean;
}

const LoaderTransparent = ({children, isActive}: ILoaderTransparent) => {
    return (
        <>
            {children}
            {isActive && (
                <LoaderTransparentWrapper>
                    <p>Loading</p>
                    {/*<CircularProgress style={{ color: '#c1c1c1' }} size={size} />*/}
                </LoaderTransparentWrapper>
            )}
        </>
    );
};

export default LoaderTransparent;
