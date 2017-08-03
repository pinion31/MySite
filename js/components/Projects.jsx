import React from 'react';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';

const Projects = () => {
  return (
    <div>
      <Grid>
      <Row>
      <Col xs={6} md={2} className='link-box thumb-box'>
        <h1>My Work</h1>
      </Col>
      </Row>
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail alt='Voterific'>
              <h3 className='thumbnail-title'>Voterific </h3>
              <p className='thumbnail-text'>A Full-Stack App To Create Online Polls</p>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail alt='Night Flight'>
              <h3 className='thumbnail-title'>Night Flight </h3>
              <p className='thumbnail-text'>A Full-Stack App for Nightlife Coordination</p>
            </Thumbnail>
          </Col>
        </Row>
        <Row>
      <Col xs={6} md={3} className='link-box thumb-box'>
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