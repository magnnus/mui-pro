import React from 'react';

// @material-ui/core components
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import Grid, { GridProps } from '@material-ui/core/Grid';

const styles = createStyles({
  grid: {
    margin: '0 -15px',
    width: 'calc(100% + 30px)',
    // '&:before,&:after':{
    //   display: 'table',
    //   content: '" "',
    // },
    // '&:after':{
    //   clear: 'both',
    // }
  },
});

export interface IGrideContainerTypes extends WithStyles<typeof styles> {
  className?: string;
}

const GridContainer: React.FC<IGrideContainerTypes & GridProps> = props => {
  const { classes, children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={`${classes.grid} ${className}`}>
      {children}
    </Grid>
  );
};

export default withStyles(styles)(GridContainer);
