import * as React from 'react';

import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import stylesConfig from '../../config/stylesConfig';

export const styles = {
  blue: {
    fontFamily: stylesConfig.colors.fontFamily,
    color: '#ffffff',
    width: '100%',
    height: '100%',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: '2px',
    textAlign: 'center',
    fontWeight: 500,
    fontSize: '20px',
    backgroundColor: stylesConfig.colors.blue,
    '&:hover': {
      backgroundColor: stylesConfig.colors.blueStrong,
    },
    '&:disabled': {
      backgroundColor: stylesConfig.colors.tangerine,
      color: '#ffffff',
    },

    '@media only screen and (max-width: 900px), screen and (max-height: 800px)': {
      fontSize: '9px',
      letterSpacing: '1px',
    },
  },
};

export const ButtonCommonStyles = {
  blue: 'blue',
};

const ButtonCommon = props => {
  const { content, classes, callback, disabled, classType } = props;
  return (
    <Button
      className={classes[classType]}
      onClick={callback}
      disabled={disabled}
    >
      {content}
    </Button>
  );
};

export default withStyles(styles)(ButtonCommon);
