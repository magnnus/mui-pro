import React from 'react';
import cx from 'classnames';

// @material-ui/core components
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import styles from '@/assets/jss/pro/components/tableStyle';

export interface ICustomTableTypes extends WithStyles<typeof styles> {
  tableHeaderColor:
    | 'warning'
    | 'primary'
    | 'danger'
    | 'success'
    | 'info'
    | 'rose'
    | 'gray';
  tableHead: string[];
  // Of(React.ReactNode[]) || Of(PropTypes.object),
  tableData: any[];
  hover: boolean;
  coloredColls: number[];
  // Of(["warning","primary","danger","success","info","rose","gray"]) - colorsColls
  colorsColls: any[];
  customCellClasses: string[];
  customClassesForCells: number[];
  customHeadCellClasses: string[];
  customHeadClassesForCells: number[];
  striped: boolean;
  // this will cause some changes in font
  tableShopping: boolean;
}
const CustomTable: React.FC<Partial<ICustomTableTypes>> = ({
  classes,
  tableHead,
  tableData,
  tableHeaderColor,
  hover,
  colorsColls,
  coloredColls,
  customCellClasses,
  customClassesForCells,
  striped,
  tableShopping,
  customHeadCellClasses,
  customHeadClassesForCells,
}) => {
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor]}>
            <TableRow className={classes.tableRow}>
              {tableHead.map((prop, key) => {
                const tableCellClasses = `${classes.tableHeadCell} ${
                  classes.tableCell
                } ${cx({
                  [customHeadCellClasses[
                    customHeadClassesForCells.indexOf(key)
                  ]]: customHeadClassesForCells.indexOf(key) !== -1,
                  [classes.tableShoppingHead]: tableShopping,
                  [classes.tableHeadFontSize]: !tableShopping,
                })}`;
                return (
                  <TableCell className={tableCellClasses} key={key}>
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((propItem, key) => {
            let rowColor = '';
            let rowColored = false;
            let prop = propItem;
            if (propItem.color !== undefined) {
              rowColor = propItem.color;
              rowColored = true;
              prop = propItem.data;
            }
            const tableRowClasses = cx({
              [classes.tableRowHover]: hover,
              [classes[`${rowColor}Row`]]: rowColored,
              [classes.tableStripedRow]: striped && key % 2 === 0,
            });
            if (prop.total) {
              return (
                <TableRow key={key} hover={hover} className={tableRowClasses}>
                  <TableCell
                    className={classes.tableCell}
                    colSpan={prop.colspan}
                  />
                  <TableCell
                    className={`${classes.tableCell} ${classes.tableCellTotal}`}
                  >
                    Total
                  </TableCell>
                  <TableCell
                    className={`${classes.tableCell} ${classes.tableCellAmount}`}
                  >
                    {prop.amount}
                  </TableCell>
                  {tableHead.length - (prop.colspan - 0 + 2) > 0 ? (
                    <TableCell
                      className={classes.tableCell}
                      colSpan={tableHead.length - (prop.colspan - 0 + 2)}
                    />
                  ) : null}
                </TableRow>
              );
            }
            if (prop.purchase) {
              return (
                <TableRow key={key} hover={hover} className={tableRowClasses}>
                  <TableCell
                    className={classes.tableCell}
                    colSpan={prop.colspan}
                  />
                  <TableCell
                    className={`${classes.tableCell} ${classes.right}`}
                    colSpan={prop.col.colspan}
                  >
                    {prop.col.text}
                  </TableCell>
                </TableRow>
              );
            }
            return (
              <TableRow
                key={key}
                hover={hover}
                className={`${tableRowClasses}`}
              >
                {prop.map((item, k) => {
                  const tableCellClasses = `${classes.tableCell} ${cx({
                    [classes[colorsColls[coloredColls.indexOf(k)]]]:
                      coloredColls.indexOf(k) !== -1,
                    [customCellClasses[customClassesForCells.indexOf(k)]]:
                      customClassesForCells.indexOf(k) !== -1,
                  })}`;
                  return (
                    <TableCell className={tableCellClasses} key={k}>
                      {item}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

CustomTable.defaultProps = {
  tableHeaderColor: 'gray',
  hover: false,
  colorsColls: [],
  coloredColls: [],
  striped: false,
  customCellClasses: [],
  customClassesForCells: [],
  customHeadCellClasses: [],
  customHeadClassesForCells: [],
};

export default withStyles(styles)(CustomTable);
