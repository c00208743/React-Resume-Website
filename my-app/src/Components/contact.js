import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends Component {
  render(){
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Jamie Murphy</h2>
            <img
              src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
              alt="avatar"
              style={{height: '250px'  }}
            / >
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>A software graduate from the Institute of Technology Carlow (ITC)
             with the skills and knowledge essential for producing clean and concise
              code along with the problem solving skills necessary in the field.
               Eagerly looking for a position where I can develop creative and helpful
                tools. </p>

          </Cell>

          <Cell col={6}>
            <h2>Contact me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-phone-square" aria-hidden="true"/>
                  0831522721</ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fab fa-linkedin" aria-hidden="true"/>
                  Find me on LinkedIn</ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fas fa-envelope" aria-hidden="true"/>
                  jamiemurphyDOUG@gmail.com</ListItemContent>
                </ListItem>
              </List>
            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}


export default Contact;
