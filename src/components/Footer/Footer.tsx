import React from 'react';

import cx from 'classnames';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import styles from '@/assets/jss/pro/components/footerStyle';

function Footer({ ...props }) {
  const { classes, fluid, white, rtlActive } = props;
  const container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white,
  });
  const anchor =
    classes.a +
    cx({
      [` ${classes.whiteColor}`]: white,
    });
  const block = cx({
    [classes.block]: true,
    [classes.whiteColor]: white,
  });
  return (
    <footer className={classes.footer}>
      <div className={container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#home" className={block}>
                {rtlActive ? 'الصفحة الرئيسية' : 'Home'}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#company" className={block}>
                {rtlActive ? 'شركة' : 'Company'}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#portfolio" className={block}>
                {rtlActive ? 'بعدسة' : 'Portfolio'}
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#blog" className={block}>
                {rtlActive ? 'مدونة' : 'Blog'}
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          &copy;
          {new Date().getFullYear()}
          <a href="/" className={anchor}>
            {rtlActive ? 'توقيت الإبداعية' : 'Hey Guys'}
          </a>
          {rtlActive
            ? ', مصنوعة مع الحب لشبكة الإنترنت أفضل'
            : ', made with passion for a better web'}
        </p>
      </div>
    </footer>
  );
}

export interface IFooterTypes extends WithStyles<typeof styles> {
  fluid: boolean;
  white: boolean;
  rtlActive: boolean;
}

export default withStyles(styles)(Footer);
