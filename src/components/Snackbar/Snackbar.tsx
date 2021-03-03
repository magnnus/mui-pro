import React from 'react';

import cx from 'classnames';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Snack from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

// @material-ui/icons
import Close from '@material-ui/icons/Close';

import styles from '@/assets/jss/pro/components/snackbarContentStyle';

function Snackbar({ ...props }) {
  const { classes, message, color, close, icon, place, open } = props;
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
        onClick={() => props.closeNotification()}
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
      classes={{
        anchorOriginTopCenter: classes.top20,
        anchorOriginTopRight: classes.top40,
        anchorOriginTopLeft: classes.top40,
      }}
      anchorOrigin={{
        vertical: place.indexOf('t') === -1 ? 'bottom' : 'top',
        horizontal:
          place.indexOf('l') !== -1
            ? 'left'
            : place.indexOf('c') !== -1
            ? 'center'
            : 'right',
      }}
      open={open}
      message={
        <div>
          {icon !== undefined ? <props.icon className={iconClasses} /> : null}
          <span className={messageClasses}>{message}</span>
        </div>
      }
      action={action}
      ContentProps={{
        classes: {
          root: `${classes.root} ${classes[color]}`,
          message: classes.message,
        },
      }}
    />
  );
}

Snackbar.defaultProps = {
  color: 'info',
};

export interface ISnackbarTypes extends WithStyles<typeof styles> {
  message: React.ReactNode;
  color: 'info' | 'success' | 'warning' | 'danger' | 'primary' | 'rose';
  close: boolean;
  icon?(): void;
  place: 'tl' | 'tr' | 'tc' | 'br' | 'bl' | 'bc';
  open: boolean;
}

export default withStyles(styles)(Snackbar);
