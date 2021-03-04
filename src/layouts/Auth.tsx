import React from 'react';

import { Switch, Route } from 'react-router-dom';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';

// core components
import AuthNavbar from '@/components/Navbars/AuthNavbar';
import Footer from '@/components/Footer/Footer';

import routes from '@/routes';

import styles from '@/assets/jss/pro/layouts/authStyle';

import register from '@/assets/img/register.jpeg';
import login from '@/assets/img/login.jpeg';
import lock from '@/assets/img/lock.jpeg';
import error from '@/assets/img/clint-mckoy.jpg';
import pricing from '@/assets/img/bg-pricing.jpeg';

export interface IPagesTypes extends WithStyles<typeof styles> {}

class Pages extends React.Component<IPagesTypes> {
  wrapper: HTMLDivElement = null;

  componentDidMount() {
    document.body.style.overflow = 'unset';
  }

  getRoutes = routeList => {
    return routeList.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      if (prop.layout === '/auth') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    });
  };

  getBgImage = () => {
    if (window.location.pathname.indexOf('/auth/register-page') !== -1) {
      return register;
    }
    if (window.location.pathname.indexOf('/auth/login-page') !== -1) {
      return login;
    }
    if (window.location.pathname.indexOf('/auth/pricing-page') !== -1) {
      return pricing;
    }
    if (window.location.pathname.indexOf('/auth/lock-screen-page') !== -1) {
      return lock;
    }
    if (window.location.pathname.indexOf('/auth/error-page') !== -1) {
      return error;
    }
    // TODO: 默认返回
    return error;
  };

  getActiveRoute = routeList => {
    const activeRoute = 'Default Brand Text';
    for (let i = 0; i < routeList.length; i++) {
      if (routeList[i].collapse) {
        const collapseActiveRoute = this.getActiveRoute(routeList[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (
        window.location.href.indexOf(
          routeList[i].layout + routeList[i].path,
        ) !== -1
      ) {
        return routeList[i].name;
      }
    }
    return activeRoute;
  };

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <AuthNavbar brandText={this.getActiveRoute(routes)} {...rest} />
        <div
          className={classes.wrapper}
          ref={ref => {
            this.wrapper = ref;
          }}
        >
          <div
            className={classes.fullPage}
            style={{ backgroundImage: `url(${this.getBgImage()})` }}
          >
            <Switch>{this.getRoutes(routes)}</Switch>
            <Footer white />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Pages);
