import React from 'react';
import styled from 'styled-components';

const LinearGradientFlexWrapper = styled.div`
  display: flex;
  height: 100%;
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const LinearGradientFlexRowWrapper = styled.div`
  position: relative;
  flex: 1;
`;

const LinearGradient = styled.div`
  height: 100%;
  background: linear-gradient(#0000000a, #0000001a, #ff000017) no-repeat
    center/1px 100%;
`;

export const LinearGradientAsc = () => (
  <LinearGradientFlexWrapper>
    <LinearGradientFlexRowWrapper>
      <LinearGradient />
    </LinearGradientFlexRowWrapper>
    <LinearGradientFlexRowWrapper>
      <LinearGradient />
    </LinearGradientFlexRowWrapper>
    <LinearGradientFlexRowWrapper>
      <LinearGradient />
    </LinearGradientFlexRowWrapper>
  </LinearGradientFlexWrapper>
);
