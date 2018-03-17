import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className="background-image">
          <Grid container centered stackable>

            <Grid.Column width={5} textAlign='centered'>
              <Icon className='users' size='huge'/>
              <h1>Multiple Users</h1>
              <h3>This address book enables any number of users to register and save their business contacts.
                You can only see the contacts you have created.</h3>
            </Grid.Column>

            <Grid.Column width={5} textAlign='centered'>
              <Icon className='file text outline' size='huge' />
              <h1>Contact Details</h1>
              <h3>For each contact, you can save their name, address, and phone number.</h3>
            </Grid.Column>

            <Grid.Column width={5} textAlign='centered'>
              <Icon className='calendar check' size='huge' />
              <h1>Timestamped Notes</h1>
              <h3>Each time you make contact with a contact, you can write a note that summarizes the conversation.
              This note is saved along with a timestamp with the contact.</h3>
            </Grid.Column>

          </Grid>
        </div>
    );
  }
}

export default Landing;
