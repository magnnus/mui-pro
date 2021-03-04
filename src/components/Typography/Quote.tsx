import React from 'react';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';

import styles from '@/assets/jss/pro/components/typographyStyle';

function Quote({ ...props }) {
  const { classes, text, author } = props;
  return (
    <blockquote className={`${classes.defaultFontStyle} ${classes.quote}`}>
      <p className={classes.quoteText}>{text}</p>
      <small className={classes.quoteAuthor}>{author}</small>
    </blockquote>
  );
}

export interface IQuoteTypes extends WithStyles<typeof styles> {
  text: React.ReactNode;
  author: React.ReactNode;
}

export default withStyles(styles)(Quote);
