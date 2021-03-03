import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import styles from '@/assets/jss/pro/components/cardIconStyle';

function CardIcon({ ...props }) {
  const { classes, className, children, color, ...rest } = props;
  const cardIconClasses = classNames({
    [classes.cardIcon]: true,
    [classes[`${color}CardHeader`]]: color,
    [className]: className !== undefined,
  });
  return (
    <div className={cardIconClasses} {...rest}>
      {children}
    </div>
  );
}

export interface ICardIconTypes extends WithStyles<typeof styles> {
  className: string;
  color: 'warning' | 'success' | 'danger' | 'info' | 'primary' | 'rose';
}

export default withStyles(styles)(CardIcon);
