import React from 'react';

import cx from 'classnames';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';

// material-ui icons
import Menu from '@material-ui/icons/Menu';
import MoreVert from '@material-ui/icons/MoreVert';
import ViewList from '@material-ui/icons/ViewList';

// core components
import Button from '@/components/CustomButtons/Button';

import styles from '@/assets/jss/pro/components/adminNavbarStyle';
import AdminNavbarLinks from './AdminNavbarLinks';

function AdminNavbar({ ...props }) {
  const { classes, color, rtlActive, brandText } = props;
  const appBarClasses = cx({
    [` ${classes[color]}`]: color,
  });
  const sidebarMinimize = `${classes.sidebarMinimize} ${cx({
    [classes.sidebarMinimizeRTL]: rtlActive,
  })}`;
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden smDown implementation="css">
          <div className={sidebarMinimize}>
            {props.miniActive ? (
              <Button
                justIcon
                round
                color="white"
                onClick={props.sidebarMinimize}
              >
                <ViewList className={classes.sidebarMiniIcon} />
              </Button>
            ) : (
              <Button
                justIcon
                round
                color="white"
                onClick={props.sidebarMinimize}
              >
                <MoreVert className={classes.sidebarMiniIcon} />
              </Button>
            )}
          </div>
        </Hidden>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <Button href="#" className={classes.title} color="transparent">
            {brandText}
          </Button>
        </div>
        <Hidden smDown implementation="css">
          <AdminNavbarLinks rtlActive={rtlActive} />
        </Hidden>
        <Hidden mdUp implementation="css">
          <Button
            className={classes.appResponsive}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </Button>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export interface IAdminNavbarTypes extends WithStyles<typeof styles> {
  color: 'primary' | 'info' | 'success' | 'warning' | 'danger';
  rtlActive: boolean;
  brandText: string;
}

export default withStyles(styles)(AdminNavbar);
