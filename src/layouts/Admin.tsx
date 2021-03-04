import React from 'react';
import cx from 'classnames';

import { Switch, Route } from 'react-router-dom';
// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';

// core components
import AdminNavbar from '@/components/Navbars/AdminNavbar';
import Footer from '@/components/Footer/Footer';
import Sidebar from '@/components/Sidebar/Sidebar';
import FixedPlugin from '@/components/FixedPlugin/FixedPlugin';

import routes from '@/routes';

import styles from '@/assets/jss/pro/layouts/adminStyle';

import image from '@/assets/img/sidebar-2.jpg';
import logo from '@/assets/img/logo-white.svg';

let ps;

interface IState {
  mobileOpen: boolean;
  miniActive: boolean;
  image: string;
  color: string;
  bgColor: string;
  hasImage: boolean;
  fixedClasses: string;
}
class Dashboard extends React.Component<any, IState> {
  state: IState = {
    mobileOpen: false,
    miniActive: false,
    image,
    color: 'blue',
    bgColor: 'black',
    hasImage: true,
    fixedClasses: 'dropdown',
  };

  mainPanel: HTMLDivElement = null;

  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(this.mainPanel, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
      document.body.style.overflow = 'hidden';
    }
    window.addEventListener('resize', this.resizeFunction);
  }

  componentWillUnmount() {
    if (navigator.platform.indexOf('Win') > -1) {
      ps.destroy();
    }
    window.removeEventListener('resize', this.resizeFunction);
  }

  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ mobileOpen: false });
      }
    }
  }

  handleImageClick = img => {
    this.setState({ image: img });
  };

  handleColorClick = color => {
    this.setState({ color });
  };

  handleBgColorClick = bgColor => {
    this.setState({ bgColor });
  };

  handleHasImage = () => {};

  handleFixedClick = () => {
    if (this.state.fixedClasses === 'dropdown') {
      this.setState({ fixedClasses: 'dropdown show' });
    } else {
      this.setState({ fixedClasses: 'dropdown' });
    }
  };

  handleDrawerToggle = () => {
    this.setState(preState => ({ mobileOpen: !preState.mobileOpen }));
  };

  getRoute() {
    return this.props.location.pathname !== '/admin/full-screen-maps';
  }

  getActiveRoute = (routeList: any[]) => {
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

  getRoutes = routeList => {
    return routeList.map((prop, key) => {
      if (prop.collapse) {
        return this.getRoutes(prop.views);
      }
      if (prop.layout === '/admin') {
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

  sidebarMinimize = () => {
    this.setState(preState => ({ miniActive: !preState.miniActive }));
  };

  resizeFunction = () => {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  };

  render() {
    const { classes, ...rest } = this.props;
    const mainPanel = `${classes.mainPanel} ${cx({
      [classes.mainPanelSidebarMini]: this.state.miniActive,
      [classes.mainPanelWithPerfectScrollbar]:
        navigator.platform.indexOf('Win') > -1,
    })}`;
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={routes}
          logoText="Hey Guys"
          logo={logo}
          image={this.state.image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color={this.state.color}
          bgColor={this.state.bgColor}
          miniActive={this.state.miniActive}
          {...rest}
        />
        <div
          className={mainPanel}
          ref={ref => {
            this.mainPanel = ref;
          }}
        >
          <AdminNavbar
            sidebarMinimize={this.sidebarMinimize}
            miniActive={this.state.miniActive}
            brandText={this.getActiveRoute(routes)}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          {/* On the /maps/full-screen-maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>
                <Switch>{this.getRoutes(routes)}</Switch>
              </div>
            </div>
          ) : (
            <div className={classes.map}>
              <Switch>{this.getRoutes(routes)}</Switch>
            </div>
          )}
          {this.getRoute() ? <Footer fluid /> : null}
          <FixedPlugin
            handleImageClick={this.handleImageClick}
            handleColorClick={this.handleColorClick}
            handleBgColorClick={this.handleBgColorClick}
            handleHasImage={this.handleHasImage}
            color={this.state.color}
            bgColor={this.state.bgColor}
            bgImage={this.state.image}
            handleFixedClick={this.handleFixedClick}
            fixedClasses={this.state.fixedClasses}
            sidebarMinimize={this.sidebarMinimize}
            miniActive={this.state.miniActive}
          />
        </div>
      </div>
    );
  }
}

export interface IDashboardTypes extends WithStyles<typeof styles> {}

export default withStyles(styles)(Dashboard);
