import React from 'react';
import cx from 'classnames';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';

// core components
import Badge from '@/components/Badge/Badge';

import styles from '@/assets/jss/pro/components/timelineStyle';

function Timeline({ ...props }) {
  const { classes, stories, simple } = props;
  const timelineClass = `${classes.timeline} ${cx({
    [classes.timelineSimple]: simple,
  })}`;
  return (
    <ul className={timelineClass}>
      {stories.map((prop, key) => {
        const panelClasses = `${classes.timelinePanel} ${cx({
          [classes.timelinePanelInverted]: prop.inverted || simple,
          [classes.timelineSimplePanel]: simple,
        })}`;
        const timelineBadgeClasses = `${classes.timelineBadge} ${
          classes[prop.badgeColor]
        } ${cx({
          [classes.timelineSimpleBadge]: simple,
        })}`;
        return (
          <li className={classes.item} key={key}>
            {prop.badgeIcon ? (
              <div className={timelineBadgeClasses}>
                <prop.badgeIcon className={classes.badgeIcon} />
              </div>
            ) : null}
            <div className={panelClasses}>
              {prop.title ? (
                <div className={classes.timelineHeading}>
                  <Badge color={prop.titleColor}>{prop.title}</Badge>
                </div>
              ) : null}
              <div className={classes.timelineBody}>{prop.body}</div>
              {prop.footerTitle ? (
                <h6 className={classes.footerTitle}>{prop.footerTitle}</h6>
              ) : null}
              {prop.footer ? <hr className={classes.footerLine} /> : null}
              {prop.footer ? (
                <div className={classes.timelineFooter}>{prop.footer}</div>
              ) : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export interface ITimelineTypes extends WithStyles<typeof styles> {
  stories: object[];
  simple: boolean;
}

export default withStyles(styles)(Timeline);
