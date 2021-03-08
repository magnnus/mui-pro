import { cardTitle, blackColor, hexToRgb } from '@/assets/jss/mui-pro';
import { createStyles } from '@material-ui/core/styles';

import customSelectStyle from '@/assets/jss/pro/customSelectStyle';
import customCheckboxRadioSwitch from '@/assets/jss/pro/customCheckboxRadioSwitch';

const extendedFormsStyle = createStyles({
  ...customCheckboxRadioSwitch,
  ...customSelectStyle,
  cardTitle,
  cardIconTitle: {
    ...cardTitle,
    marginTop: '15px',
    marginBottom: '0px',
  },
  label: {
    cursor: 'pointer',
    paddingLeft: '0',
    color: `rgba(${hexToRgb(blackColor)}, 0.26)`,
    fontSize: '14px',
    lineHeight: '1.428571429',
    fontWeight: 400,
    display: 'inline-flex',
  },
  mrAuto: {
    marginRight: 'auto',
  },
  mlAuto: {
    marginLeft: 'auto',
  },
  block: {},
});

export default extendedFormsStyle;
