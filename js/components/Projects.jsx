import React from 'react';
import {Grid, Row, Col, Thumbnail, Image} from 'react-bootstrap';

const Projects = () => {
  return (
    <div>
      <Grid>
      <Row>
      <Col xs={6} md={2} className="link-box thumb-box">
        <h1>My Work</h1>
      </Col>
      </Row>
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail>
              <Image className="site-image" src="../media/voterific.png" alt="Voterific" responsive/>
              <h3 className="thumbnail-title">Voterific </h3>
              <p className="thumbnail-text">A Full-Stack App To Create Online Polls</p>
              <div className="app-links">
                  <a href="https://github.com/pinion31/Voterific" target="_blank">Github</a>
                  <a href="https://voterific.herokuapp.com" target="_blank">App Site</a>
              </div>
              <div className="tech-icons">
                <em className="icon-react"> </em>
                <em className="icon-nodejs"> </em>
                <span className="icon-express-alt">e</span>
                <em className="icon-mongodb"> </em>
                <em className="icon-bootstrap"> </em>
              </div>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail>
              <Image className="site-image" src="../media/nightflight.png" alt="Nightflight" responsive/>
              <h3 className="thumbnail-title">Night Flight </h3>
              <p className="thumbnail-text">A Full-Stack App for Nightlife Coordination</p>
              <div className="app-links">
                  <a href="https://github.com/pinion31/NightFlight" target="_blank">Github</a>
                  <a href="https://nightflight.herokuapp.com" target="_blank">App Site</a>
              </div>
              <div className="tech-icons">
                <em className="icon-react"> </em>
                <em className="icon-nodejs"> </em>
                <span className="icon-express-alt">e</span>
                <em className="icon-mongodb"> </em>
                <em className="icon-bootstrap"> </em>
              </div>
            </Thumbnail>
          </Col>
        </Row>
        <Row>
      <Col xs={6} md={3} className="link-box thumb-box">
        <h1>Other Projects</h1>
      </Col>
      </Row>
        <Row>
           <Col xs={6} md={4}>
            <Thumbnail src='../media/ChessRunner.png' alt='Chess Runner'>
              <h3 className='thumbnail-title'>Chess Runner </h3>
              <p className='thumbnail-text'>Endless Runner Meets Real-time Chess</p>
              <div className='download-links'>
                <a href="http://bit.ly/1OtX60z"  className="thumbnail-text">
                  <img src="../media/googleplay.jpg" alt="Download Chess Runner"/>
                </a>
                <a href="http://apple.co/1VMk1Fx" className="thumbnail-text">
                  <img src="../media/appstore.jpg" alt="Download Chess Runner"/>
                </a>
              </div>
            </Thumbnail>
          </Col>
           <Col xs={6} md={4}>
            <Thumbnail src='../media/EndlessFootball.png' alt='Endless Football'>
              <h3 className='thumbnail-title'>Endless Football</h3>
              <p className='thumbnail-text'>Football Arcade Game</p>
               <a href="https://play.google.com/store/apps/details?id=com.DaliBlue.EndlessFootball&hl=en"
                className="thumbnail-text">
                  <img src="../media/googleplay.jpg" alt="Download Endless Football"/>
                </a>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    </div>


  );
};

export default Projects;

// <p className='thumbnail-text'>Google Play</p>
// <p className='thumbnail-text'>App Store</p>