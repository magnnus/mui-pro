import {
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  grayColor,
} from '@/assets/jss/mui-pro';
import { createStyles } from '@material-ui/core/styles';

const cardTextStyle = createStyles({
  cardText: {
    float: 'none',
    display: 'inline-block',
    marginRight: '0',
    borderRadius: '3px',
    backgroundColor: grayColor[0],
    padding: '15px',
    marginTop: '-20px',
  },
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
});

export default cardTextStyle;
