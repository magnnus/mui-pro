import React from 'react';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import styles from '@/assets/jss/pro/components/customLinearProgressStyle';

function CustomLinearProgress({ ...props }) {
  const { classes, color, ...rest } = props;
  return (
    <LinearProgress
      {...rest}
      classes={{
        root: `${classes.root} ${classes[`${color}Background`]}`,
        bar: `${classes.bar} ${classes[color]}`,
      }}
    />
  );
}

CustomLinearProgress.defaultProps = {
  color: 'gray',
};

export interface ICustomLinearProgressTypes extends WithStyles<typeof styles> {
  color:
    | 'primary'
    | 'warning'
    | 'danger'
    | 'success'
    | 'info'
    | 'rose'
    | 'gray';
}

export default withStyles(styles)(CustomLinearProgress);
