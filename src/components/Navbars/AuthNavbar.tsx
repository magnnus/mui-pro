import React from 'react';
import cx from 'classnames';

import { NavLink } from 'react-router-dom';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Menu from '@material-ui/icons/Menu';
import PersonAdd from '@material-ui/icons/PersonAdd';
import Fingerprint from '@material-ui/icons/Fingerprint';
import LockOpen from '@material-ui/icons/LockOpen';
import MonetizationOn from '@material-ui/icons/MonetizationOn';

// core components
import Button from '@/components/CustomButtons/Button';

import styles from '@/assets/jss/pro/components/authNavbarStyle';

export interface IAuthNavbarTypes extends WithStyles<typeof styles> {
  color?: 'primary' | 'info' | 'success' | 'warning' | 'danger';
  brandText: string;
  location?: Location;
}

class AuthNavbar extends React.Component<IAuthNavbarTypes, { open: boolean }> {
  state = {
    open: false,
  };

  handleDrawerToggle = () => {
    this.setState(preState => ({ open: !preState.open }));
  };

  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1;
  }

  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ open: false });
    }
  }

  render() {
    const { classes, color, brandText } = this.props;
    const appBarClasses = cx({
      [` ${classes[color]}`]: color,
    });
    const list = (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <NavLink to="/admin/dashboard" className={classes.navLink}>
            <Dashboard className={classes.listItemIcon} />
            <ListItemText
              primary="Dashboard"
              disableTypography
              className={classes.listItemText}
            />
          </NavLink>
        </ListItem>
        <ListItem className={classes.listItem}>
          <NavLink
            to="/auth/pricing-page"
            className={cx(classes.navLink, {
              [classes.navLinkActive]: this.activeRoute('/auth/pricing-page'),
            })}
          >
            <MonetizationOn className={classes.listItemIcon} />
            <ListItemText
              primary="Pricing"
              disableTypography
              className={classes.listItemText}
            />
          </NavLink>
        </ListItem>
        <ListItem className={classes.listItem}>
          <NavLink
            to="/auth/register-page"
            className={cx(classes.navLink, {
              [classes.navLinkActive]: this.activeRoute('/auth/register-page'),
            })}
          >
            <PersonAdd className={classes.listItemIcon} />
            <ListItemText
              primary="Register"
              disableTypography
              className={classes.listItemText}
            />
          </NavLink>
        </ListItem>
        <ListItem className={classes.listItem}>
          <NavLink
            to="/auth/login-page"
            className={cx(classes.navLink, {
              [classes.navLinkActive]: this.activeRoute('/auth/login-page'),
            })}
          >
            <Fingerprint className={classes.listItemIcon} />
            <ListItemText
              primary="Login"
              disableTypography
              className={classes.listItemText}
            />
          </NavLink>
        </ListItem>
        <ListItem className={classes.listItem}>
          <NavLink
            to="/auth/lock-screen-page"
            className={cx(classes.navLink, {
              [classes.navLinkActive]: this.activeRoute(
                '/auth/lock-screen-page',
              ),
            })}
          >
            <LockOpen className={classes.listItemIcon} />
            <ListItemText
              primary="Lock"
              disableTypography
              className={classes.listItemText}
            />
          </NavLink>
        </ListItem>
      </List>
    );
    return (
      <AppBar position="static" className={classes.appBar + appBarClasses}>
        <Toolbar className={classes.container}>
          <Hidden smDown>
            <div className={classes.flex}>
              <Button href="#" className={classes.title} color="transparent">
                {brandText}
              </Button>
            </div>
          </Hidden>
          <Hidden mdUp>
            <div className={classes.flex}>
              <Button href="#" className={classes.title} color="transparent">
                MD Pro React
              </Button>
            </div>
          </Hidden>
          <Hidden smDown>{list}</Hidden>
          <Hidden mdUp>
            <Button
              className={classes.sidebarButton}
              color="transparent"
              justIcon
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <Menu />
            </Button>
          </Hidden>
          <Hidden mdUp>
            <Hidden mdUp>
              <Drawer
                variant="temporary"
                anchor="right"
                open={this.state.open}
                classes={{
                  paper: classes.drawerPaper,
                }}
                onClose={this.handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {list}
              </Drawer>
            </Hidden>
          </Hidden>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(AuthNavbar);
