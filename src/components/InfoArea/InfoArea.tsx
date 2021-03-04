import React from 'react';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';

import styles from '@/assets/jss/pro/components/infoStyle';

export interface IInfoAreaTypes extends WithStyles<typeof styles> {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  iconColor:
    | 'primary'
    | 'warning'
    | 'danger'
    | 'success'
    | 'info'
    | 'rose'
    | 'gray';
}

const InfoArea: React.FC<IInfoAreaTypes> = ({
  classes,
  title,
  description,
  iconColor,
  icon,
}) => {
  const Icon = icon;
  return (
    <div className={classes.infoArea}>
      <div className={`${classes.iconWrapper} ${classes[iconColor]}`}>
        <Icon className={classes.icon} />
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
};

InfoArea.defaultProps = {
  iconColor: 'gray',
};

export default withStyles(styles)(InfoArea);
