import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import styles from '@/assets/jss/pro/components/cardBodyStyle';

function CardBody({ ...props }) {
  const {
    classes,
    className,
    children,
    background,
    plain,
    formHorizontal,
    pricing,
    signup,
    color,
    profile,
    calendar,
    ...rest
  } = props;
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyBackground]: background,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyFormHorizontal]: formHorizontal,
    [classes.cardPricing]: pricing,
    [classes.cardSignup]: signup,
    [classes.cardBodyColor]: color,
    [classes.cardBodyProfile]: profile,
    [classes.cardBodyCalendar]: calendar,
    [className]: className !== undefined,
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

export interface ICardBodyTypes extends WithStyles<typeof styles> {
  className: string;
  background: boolean;
  plain: boolean;
  formHorizontal: boolean;
  pricing: boolean;
  signup: boolean;
  color: boolean;
  profile: boolean;
  calendar: boolean;
}

export default withStyles(styles)(CardBody);
