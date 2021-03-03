import React from 'react';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';

import styles from '@/assets/jss/pro/components/typographyStyle';

function Success({ ...props }) {
  const { classes, children } = props;
  return (
    <div className={`${classes.defaultFontStyle} ${classes.successText}`}>
      {children}
    </div>
  );
}

export interface ISuccessTypes extends WithStyles<typeof styles> {}

export default withStyles(styles)(Success);
