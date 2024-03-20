import React from 'react';
import styled from 'styled-components';
import stylesConfig from '../config/styles.config';
import FormGroupFieldWrapper from "./FormGroupFieldWrapper";
import FormHelperTextWrapper from "./FormHelperTextWrapper";

const InputWrapper = styled.input`
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid ${stylesConfig.colors.gray1Opacity30};
  height: 40px;
  width: 100%;
  padding: 10px;
  font-size: 15px;
  font-family: ${stylesConfig.fontFamily};

  &:hover {
    border: 1px solid ${stylesConfig.colors.gray1};
  }

  &:focus {
    border: 1px solid ${stylesConfig.colors.gray1};
    outline: none;
  }

  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    font-size: 9px;
    letter-spacing: 1px;
  }
`

interface IInputFieldText {
    inputLabel: string;
    name: string;
    error?: string;
    register: any;
    validation?: any;
}

const InputFieldText = (
    {
        inputLabel,
        name,
        error,
        register,
        validation
    }: IInputFieldText) => {
    return (
        <FormGroupFieldWrapper>
            <InputWrapper
                id={name}
                name={name}
                placeholder={inputLabel}
                {...register(name, validation)}
            />
            <FormHelperTextWrapper>
                {error}
            </FormHelperTextWrapper>
        </FormGroupFieldWrapper>
    );
};

export default InputFieldText;
