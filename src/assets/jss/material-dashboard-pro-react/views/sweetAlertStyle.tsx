import { grayColor } from '@/assets/jss/material-dashboard-pro-react';

import buttonStyle from '@/assets/jss/material-dashboard-pro-react/components/buttonStyle';

const sweetAlertStyle = {
  cardTitle: {
    marginTop: '0',
    marginBottom: '3px',
    color: grayColor[2],
    fontSize: '18px',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  left: {
    textAlign: 'left',
  },
  ...buttonStyle,
};

export default sweetAlertStyle;
