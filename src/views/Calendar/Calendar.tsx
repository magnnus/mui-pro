import React from 'react';
// react component used to create a calendar with events on it
import BigCalendar from 'react-big-calendar';
// dependency plugin for react-big-calendar
import moment from 'moment';
// react component used to create alerts
import SweetAlert from 'react-bootstrap-sweetalert';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';

// core components
import Heading from '@/components/Heading/Heading';
import GridContainer from '@/components/Grid/GridContainer';
import GridItem from '@/components/Grid/GridItem';
import Card from '@/components/Card/Card';
import CardBody from '@/components/Card/CardBody';

import styles from '@/assets/jss/pro/components/buttonStyle';

import { events } from '@/variables/general';

const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends React.Component<
  WithStyles<typeof styles>,
  {
    events: any[];
    alert: React.ReactNode;
  }
> {
  state = {
    events,
    alert: null,
  };

  // eslint-disable-next-line class-methods-use-this
  selectedEvent(event) {
    alert(event.title);
  }

  addNewEventAlert(slotInfo) {
    this.setState({
      alert: (
        <SweetAlert
          input
          showCancel
          style={{ display: 'block', marginTop: '-100px' }}
          title="Input something"
          onConfirm={e => this.addNewEvent(e, slotInfo)}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={`${this.props.classes.button} ${this.props.classes.success}`}
          cancelBtnCssClass={`${this.props.classes.button} ${this.props.classes.danger}`}
        />
      ),
    });
  }

  addNewEvent(e, slotInfo) {
    this.setState(preState => {
      const newEvents = preState.events;
      newEvents.push({
        title: e,
        start: slotInfo.start,
        end: slotInfo.end,
      });
      return {
        alert: null,
        events: newEvents,
      };
    });
  }

  hideAlert = () => {
    this.setState({
      alert: null,
    });
  };

  // eslint-disable-next-line class-methods-use-this
  eventColors(event, start, end, isSelected) {
    let backgroundColor = 'event-';
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    event.color
      ? (backgroundColor += event.color)
      : (backgroundColor += 'default');
    return {
      className: backgroundColor,
    };
  }

  render() {
    return (
      <div>
        <Heading
          textAlign="center"
          title="React Big Calendar"
          category={
            <span>
              A beautiful react component made by{' '}
              <a
                href="https://github.com/intljusticemission"
                target="_blank"
                rel="noopener noreferrer"
              >
                International Justice Mission
              </a>
              . Please checkout their{' '}
              <a
                href="https://github.com/intljusticemission/react-big-calendar"
                target="_blank"
                rel="noopener noreferrer"
              >
                full documentation.
              </a>
            </span>
          }
        />
        {this.state.alert}
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10}>
            <Card>
              <CardBody calendar>
                <BigCalendar
                  selectable
                  localizer={localizer}
                  events={this.state.events}
                  defaultView="month"
                  scrollToTime={new Date(1970, 1, 1, 6)}
                  defaultDate={new Date()}
                  onSelectEvent={event => this.selectedEvent(event)}
                  onSelectSlot={slotInfo => this.addNewEventAlert(slotInfo)}
                  eventPropGetter={this.eventColors}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(Calendar);
