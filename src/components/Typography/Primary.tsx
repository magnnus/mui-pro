import React from 'react';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';

import styles from '@/assets/jss/pro/components/typographyStyle';

function Primary({ ...props }) {
  const { classes, children } = props;
  return (
    <div className={`${classes.defaultFontStyle} ${classes.primaryText}`}>
      {children}
    </div>
  );
}

export interface IPrimaryTypes extends WithStyles<typeof styles> {}

export default withStyles(styles)(Primary);
