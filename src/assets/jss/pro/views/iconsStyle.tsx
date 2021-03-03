import { boxShadow } from '@/assets/jss/material-dashboard-pro-react';
import { createStyles } from '@material-ui/core/styles';

const iconsStyle = createStyles({
  iframe: {
    width: '100%',
    height: '500px',
    border: '0',
    ...boxShadow,
  },
  iframeContainer: {
    margin: '0 -20px 0',
  },
});

export default iconsStyle;
