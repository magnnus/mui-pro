import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components

// material-ui components
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import styles from '@/assets/jss/pro/components/buttonStyle';

function RegularButton({ ...props }) {
  const {
    classes,
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    muiClasses,
    ...rest
  } = props;
  const btnClasses = classNames({
    [classes.button]: true,
    [classes[size]]: size,
    [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    [className]: className,
  });
  return (
    <Button {...rest} classes={muiClasses} className={btnClasses}>
      {children}
    </Button>
  );
}

export interface IRegularButtonTypes extends WithStyles<typeof styles> {
  color:
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'rose'
    | 'white'
    | 'twitter'
    | 'facebook'
    | 'google'
    | 'linkedin'
    | 'pinterest'
    | 'youtube'
    | 'tumblr'
    | 'github'
    | 'behance'
    | 'dribbble'
    | 'reddit'
    | 'transparent';
  size: 'sm' | 'lg';
  simple: boolean;
  round: boolean;
  fullWidth: boolean;
  disabled: boolean;
  block: boolean;
  link: boolean;
  justIcon: boolean;
  className: string;
  muiClasses: object;
}

export default withStyles(styles)(RegularButton);
