import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';
// @material-ui/icons
// core components

import styles from '@/assets/jss/pro/components/cardAvatarStyle';

export interface ICardAvatarTypes extends WithStyles<typeof styles> {
  children: React.ReactNode;
  className?: string;
  profile?: boolean;
  plain?: boolean;
  testimonial?: boolean;
  testimonialFooter?: boolean;
}

const CardAvatar: React.FC<ICardAvatarTypes> = ({ ...props }) => {
  const {
    classes,
    children,
    className,
    plain,
    profile,
    testimonial,
    testimonialFooter,
    ...rest
  } = props;
  const cardAvatarClasses = classNames({
    [classes.cardAvatar]: true,
    [classes.cardAvatarProfile]: profile,
    [classes.cardAvatarPlain]: plain,
    [classes.cardAvatarTestimonial]: testimonial,
    [classes.cardAvatarTestimonialFooter]: testimonialFooter,
    [className]: className !== undefined,
  });
  return (
    <div className={cardAvatarClasses} {...rest}>
      {children}
    </div>
  );
};

export default withStyles(styles)(CardAvatar);
