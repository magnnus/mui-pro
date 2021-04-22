import React from 'react';
// react component used to create sweet alerts
import SweetAlert from 'react-bootstrap-sweetalert';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';

// core components
import Heading from '@/components/Heading/Heading';
import GridContainer from '@/components/Grid/GridContainer';
import GridItem from '@/components/Grid/GridItem';
import Button from '@/components/CustomButtons/Button';
import Card from '@/components/Card/Card';
import CardBody from '@/components/Card/CardBody';

import styles from '@/assets/jss/pro/views/sweetAlertStyle';

class SweetAlertPage extends React.Component<WithStyles<typeof styles>> {
  state = {
    alert: null,
    show: false,
  };

  basicAlert = () => {
    this.setState({
      alert: (
        <SweetAlert
          style={{ display: 'block', marginTop: '-100px' }}
          title="Here's a message!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={`${this.props.classes.button} ${this.props.classes.success}`}
        />
      ),
    });
  };

  titleAndTextAlert = () => {
    this.setState({
      alert: (
        <SweetAlert
          style={{ display: 'block', marginTop: '-100px' }}
          title="Here's a message!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={`${this.props.classes.button} ${this.props.classes.info}`}
        >
          It's pretty, isn't it?
        </SweetAlert>
      ),
    });
  };

  successAlert = () => {
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{ display: 'block', marginTop: '-100px' }}
          title="Good job!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={`${this.props.classes.button} ${this.props.classes.success}`}
        >
          You clicked the button!
        </SweetAlert>
      ),
    });
  };

  htmlAlert = () => {
    this.setState({
      alert: (
        <SweetAlert
          style={{ display: 'block', marginTop: '-100px' }}
          title="HTML example"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={`${this.props.classes.button} ${this.props.classes.success}`}
        >
          You can use <b>bold</b> text, <a href="/">links</a> and other HTML
          tags
        </SweetAlert>
      ),
    });
  };

  warningWithConfirmMessage = () => {
    this.setState({
      alert: (
        <SweetAlert
          warning
          style={{ display: 'block', marginTop: '-100px' }}
          title="Are you sure?"
          onConfirm={() => this.successDelete()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={`${this.props.classes.button} ${this.props.classes.success}`}
          cancelBtnCssClass={`${this.props.classes.button} ${this.props.classes.danger}`}
          confirmBtnText="Yes, delete it!"
          cancelBtnText="Cancel"
          showCancel
        >
          You will not be able to recover this imaginary file!111
        </SweetAlert>
      ),
    });
  };

  warningWithConfirmAndCancelMessage = () => {
    this.setState({
      alert: (
        <SweetAlert
          warning
          style={{ display: 'block', marginTop: '-100px' }}
          title="Are you sure?"
          onConfirm={() => this.successDelete()}
          onCancel={() => this.cancelDetele()}
          confirmBtnCssClass={`${this.props.classes.button} ${this.props.classes.success}`}
          cancelBtnCssClass={`${this.props.classes.button} ${this.props.classes.danger}`}
          confirmBtnText="Yes, delete it!"
          cancelBtnText="Cancel"
          showCancel
        >
          You will not be able to recover this imaginary file!22
        </SweetAlert>
      ),
    });
  };

  autoCloseAlert = () => {
    this.setState({
      alert: (
        <SweetAlert
          style={{ display: 'block', marginTop: '-100px' }}
          title="Auto close alert!"
          onConfirm={() => this.hideAlert()}
          showConfirm={false}
        >
          I will close in 2 seconds.
        </SweetAlert>
      ),
    });
    setTimeout(this.hideAlert, 2000);
  };

  inputAlert = () => {
    this.setState({
      alert: (
        <SweetAlert
          input
          showCancel
          style={{ display: 'block', marginTop: '-100px' }}
          title="Input something"
          onConfirm={e => this.inputConfirmAlert(e)}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={`${this.props.classes.button} ${this.props.classes.info}`}
          cancelBtnCssClass={`${this.props.classes.button} ${this.props.classes.danger}`}
        />
      ),
    });
  };

  inputConfirmAlert = e => {
    this.setState({ alert: e });
    setTimeout(this.inputConfirmAlertNext, 200);
  };

  inputConfirmAlertNext = () => {
    const inputValue = this.state.alert;
    this.setState({
      alert: (
        <SweetAlert
          style={{ display: 'block', marginTop: '-100px' }}
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={`${this.props.classes.button} ${this.props.classes.info}`}
          title={
            <p>
              You entered: <b>{inputValue}</b>
            </p>
          }
        />
      ),
    });
  };

  successDelete = () => {
    this.setState({
      alert: (
        <SweetAlert
          success
          style={{ display: 'block', marginTop: '-100px' }}
          title="Deleted!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={`${this.props.classes.button} ${this.props.classes.success}`}
        >
          Your imaginary file has been deleted.
        </SweetAlert>
      ),
    });
  };

  cancelDetele = () => {
    this.setState({
      alert: (
        <SweetAlert
          danger
          style={{ display: 'block', marginTop: '-100px' }}
          title="Cancelled"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={`${this.props.classes.button} ${this.props.classes.success}`}
        >
          Your imaginary file is safe :)
        </SweetAlert>
      ),
    });
  };

  hideAlert = () => {
    this.setState({
      alert: null,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Heading
          textAlign="center"
          title="Sweet Alert"
          category={
            <span>
              A beautiful plugin, that replace the classic alert, Handcrafted by
              our friend{' '}
              <a
                target="_blank"
                href="https://github.com/djorg83"
                rel="noopener noreferrer"
              >
                Daniel Jorgensen
              </a>
              . Please check out the{' '}
              <a
                href="https://github.com/djorg83/react-bootstrap-sweetalert"
                target="_blank"
                rel="noopener noreferrer"
              >
                full documentation.
              </a>
              .
            </span>
          }
        />
        {this.state.alert}
        <GridContainer>
          <GridItem xs={12} sm={12} md={3}>
            <Card>
              <CardBody>
                <div className={classes.center}>
                  <h5>Basic example</h5>
                  <Button color="rose" onClick={this.basicAlert}>
                    Try me!
                  </Button>
                </div>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card>
              <CardBody>
                <div className={classes.center}>
                  <h5>A title with a text under</h5>
                  <Button color="rose" onClick={this.titleAndTextAlert}>
                    Try me!
                  </Button>
                </div>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card>
              <CardBody>
                <div className={classes.center}>
                  <h5>A success message</h5>
                  <Button color="rose" onClick={this.successAlert}>
                    Try me!
                  </Button>
                </div>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card>
              <CardBody>
                <div className={classes.center}>
                  <h5>Custom HTML description</h5>
                  <Button color="rose" onClick={this.htmlAlert}>
                    Try me!
                  </Button>
                </div>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card>
              <CardBody>
                <div className={classes.center}>
                  <h5>
                    A warning message, with a function attached to the "Confirm"
                    Button...
                  </h5>
                  <Button color="rose" onClick={this.warningWithConfirmMessage}>
                    Try me!
                  </Button>
                </div>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card>
              <CardBody>
                <div className={classes.center}>
                  <h5>
                    ...and by passing a parameter, you can execute something
                    else for "Cancel"
                  </h5>
                  <Button
                    color="rose"
                    onClick={this.warningWithConfirmAndCancelMessage}
                  >
                    Try me!
                  </Button>
                </div>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card>
              <CardBody>
                <div className={classes.center}>
                  <h5>A message with auto close timer set to 2 seconds</h5>
                  <Button color="rose" onClick={this.autoCloseAlert}>
                    Try me!
                  </Button>
                </div>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card>
              <CardBody>
                <div className={classes.center}>
                  <h5>Modal window with input field</h5>
                  <Button color="rose" onClick={this.inputAlert}>
                    Try me!
                  </Button>
                </div>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(SweetAlertPage);
