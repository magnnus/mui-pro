import { grayColor } from '@/assets/jss/material-dashboard-pro-react';
import { createStyles } from '@material-ui/core/styles';

const headingStyle = createStyles({
  heading: {
    marginBottom: '30px',
  },
  rightTextAlign: {
    textAlign: 'right',
  },
  leftTextAlign: {
    textAlign: 'left',
  },
  centerTextAlign: {
    textAlign: 'center',
  },
  title: {
    marginTop: '10px',
    color: grayColor[2],
    textDecoration: 'none',
  },
  category: {
    margin: '0 0 10px',
  },
});

export default headingStyle;
