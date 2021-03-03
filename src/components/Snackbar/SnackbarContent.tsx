import React from 'react';

import cx from 'classnames';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Snack from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';

// @material-ui/icons
import Close from '@material-ui/icons/Close';

import styles from '@/assets/jss/pro/components/snackbarContentStyle';

function SnackbarContent({ ...props }) {
  const { classes, message, color, close, icon } = props;
  let action = [];
  const messageClasses = cx({
    [classes.iconMessage]: icon !== undefined,
  });
  if (close !== undefined) {
    action = [
      <IconButton
        className={classes.iconButton}
        key="close"
        aria-label="Close"
        color="inherit"
      >
        <Close className={classes.close} />
      </IconButton>,
    ];
  }
  const iconClasses = cx({
    [classes.icon]: classes.icon,
    [classes.infoIcon]: color === 'info',
    [classes.successIcon]: color === 'success',
    [classes.warningIcon]: color === 'warning',
    [classes.dangerIcon]: color === 'danger',
    [classes.primaryIcon]: color === 'primary',
    [classes.roseIcon]: color === 'rose',
  });
  return (
    <Snack
      message={
        <div>
          {icon !== undefined ? <props.icon className={iconClasses} /> : null}
          <span className={messageClasses}>{message}</span>
        </div>
      }
      classes={{
        root: `${classes.root} ${classes[color]}`,
        message: classes.message,
      }}
      action={action}
    />
  );
}

SnackbarContent.defaultProps = {
  color: 'info',
};

export interface ISnackbarContentTypes extends WithStyles<typeof styles> {
  message: React.ReactNode;
  color: 'info' | 'success' | 'warning' | 'danger' | 'primary' | 'rose';
  close: boolean;
  icon?(): void;
}

export default withStyles(styles)(SnackbarContent);
