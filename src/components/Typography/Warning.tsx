import React from 'react';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';

import styles from '@/assets/jss/pro/components/typographyStyle';

function Warning({ ...props }) {
  const { classes, children } = props;
  return (
    <div className={`${classes.defaultFontStyle} ${classes.warningText}`}>
      {children}
    </div>
  );
}

export interface IWarningTypes extends WithStyles<typeof styles> {}

export default withStyles(styles)(Warning);
