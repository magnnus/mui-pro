import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import styles from '@/assets/jss/pro/components/cardFooterStyle';

function CardFooter({ ...props }) {
  const {
    classes,
    className,
    children,
    plain,
    profile,
    pricing,
    testimonial,
    stats,
    chart,
    product,
    ...rest
  } = props;
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile || testimonial,
    [classes.cardFooterPricing]: pricing,
    [classes.cardFooterTestimonial]: testimonial,
    [classes.cardFooterStats]: stats,
    [classes.cardFooterChart]: chart || product,
    [className]: className !== undefined,
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
}

export interface ICardFooterTypes extends WithStyles<typeof styles> {
  className: string;
  plain: boolean;
  profile: boolean;
  pricing: boolean;
  testimonial: boolean;
  stats: boolean;
  chart: boolean;
  product: boolean;
}

export default withStyles(styles)(CardFooter);
