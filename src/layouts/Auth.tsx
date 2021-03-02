import React from 'react';

import { Switch, Route } from 'react-router-dom';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import AuthNavbar from '@/components/Navbars/AuthNavbar';
import Footer from '@/components/Footer/Footer';

import routes from '@/routes';

import pagesStyle from '@/assets/jss/material-dashboard-pro-react/layouts/authStyle';

import register from '@/assets/img/register.jpeg';
import login from '@/assets/img/login.jpeg';
import lock from '@/assets/img/lock.jpeg';
import error from '@/assets/img/clint-mckoy.jpg';
import pricing from '@/assets/img/bg-pricing.jpeg';

class Pages extends React.Component {
  componentDidMount() {
    document.body.style.overflow = 'unset';
  }

  getRoutes = routes => {
    return routes.map((prop, key) => {
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
  };

  getActiveRoute = routes => {
    const activeRoute = 'Default Brand Text';
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        const collapseActiveRoute = this.getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].name;
      }
    }
    return activeRoute;
  };

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <AuthNavbar brandText={this.getActiveRoute(routes)} {...rest} />
        <div className={classes.wrapper} ref="wrapper">
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

Pages.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(pagesStyle)(Pages);
