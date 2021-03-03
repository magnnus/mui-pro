import React from 'react';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const style = {
  grid: {
    padding: '0 15px !important',
  },
};

function GridItem({ ...props }) {
  const { classes, children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={`${classes.grid} ${className}`}>
      {children}
    </Grid>
  );
}

export default withStyles(styles)(GridItem);
