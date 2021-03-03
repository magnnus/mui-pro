import React from 'react';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';

import styles from '@/assets/jss/pro/components/badgeStyle';

export interface IBadgeTypes extends WithStyles<typeof styles> {
  color:
    | 'primary'
    | 'warning'
    | 'danger'
    | 'success'
    | 'info'
    | 'rose'
    | 'gray';
}

const Badge: React.FC<IBadgeTypes> = ({ classes, color, children }) => {
  return (
    <span className={`${classes.badge} ${classes[color]}`}>{children}</span>
  );
};

export default withStyles(styles)(Badge);
