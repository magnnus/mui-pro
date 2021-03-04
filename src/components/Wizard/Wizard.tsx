import React from 'react';
import cx from 'classnames';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';
// core components
import Button from '@/components/CustomButtons/Button';
import Card from '@/components/Card/Card';

import styles from '@/assets/jss/pro/components/wizardStyle';

export interface IWizardTypes extends WithStyles<typeof styles> {
  steps: {
    stepName: string;
    stepComponent: React.ComponentType<any>;
    stepId: string;
  }[];
  color: 'primary' | 'warning' | 'danger' | 'success' | 'info' | 'rose';
  title: string;
  subtitle: string;
  previousButtonClasses: string;
  previousButtonText: string;
  nextButtonClasses: string;
  nextButtonText: string;
  finishButtonClasses: string;
  finishButtonText: string;
  finishButtonClick?(...rest: any[]): void;
  validate: boolean;
}

interface IState {
  currentStep: number;
  color: IWizardTypes['color'];
  nextButton: boolean;
  previousButton: boolean;
  finishButton: boolean;
  width: number | string;
  movingTabStyle: {
    transition: string;
  };
  allStates: {};
}

class Wizard extends React.Component<IWizardTypes, IState> {
  static defaultProps = {
    color: 'rose',
    title: 'Here should go your title',
    subtitle: 'And this would be your subtitle',
    previousButtonText: 'Previous',
    previousButtonClasses: '',
    nextButtonClasses: '',
    nextButtonText: 'Next',
    finishButtonClasses: '',
    finishButtonText: 'Finish',
  };

  wizard: HTMLDivElement = null;

  constructor(props) {
    super(props);
    let width;
    if (this.props.steps.length === 1) {
      width = '100%';
    } else if (window.innerWidth < 600) {
      if (this.props.steps.length !== 3) {
        width = '50%';
      } else {
        width = `${100 / 3}%`;
      }
    } else if (this.props.steps.length === 2) {
      width = '50%';
    } else {
      width = `${100 / 3}%`;
    }
    this.state = {
      currentStep: 0,
      color: this.props.color,
      nextButton: this.props.steps.length > 1,
      previousButton: false,
      finishButton: this.props.steps.length === 1,
      width,
      movingTabStyle: {
        transition: 'transform 0s',
      },
      allStates: {},
    };
    this.navigationStepChange = this.navigationStepChange.bind(this);
    this.refreshAnimation = this.refreshAnimation.bind(this);
    this.previousButtonClick = this.previousButtonClick.bind(this);
    this.previousButtonClick = this.previousButtonClick.bind(this);
    this.finishButtonClick = this.finishButtonClick.bind(this);
    this.updateWidth = this.updateWidth.bind(this);
  }

  componentDidMount() {
    this.refreshAnimation(0);
    window.addEventListener('resize', this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }

  updateWidth() {
    this.refreshAnimation(this.state.currentStep);
  }

  navigationStepChange(key) {
    if (this.props.steps) {
      let validationState = true;
      if (key > this.state.currentStep) {
        for (let i = this.state.currentStep; i < key; i++) {
          if (this[this.props.steps[i].stepId].sendState !== undefined) {
            this.setState(preState => ({
              allStates: {
                ...preState.allStates,
                [this.props.steps[i].stepId]: this[
                  this.props.steps[i].stepId
                ].sendState(),
              },
            }));
          }
          if (
            this[this.props.steps[i].stepId].isValidated !== undefined &&
            this[this.props.steps[i].stepId].isValidated() === false
          ) {
            validationState = false;
            break;
          }
        }
      }
      if (validationState) {
        this.setState({
          currentStep: key,
          nextButton: this.props.steps.length > key + 1,
          previousButton: key > 0,
          finishButton: this.props.steps.length === key + 1,
        });
        this.refreshAnimation(key);
      }
    }
  }

  nextButtonClick() {
    if (
      (this.props.validate &&
        ((this[this.props.steps[this.state.currentStep].stepId].isValidated !==
          undefined &&
          this[
            this.props.steps[this.state.currentStep].stepId
          ].isValidated()) ||
          this[this.props.steps[this.state.currentStep].stepId].isValidated ===
            undefined)) ||
      this.props.validate === undefined
    ) {
      if (
        this[this.props.steps[this.state.currentStep].stepId].sendState !==
        undefined
      ) {
        this.setState(preState => ({
          allStates: {
            ...preState.allStates,
            [this.props.steps[preState.currentStep].stepId]: this[
              this.props.steps[preState.currentStep].stepId
            ].sendState(),
          },
        }));
      }
      this.setState(
        preState => {
          const key = preState.currentStep + 1;
          return {
            currentStep: key,
            nextButton: this.props.steps.length > key + 1,
            previousButton: key > 0,
            finishButton: this.props.steps.length === key + 1,
          };
        },
        () => {
          this.refreshAnimation(this.state.currentStep);
        },
      );
    }
  }

  previousButtonClick() {
    if (
      this[this.props.steps[this.state.currentStep].stepId].sendState !==
      undefined
    ) {
      this.setState(preState => ({
        allStates: {
          ...preState.allStates,
          [this.props.steps[preState.currentStep].stepId]: this[
            this.props.steps[preState.currentStep].stepId
          ].sendState(),
        },
      }));
    }
    const key = this.state.currentStep - 1;
    if (key >= 0) {
      this.setState({
        currentStep: key,
        nextButton: this.props.steps.length > key + 1,
        previousButton: key > 0,
        finishButton: this.props.steps.length === key + 1,
      });
      this.refreshAnimation(key);
    }
  }

  finishButtonClick() {
    if (
      (this.props.validate === false &&
        this.props.finishButtonClick !== undefined) ||
      (this.props.validate &&
        ((this[this.props.steps[this.state.currentStep].stepId].isValidated !==
          undefined &&
          this[
            this.props.steps[this.state.currentStep].stepId
          ].isValidated()) ||
          this[this.props.steps[this.state.currentStep].stepId].isValidated ===
            undefined) &&
        this.props.finishButtonClick !== undefined)
    ) {
      this.setState(
        preState => ({
          allStates: {
            ...preState.allStates,
            [this.props.steps[preState.currentStep].stepId]: this[
              this.props.steps[preState.currentStep].stepId
            ].sendState(),
          },
        }),
        () => {
          this.props.finishButtonClick(this.state.allStates);
        },
      );
    }
  }

  refreshAnimation(index) {
    const total = this.props.steps.length;
    let liWidth = 100 / total;
    const totalSteps = this.props.steps.length;
    let moveDistance =
      (this.wizard.children[0] as HTMLElement).offsetWidth / totalSteps;
    let indexTemp = index;
    let verticalLevel = 0;

    const mobileDevice = window.innerWidth < 600 && total > 3;

    if (mobileDevice) {
      moveDistance = (this.wizard.children[0] as HTMLElement).offsetWidth / 2;
      indexTemp = index % 2;
      liWidth = 50;
    }

    this.setState({ width: `${liWidth}%` });

    const stepWidth = moveDistance;
    moveDistance *= indexTemp;

    const current = index + 1;

    if (current === 1 || (mobileDevice === true && index % 2 === 0)) {
      moveDistance -= 8;
    } else if (
      current === totalSteps ||
      (mobileDevice === true && index % 2 === 1)
    ) {
      moveDistance += 8;
    }

    if (mobileDevice) {
      verticalLevel = Math.floor(index / 2);
      verticalLevel *= 38;
    }
    const movingTabStyle = {
      width: stepWidth,
      transform: `translate3d(${moveDistance}px, ${verticalLevel}px, 0)`,
      transition: 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)',
    };
    this.setState({ movingTabStyle });
  }

  render() {
    const { classes, title, subtitle, color, steps } = this.props;
    return (
      <div
        className={classes.wizardContainer}
        ref={ref => {
          this.wizard = ref;
        }}
      >
        <Card className={classes.card}>
          <div className={classes.wizardHeader}>
            <h3 className={classes.title}>{title}</h3>
            <h5 className={classes.subtitle}>{subtitle}</h5>
          </div>
          <div className={classes.wizardNavigation}>
            <ul className={classes.nav}>
              {steps.map((prop, key) => {
                return (
                  <li
                    className={classes.steps}
                    key={key}
                    style={{ width: this.state.width }}
                  >
                    <a
                      href="#pablo"
                      className={classes.stepsAnchor}
                      onClick={e => {
                        e.preventDefault();
                        this.navigationStepChange(key);
                      }}
                    >
                      {prop.stepName}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div
              className={`${classes.movingTab} ${classes[color]}`}
              style={this.state.movingTabStyle}
            >
              {steps[this.state.currentStep].stepName}
            </div>
          </div>
          <div className={classes.content}>
            {steps.map((prop, key) => {
              const stepContentClasses = cx({
                [classes.stepContentActive]: this.state.currentStep === key,
                [classes.stepContent]: this.state.currentStep !== key,
              });
              return (
                <div className={stepContentClasses} key={key}>
                  <prop.stepComponent
                    innerRef={node => {
                      this[prop.stepId] = node;
                    }}
                    allStates={this.state.allStates}
                  />
                </div>
              );
            })}
          </div>
          <div className={classes.footer}>
            <div className={classes.left}>
              {this.state.previousButton ? (
                <Button
                  className={this.props.previousButtonClasses}
                  onClick={() => this.previousButtonClick()}
                >
                  {this.props.previousButtonText}
                </Button>
              ) : null}
            </div>
            <div className={classes.right}>
              {this.state.nextButton ? (
                <Button
                  color="rose"
                  className={this.props.nextButtonClasses}
                  onClick={() => this.nextButtonClick()}
                >
                  {this.props.nextButtonText}
                </Button>
              ) : null}
              {this.state.finishButton ? (
                <Button
                  color="rose"
                  className={this.props.finishButtonClasses}
                  onClick={() => this.finishButtonClick()}
                >
                  {this.props.finishButtonText}
                </Button>
              ) : null}
            </div>
            <div className={classes.clearfix} />
          </div>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Wizard);
