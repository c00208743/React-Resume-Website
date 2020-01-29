import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
  render(){
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                  alt="avatar"
                  className="avatar-img"
                  />

              <div className="banner-text">
                <h1>Junior Software Developer</h1>
                <hr/>

                <p>C++ | C# | Python | Javacript | Java</p>

                <div className="social-links">
                  {/* Linkedin*/}
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i class="fab fa-linkedin"></i>
                  </a>

                  {/* Email*/}
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i class="fas fa-envelope"></i>
                  </a>

                  {/* Github*/}
                  <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                    <i class="fab fa-github-square"></i>
                  </a>

                </div>
              </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}


export default LandingPage;
