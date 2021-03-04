import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components

import SwipeableViews from 'react-swipeable-views';

// material-ui components
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

// core components
import GridContainer from '@/components/Grid/GridContainer';
import GridItem from '@/components/Grid/GridItem';

import styles from '@/assets/jss/pro/components/navPillsStyle';

export interface INavPillsTypes extends WithStyles<typeof styles> {
  // index of the default active pill
  active?: number;
  tabs?: {
    tabButton: string;
    tabIcon?: React.ComponentType<any>;
    tabContent: React.ReactNode;
  }[];
  color?: 'primary' | 'warning' | 'danger' | 'success' | 'info' | 'rose';
  direction?: string;
  horizontal?: {
    tabsGrid: {
      [key: string]: any;
    };
    contentGrid: {
      [key: string]: any;
    };
  };
  alignCenter?: boolean;
}
class NavPills extends React.Component<
  INavPillsTypes,
  {
    active: number;
  }
> {
  static defaultProps: Partial<INavPillsTypes> = {
    active: 0,
    color: 'primary',
  };

  state = {
    active: this.props.active,
  };

  handleChange = (event, active) => {
    this.setState({ active });
  };

  handleChangeIndex = index => {
    this.setState({ active: index });
  };

  render() {
    const {
      classes,
      tabs,
      direction,
      color,
      horizontal,
      alignCenter,
    } = this.props;
    const flexContainerClasses = classNames({
      [classes.flexContainer]: true,
      [classes.horizontalDisplay]: horizontal !== undefined,
    });
    const tabButtons = (
      <Tabs
        classes={{
          root: classes.root,
          fixed: classes.fixed,
          flexContainer: flexContainerClasses,
          indicator: classes.displayNone,
        }}
        value={this.state.active}
        onChange={this.handleChange}
        centered={alignCenter}
      >
        {tabs.map((prop, key) => {
          const icon: any = {};
          if (prop.tabIcon !== undefined) {
            icon.icon = <prop.tabIcon className={classes.tabIcon} />;
          }
          const pillsClasses = classNames({
            [classes.pills]: true,
            [classes.horizontalPills]: horizontal !== undefined,
            [classes.pillsWithIcons]: prop.tabIcon !== undefined,
          });
          return (
            <Tab
              label={prop.tabButton}
              key={key}
              {...icon}
              classes={{
                root: pillsClasses,
                labelContainer: classes.labelContainer,
                label: classes.label,
                selected: classes[color],
              }}
            />
          );
        })}
      </Tabs>
    );
    const tabContent = (
      <div className={classes.contentWrapper}>
        <SwipeableViews
          axis={direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.active}
          onChangeIndex={this.handleChangeIndex}
          style={{ overflowY: 'hidden' }}
        >
          {tabs.map((prop, key) => {
            return (
              <div className={classes.tabContent} key={key}>
                {prop.tabContent}
              </div>
            );
          })}
        </SwipeableViews>
      </div>
    );
    return horizontal !== undefined ? (
      <GridContainer>
        <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
        <GridItem {...horizontal.contentGrid}>{tabContent}</GridItem>
      </GridContainer>
    ) : (
      <div>
        {tabButtons}
        {tabContent}
      </div>
    );
  }
}

export default withStyles(styles)(NavPills);
