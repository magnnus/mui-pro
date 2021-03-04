import React from 'react';

// @material-ui/core components
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = createStyles({
  grid: {
    padding: '0 15px !important',
  },
});

export interface IGridItemTypes extends WithStyles<typeof styles> {
  className?: string;
  [key: string]: any;
}

const GridItem: React.FC<IGridItemTypes> = props => {
  const { classes, children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={`${classes.grid} ${className}`}>
      {children}
    </Grid>
  );
};

export default withStyles(styles)(GridItem);
