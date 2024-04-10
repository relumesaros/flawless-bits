import styled from 'styled-components';
import stylesConfig from '../config/styles.config';
import LoaderTransparent from "./LoaderTransparent";

interface ISubmitButtonWrapper {
    $isLoading: boolean;
}

const SubmitButtonWrapper = styled.button<ISubmitButtonWrapper>`
  font-family: ${stylesConfig.fontFamily};
  color: #ffffff;
  width: 100%;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 2px;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  cursor: ${(props) => props.$isLoading ? 'default' : 'pointer'};
  background-color: ${stylesConfig.colors.blue};
  border: none;
  border-radius: 5px;
  height: 45px;
  transition: background-color 0.2s;
  position: relative;

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
    height: 25px;
  }
`

interface IButton {
    callback?: () => void;
    disabled: boolean;
    isLoading: boolean;
}

const Button = ({callback, disabled, isLoading}: IButton) => {
    return (
        <SubmitButtonWrapper
            onClick={callback}
            disabled={disabled}
            $isLoading={isLoading}
        >
            <LoaderTransparent isActive={isLoading}>
                Submit
            </LoaderTransparent>
        </SubmitButtonWrapper>
    );
};

export default Button;
