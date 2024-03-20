import styled from 'styled-components';
import stylesConfig from '../config/styles.config';

const SubmitButtonWrapper = styled.button`
  font-family: ${stylesConfig.fontFamily};
  color: #ffffff;
  width: 100%;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 2px;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  background-color: ${stylesConfig.colors.blue};
  border: none;
  border-radius: 5px;
  height: 45px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${stylesConfig.colors.blueStrong};
  }

  &:disabled {
    background-color: ${stylesConfig.colors.tangerine};
    color: #ffffff;
  }
;
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 9px;
    letter-spacing: 1px;
  }
`

interface IButton {
    callback: () => void;
    disabled: boolean;
}

const Button = ({callback, disabled}: IButton) => {
    return (
        <SubmitButtonWrapper
            onClick={callback}
            disabled={disabled}
        >
            Submit
        </SubmitButtonWrapper>
    );
};

export default Button;
