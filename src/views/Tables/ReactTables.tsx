import React from 'react';
// react component for creating dynamic tables
import ReactTable from 'react-table';

// @material-ui/core components
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
// @material-ui/icons
import Assignment from '@material-ui/icons/Assignment';
import Dvr from '@material-ui/icons/Dvr';
import Favorite from '@material-ui/icons/Favorite';
import Close from '@material-ui/icons/Close';
// core components
import GridContainer from '@/components/Grid/GridContainer';
import GridItem from '@/components/Grid/GridItem';
import Button from '@/components/CustomButtons/Button';
import Card from '@/components/Card/Card';
import CardBody from '@/components/Card/CardBody';
import CardIcon from '@/components/Card/CardIcon';
import CardHeader from '@/components/Card/CardHeader';

import { dataTable } from '@/variables/general';

import { cardTitle } from '@/assets/jss/mui-pro';

const styles = createStyles({
  cardIconTitle: {
    ...cardTitle,
    marginTop: '15px',
    marginBottom: '0px',
  },
});

class ReactTables extends React.Component<WithStyles<typeof styles>> {
  state = {
    data: dataTable.dataRows.map((prop, key) => {
      return {
        id: key,
        name: prop[0],
        position: prop[1],
        office: prop[2],
        age: prop[3],
        actions: (
          // we've added some custom button actions
          <div className="actions-right">
            {/* use this button to add a like kind of action */}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                const obj = this.state.data.find(o => o.id === key);
                alert(
                  `You've clicked LIKE button on \n{ \nName: ${obj.name}, \nposition: ${obj.position}, \noffice: ${obj.office}, \nage: ${obj.age}\n}.`,
                );
              }}
              color="info"
              className="like"
            >
              <Favorite />
            </Button>{' '}
            {/* use this button to add a edit kind of action */}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                const obj = this.state.data.find(o => o.id === key);
                alert(
                  `You've clicked EDIT button on \n{ \nName: ${obj.name}, \nposition: ${obj.position}, \noffice: ${obj.office}, \nage: ${obj.age}\n}.`,
                );
              }}
              color="warning"
              className="edit"
            >
              <Dvr />
            </Button>{' '}
            {/* use this button to remove the data row */}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                const { data } = this.state;
                data.find((o, i) => {
                  if (o.id === key) {
                    // here you should add some custom code so you can delete the data
                    // from this component and from your server as well
                    data.splice(i, 1);
                    return true;
                  }
                  return false;
                });
                this.setState({ data });
              }}
              color="danger"
              className="remove"
            >
              <Close />
            </Button>{' '}
          </div>
        ),
      };
    }),
  };

  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="primary" icon>
              <CardIcon color="primary">
                <Assignment />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>React Table</h4>
            </CardHeader>
            <CardBody>
              <ReactTable
                data={this.state.data}
                filterable
                columns={[
                  {
                    Header: 'Name',
                    accessor: 'name',
                  },
                  {
                    Header: 'Position',
                    accessor: 'position',
                  },
                  {
                    Header: 'Office',
                    accessor: 'office',
                  },
                  {
                    Header: 'Age',
                    accessor: 'age',
                  },
                  {
                    Header: 'Actions',
                    accessor: 'actions',
                    sortable: false,
                    filterable: false,
                  },
                ]}
                defaultPageSize={10}
                showPaginationTop
                showPaginationBottom={false}
                className="-striped -highlight"
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles)(ReactTables);
