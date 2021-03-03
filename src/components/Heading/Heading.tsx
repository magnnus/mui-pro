import React from 'react';
import cx from 'classnames';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';

import styles from '@/assets/jss/pro/components/headingStyle';

function Heading({ ...props }) {
  const { textAlign, category, title, classes } = props;
  const heading = `${classes.heading} ${cx({
    [classes[`${textAlign}TextAlign`]]: textAlign !== undefined,
  })}`;
  if (title !== undefined || category !== undefined) {
    return (
      <div className={heading}>
        {title !== undefined ? (
          <h3 className={classes.title}>{title}</h3>
        ) : null}
        {category !== undefined ? (
          <p className={classes.category}>{category}</p>
        ) : null}
      </div>
    );
  }
  return null;
}

export interface IHeadingTypes extends WithStyles<typeof styles> {
  title: React.ReactNode;
  category: React.ReactNode;
  textAlign: 'right' | 'left' | 'center';
}

export default withStyles(styles)(Heading);
