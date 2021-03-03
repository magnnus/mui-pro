import React from 'react';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

// @material-ui/icons
import ExpandMore from '@material-ui/icons/ExpandMore';

import styles from '@/assets/jss/pro/components/accordionStyle';

export interface IAccordionTypes extends WithStyles<typeof styles> {
  // index of the default active collapse
  active?: number;
  collapses: {
    title: string;
    content: React.ReactNode;
  }[];
}
class Accordion extends React.Component<IAccordionTypes, { active: number }> {
  static defaultProps = {
    active: -1,
  };

  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
    };
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      active: expanded ? panel : -1,
    });
  };

  render() {
    const { classes, collapses } = this.props;
    return (
      <div className={classes.root}>
        {collapses.map((prop, key) => {
          return (
            <ExpansionPanel
              expanded={this.state.active === key}
              onChange={this.handleChange(key)}
              // eslint-disable-next-line react/no-array-index-key
              key={key}
              classes={{
                root: classes.expansionPanel,
                expanded: classes.expansionPanelExpanded,
              }}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMore />}
                classes={{
                  root: classes.expansionPanelSummary,
                  expanded: classes.expansionPanelSummaryExpaned,
                  content: classes.expansionPanelSummaryContent,
                  expandIcon: classes.expansionPanelSummaryExpandIcon,
                }}
              >
                <h4 className={classes.title}>{prop.title}</h4>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.expansionPanelDetails}>
                {prop.content}
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles)(Accordion);
