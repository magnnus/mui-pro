import React from 'react';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';

// core components
import Button from '@/components/CustomButtons/Button';
import CustomInput from '@/components/CustomInput/CustomInput';
import Card from '@/components/Card/Card';
import CardBody from '@/components/Card/CardBody';
import CardAvatar from '@/components/Card/CardAvatar';
import CardFooter from '@/components/Card/CardFooter';

import avatar from '@/assets/img/faces/avatar.jpg';

import styles from '@/assets/jss/pro/views/lockScreenPageStyle';

class LockScreenPage extends React.Component<WithStyles<typeof styles>> {
  state = {
    cardAnimaton: 'cardHidden',
  };

  timeOutFunction: number = null;

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    this.timeOutFunction = window.setTimeout(() => {
      this.setState({ cardAnimaton: '' });
    }, 700);
  }

  componentWillUnmount() {
    clearTimeout(this.timeOutFunction);
    this.timeOutFunction = null;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <form>
          <Card
            profile
            className={`${classes.customCardClass} ${
              classes[this.state.cardAnimaton]
            }`}
          >
            <CardAvatar profile className={classes.cardAvatar}>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.cardTitle}>Tania Andrew</h4>
              <CustomInput
                labelText="Enter Password"
                id="company-disabled"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: 'password',
                }}
              />
            </CardBody>
            <CardFooter className={classes.justifyContentCenter}>
              <Button color="rose" round>
                Unlock
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    );
  }
}

export interface ILockScreenPageTypes extends WithStyles<typeof styles> {}

export default withStyles(styles)(LockScreenPage);
