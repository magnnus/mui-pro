import React from 'react';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';

import styles from '@/assets/jss/pro/components/typographyStyle';

function Info({ ...props }) {
  const { classes, children } = props;
  return (
    <div className={`${classes.defaultFontStyle} ${classes.infoText}`}>
      {children}
    </div>
  );
}

export interface IInfoTypes extends WithStyles<typeof styles> {}

export default withStyles(styles)(Info);
