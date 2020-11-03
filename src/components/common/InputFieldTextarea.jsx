import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import { TextareaAutosize } from '@material-ui/core';
import stylesConfig from '../../config/stylesConfig';

export const FormGroupFieldWrapper = styled.div`
  margin: 20px 0 0 0;
  width: 100%;
`;

const FormGroupNumericFieldStyles = {
  root: {
    borderRadius: '4px',
    border: 'solid 1px #dedede',
    backgroundColor: '#ffff',
    fontSize: '15px',
    fontFamily: stylesConfig.fontFamily,
    padding: '10px 15px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.21,
    letterSpacing: 'normal',
    color: stylesConfig.colors.text,

    [`@media only screen and (max-width: ${stylesConfig.maxWidth}px), screen and (max-height: ${stylesConfig.maxHeight}px)`]: {
      fontSize: '10px',
    },
  },
};

const FormGroupField = (
  {
    placeholder,
    classes,
    fieldValue,
    name,
    onFieldUpdate,
  }) => {
  return (
    <FormGroupFieldWrapper>
      <FormControl fullWidth>
        <TextareaAutosize
          className={classes.root}
          placeholder={placeholder}
          rows={2}
          value={fieldValue.value}
          name={name}
          onChange={onFieldUpdate}
        />
      </FormControl>
    </FormGroupFieldWrapper>
  );
};

export default withStyles(FormGroupNumericFieldStyles)(FormGroupField);
