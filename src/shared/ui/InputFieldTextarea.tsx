import React from 'react';
import styled from 'styled-components';
import stylesConfig from '../config/styles.config';
import FormHelperTextWrapper from "./FormHelperTextWrapper";
import FormGroupFieldWrapper from "./FormGroupFieldWrapper";

const InputWrapper = styled.textarea`
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid ${stylesConfig.colors.gray1Opacity30};
  width: auto;
  padding: 10px;
  font-size: 15px;
  font-family: ${stylesConfig.fontFamily};
  resize: none;

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

interface IInputFieldTextarea {
    inputLabel: string;
    name: string;
    error?: string;
    register: any;
    validation?: any;
}

const InputFieldTextarea = (
    {
        inputLabel,
        name,
        error,
        register,
        validation
    }: IInputFieldTextarea) => {
    return (
        <FormGroupFieldWrapper>
            <InputWrapper
                id={name}
                name={name}
                rows="5"
                placeholder={inputLabel}
                {...register(name, validation)}
            />
            <FormHelperTextWrapper>
                {error}
            </FormHelperTextWrapper>
        </FormGroupFieldWrapper>
    );
};

export default InputFieldTextarea;
