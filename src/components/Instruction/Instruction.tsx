import React from 'react';

import cx from 'classnames';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';

// core components
import GridContainer from '@/components/Grid/GridContainer';
import GridItem from '@/components/Grid/GridItem';

import styles from '@/assets/jss/pro/components/instructionStyle';

function Instruction({ ...props }) {
  const {
    classes,
    title,
    text,
    image,
    className,
    imageClassName,
    imageAlt,
  } = props;
  const instructionClasses = cx({
    [classes.instruction]: true,
    [className]: className !== undefined,
  });
  const pictureClasses = cx({
    [classes.picture]: true,
    [imageClassName]: imageClassName !== undefined,
  });
  return (
    <div className={instructionClasses}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <strong>{title}</strong>
          <p>{text}</p>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <div className={pictureClasses}>
            <img src={image} alt={imageAlt} className={classes.image} />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}

Instruction.defaultProps = {
  imageAlt: '...',
};

export interface IInstructionTypes extends WithStyles<typeof styles> {
  title: React.ReactNode;
  text: React.ReactNode;
  image: string;
  imageAlt: string;
  className: string;
  imageClassName: string;
}

export default withStyles(styles)(Instruction);
