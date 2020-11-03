import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { TextField } from '@material-ui/core';
import stylesConfig from '../../config/stylesConfig';

export const FormHelperTextWrapper = styled.div`
  height: 14px;
  @media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px) {
    height: 12px;
  }
`;

export const FormGroupFieldWrapper = styled.div`
  width: 100%;
`;

const FormGroupNumericFieldStyles = {
  root: {
    borderRadius: '4px',
    border: 'none',
    backgroundColor: 'white',
    padding: '0 0 5px 0',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: '2px',

    [`@media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px)`]: {
      padding: '0',
    },
  },

  text: {
    fontSize: '15px',
    color: stylesConfig.colors.text,

    [`@media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px)`]: {
      fontSize: '10px'
    },
  },

  formHelperText: {
    fontSize: '10px',

    [`@media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px)`]: {
      fontSize: '8px',
    },
  },
};
const FormGroupField = (
  {
    inputLabel,
    classes,
    fieldValue,
    name,
    onFieldUpdate,
    showError,
  }) => {
  return (
    <FormGroupFieldWrapper>
      <FormControl fullWidth>
        <TextField
          inputProps={{ className: classes.text }}
          classes={{ root: classes.root }}
          InputLabelProps={{
            className: classes.text
          }}
          label={inputLabel}
          value={fieldValue.value}
          name={name}
          onChange={onFieldUpdate}
          error={!!fieldValue.error}
          inputRef={fieldValue.ref}
        />
      </FormControl>

      {showError && (
        <FormHelperTextWrapper>
          <FormHelperText
            classes={{ root: classes.formHelperText }}
            error={!!fieldValue.error}
          >
            {fieldValue.error}
          </FormHelperText>
        </FormHelperTextWrapper>
      )}
    </FormGroupFieldWrapper>
  );
};

export default withStyles(FormGroupNumericFieldStyles)(FormGroupField);
