import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
constructor(props){
  super(props);
  this.state = {activeTab: 0};
}

toggleCategories(){
  if(this.state.activeTab === 0){
    return(
      <div className="projects-grid">
      {/* Project No.1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background:
           'url(https://www.incline.digital/assets/images/react.svg) center / cover'}}>React project #1</CardTitle>
          <CardText>
            This project was my first attempt of making a live React website.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Website</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>

        {/* Project No.2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background:
             'url(https://www.incline.digital/assets/images/react.svg) center / cover'}}>React project #1</CardTitle>
            <CardText>
              This project was my first attempt of making a live React website.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Website</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project No.3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background:
               'url(https://www.incline.digital/assets/images/react.svg) center / cover'}}>React project #1</CardTitle>
              <CardText>
                This project was my first attempt of making a live React website.
              </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Website</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
      </div>
    )
  }else if (this.state.activeTab ===1){
    return(
      <div><h1>this is Angular</h1></div>
    )
  }else if (this.state.activeTab ===2){
    return(
      <div><h1>this is NodeJS</h1></div>
    )
  }else if (this.state.activeTab ===3){
    return(
      <div><h1>this is MongoDB</h1></div>
    )
  }
}

  render(){
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTabs} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>NodeJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>


        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>

      </div>
    )
  }
}


export default Projects;
