import React from 'react';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';

import styles from '@/assets/jss/pro/components/typographyStyle';

function Danger({ ...props }) {
  const { classes, children } = props;
  return (
    <div className={`${classes.defaultFontStyle} ${classes.dangerText}`}>
      {children}
    </div>
  );
}

export interface IDangerTypes extends WithStyles<typeof styles> {}

export default withStyles(styles)(Danger);
