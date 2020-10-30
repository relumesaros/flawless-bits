import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { TextField } from '@material-ui/core';

export const FormHelperTextWrapper = styled.div`
  height: 20px;
  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    height: 10px;
  }
`;

export const FormGroupFieldWrapper = styled.div`
  margin: 5px 0;
  width: 100%;

  @media only screen and (max-width: 900px), screen and (max-height: 800px) {
    margin: 5px 0;
  }
`;

const FormGroupNumericFieldStyles = {
  root: {
    borderRadius: '4px',
    border: 'none',
    backgroundColor: 'white',
    padding: '10px 0',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: '2px',

    '@media only screen and (max-width: 900px), screen and (max-height: 800px)': {
      padding: '0',
    },
  },

  text: {
    fontSize: '15px',
    color: '#212121',

    '@media only screen and (max-width: 900px), screen and (max-height: 800px)': {
      fontSize: '8px',
      marginTop: '8px!important',
    },
  },

  formHelperText: {
    fontSize: '15px',

    '@media only screen and (max-width: 900px), screen and (max-height: 800px)': {
      fontSize: '8px',
    },
  },
};
const FormGroupField = ({
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
