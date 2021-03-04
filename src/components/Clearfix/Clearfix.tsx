import React from 'react';

// mterial-ui components
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';

const styles = createStyles({
  clearfix: {
    '&:after,&:before': {
      display: 'table',
      content: '" "',
    },
    '&:after': {
      clear: 'both',
    },
  },
});

function Clearfix({ ...props }) {
  const { classes } = props;
  return <div className={classes.clearfix} />;
}

export interface IClearfixTypes extends WithStyles<typeof styles> {}

export default withStyles(styles)(Clearfix);
