import React from 'react';

import cx from 'classnames';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import styles from '@/assets/jss/pro/components/paginationStyle';

function Pagination({ ...props }) {
  const { classes, pages, color } = props;
  return (
    <ul className={classes.pagination}>
      {pages.map((prop, key) => {
        const paginationLink = cx({
          [classes.paginationLink]: true,
          [classes[color]]: prop.active,
          [classes.disabled]: prop.disabled,
        });
        return (
          <li className={classes.paginationItem} key={key}>
            {prop.onClick !== undefined ? (
              <Button onClick={prop.onClick} className={paginationLink}>
                {prop.text}
              </Button>
            ) : (
              <Button
                onClick={() => console.log(`you've clicked ${prop.text}`)}
                className={paginationLink}
              >
                {prop.text}
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

Pagination.defaultProps = {
  color: 'primary',
};

export interface IPaginationTypes extends WithStyles<typeof styles> {
  pages: {
    active: boolean;
    disabled: boolean;
    text: number | 'PREV' | 'NEXT' | '...';
    onClick?(): void;
  }[];
  color?: 'primary' | 'info' | 'success' | 'warning' | 'danger';
}

export default withStyles(styles)(Pagination);
