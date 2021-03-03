import React from 'react';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';

// core components
import GridContainer from '@/components/Grid/GridContainer';
import GridItem from '@/components/Grid/GridItem';

import errorPageStyles from '@/assets/jss/pro/views/errorPageStyles';

class ErrorPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.contentCenter}>
        <GridContainer>
          <GridItem md={12}>
            <h1 className={classes.title}>404</h1>
            <h2 className={classes.subTitle}>Page not found :(</h2>
            <h4 className={classes.description}>
              Ooooups! Looks like you got lost.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export interface IErrorPageTypes extends WithStyles<typeof styles> {}

export default withStyles(errorPageStyles)(ErrorPage);
