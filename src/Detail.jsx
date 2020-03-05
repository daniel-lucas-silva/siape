import React from 'react';
import {Page, Navbar, List, ListItem} from 'framework7-react';

export default class extends React.Component {
  render() {
    return this.props.customer ? (
      <Page>
        <Navbar title={`${this.props.customer['Nome']}`} backLink="Back"></Navbar>
        <List>
          {
            Object.entries(this.props.customer).map(([key, value]) => {
              return (<ListItem header={key}  title={value}/>);
            })
          }
        </List>
      </Page>
    ) : <div/>;
  }
}
