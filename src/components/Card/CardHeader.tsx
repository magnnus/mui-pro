import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import styles from '@/assets/jss/pro/components/cardHeaderStyle';

function CardHeader({ ...props }) {
  const {
    classes,
    className,
    children,
    color,
    plain,
    image,
    contact,
    signup,
    stats,
    icon,
    text,
    ...rest
  } = props;
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[`${color}CardHeader`]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderImage]: image,
    [classes.cardHeaderContact]: contact,
    [classes.cardHeaderSignup]: signup,
    [classes.cardHeaderStats]: stats,
    [classes.cardHeaderIcon]: icon,
    [classes.cardHeaderText]: text,
    [className]: className !== undefined,
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}

export interface ICardHeaderTypes extends WithStyles<typeof styles> {
  className: string;
  color: 'warning' | 'success' | 'danger' | 'info' | 'primary' | 'rose';
  plain: boolean;
  image: boolean;
  contact: boolean;
  signup: boolean;
  stats: boolean;
  icon: boolean;
  text: boolean;
}

export default withStyles(styles)(CardHeader);
