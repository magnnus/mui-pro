import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import styles from '@/assets/jss/pro/components/cardStyle';

export interface ICardTypes extends WithStyles<typeof styles> {
  className: string;
  plain: boolean;
  profile: boolean;
  blog: boolean;
  raised: boolean;
  background: boolean;
  pricing: boolean;
  testimonial: boolean;
  color: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'rose';
  product: boolean;
  chart: boolean;
  login: boolean;
}

const Card: React.FC<Partial<ICardTypes>> = ({
  classes,
  className,
  children,
  plain,
  profile,
  blog,
  raised,
  background,
  pricing,
  color,
  product,
  testimonial,
  chart,
  login,
  ...rest
}) => {
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile || testimonial,
    [classes.cardBlog]: blog,
    [classes.cardRaised]: raised,
    [classes.cardBackground]: background,
    [classes.cardPricingColor]:
      (pricing && color !== undefined) || (pricing && background !== undefined),
    [classes[color]]: color,
    [classes.cardPricing]: pricing,
    [classes.cardProduct]: product,
    [classes.cardChart]: chart,
    [classes.cardLogin]: login,
    [className]: className !== undefined,
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
};

export default withStyles(styles)(Card);
