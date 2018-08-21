import React from 'react';
import {Grid, Row, Col, Thumbnail, Image} from 'react-bootstrap';

const Projects = () =>
  (
    <div>
      <Grid>
        <Row>
          <Col xs={6} md={4} className="link-box thumb-box">
            <h1 className="portfolio">Portfolio</h1>
          </Col>
        </Row>
        <Row className="project-row">
          <Col xs={6} md={4}>
            <Thumbnail>
              <a href="https://gametrader0.herokuapp.com" target="_blank" rel="noopener noreferrer">
                <Image
                  className="site-image"
                  src="../media/gametrader.png"
                  alt="GameTrader"
                  responsive
                />
              </a>
              <h3 className="thumbnail-title">GameTrader </h3>
              <p className="thumbnail-text">A Full-Stack App To Trade Video Games</p>
              <div className="app-links">
                <a href="https://github.com/pinion31/GameTrader" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://gametrader0.herokuapp.com" target="_blank" rel="noopener noreferrer">App Site</a>
              </div>
              <div className="tech-icons">
                <div className="icon-group">
                  <em className="icon icon-react" />
                  <p className="icon-caption">ReactJS</p>
                </div>
                <div className="icon-group">
                  <em className="icon icon-nodejs" />
                  <p className="icon-caption">NodeJS</p>
                </div>
                <div className="icon-group">
                  <span className="icon icon-express-alt">e</span>
                  <p className="icon-caption">Express</p>
                </div>
                <div className="icon-group">
                  <em className="icon icon-mongodb" />
                  <p className="icon-caption">MongoDB</p>
                </div>
                <div className="icon-group">
                  <em className="icon icon-bootstrap" />
                  <p className="icon-caption">Bootstrap</p>
                </div>
              </div>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail>
              <a href="https://sparkle-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <Image
                  className="site-image"
                  src="../media/sparkle.png"
                  alt="Sparkle"
                  responsive
                />
              </a>
              <h3 className="thumbnail-title">Sparkle </h3>
              <p className="thumbnail-text">A Full-Stack App To Save Pics You Love</p>
              <div className="app-links">
                <a href="https://github.com/pinion31/Snapterest" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://sparkle-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">App Site</a>
              </div>
              <div className="tech-icons">
                <div className="icon-group">
                  <em className="icon icon-angular" />
                  <p className="icon-caption">Angular</p>
                </div>
                <div className="icon-group">
                  <em className="icon icon-nodejs" />
                  <p className="icon-caption">NodeJS</p>
                </div>
                <div className="icon-group">
                  <span className="icon icon-express-alt">e</span>
                  <p className="icon-caption">Express</p>
                </div>
                <div className="icon-group">
                  <em className="icon icon-postgres" />
                  <p className="icon-caption">PostgreSQL</p>
                </div>
                <div className="icon-group">
                  <em className="icon icon-bootstrap" />
                  <p className="icon-caption">Bootstrap</p>
                </div>
              </div>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail>
              <a href="https://nightflight.herokuapp.com" target="_blank" rel="noopener noreferrer">
                <Image
                  className="site-image"
                  src="../media/nightflight.png"
                  alt="Nightflight"
                  responsive
                />
              </a>
              <h3 className="thumbnail-title">Night Flight </h3>
              <p className="thumbnail-text">A Full-Stack App For Nightlife Coordination</p>
              <div className="app-links">
                <a href="https://github.com/pinion31/NightFlight" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://nightflight.herokuapp.com" target="_blank" rel="noopener noreferrer">App Site</a>
              </div>
              <div className="tech-icons">
                <div className="icon-group">
                  <em className="icon icon-react" />
                  <p className="icon-caption">ReactJS</p>
                </div>
                <div className="icon-group">
                  <em className="icon icon-nodejs" />
                  <p className="icon-caption">NodeJS</p>
                </div>
                <div className="icon-group">
                  <span className="icon icon-express-alt">e</span>
                  <p className="icon-caption">Express</p>
                </div>
                <div className="icon-group">
                  <em className="icon icon-mongodb" />
                  <p className="icon-caption">MongoDB</p>
                </div>
                <div className="icon-group">
                  <em className="icon icon-bootstrap" />
                  <p className="icon-caption">Bootstrap</p>
                </div>
              </div>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail>
              <a href="https://voterific.herokuapp.com" target="_blank" rel="noopener noreferrer">
                <Image
                  className="site-image"
                  src="../media/voterific.png"
                  alt="Voterific"
                  responsive
                />
              </a>
              <h3 className="thumbnail-title">Voterific </h3>
              <p className="thumbnail-text">A Full-Stack App To Create Online Polls</p>
              <div className="app-links">
                <a href="https://github.com/pinion31/Voterific" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://voterific.herokuapp.com" target="_blank" rel="noopener noreferrer">App Site</a>
              </div>
              <div className="tech-icons">
                <div className="icon-group">
                  <em className="icon icon-react" />
                  <p className="icon-caption">ReactJS</p>
                </div>
                <div className="icon-group">
                  <em className="icon icon-nodejs" />
                  <p className="icon-caption">NodeJS</p>
                </div>
                <div className="icon-group">
                  <span className="icon icon-express-alt">e</span>
                  <p className="icon-caption">Express</p>
                </div>
                <div className="icon-group">
                  <em className="icon icon-mongodb" />
                  <p className="icon-caption">MongoDB</p>
                </div>
                <div className="icon-group">
                  <em className="icon icon-bootstrap" />
                  <p className="icon-caption">Bootstrap</p>
                </div>
              </div>
            </Thumbnail>
          </Col>
        </Row>
        <Row className="project-row">
          <Col xs={6} md={4} className="link-box thumb-box">
            <h1>Other Projects</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Thumbnail src="../media/ChessRunner.png" alt="Chess Runner" className="app-icon">
              <h3 className="thumbnail-title">Chess Runner </h3>
              <p className="thumbnail-text">Endless Runner Meets Real-time Chess</p>
              <div className="download-links">
                <a
                  href="http://bit.ly/1OtX60z"
                  className="thumbnail-text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="../media/googleplay.jpg" alt="Download Chess Runner" />
                </a>
                <a href="http://apple.co/1VMk1Fx" className="thumbnail-text" target="_blank" rel="noopener noreferrer">
                  <img src="../media/appstore.jpg" alt="Download Chess Runner" />
                </a>
              </div>
            </Thumbnail>
          </Col>
          <Col xs={6} md={4}>
            <Thumbnail src="../media/EndlessFootball.png" alt="Endless Football" className="app-icon">
              <h3 className="thumbnail-title">Endless Football</h3>
              <p className="thumbnail-text">Football Arcade Game</p>
              <a
                href="https://play.google.com/store/apps/details?id=com.DaliBlue.EndlessFootball&hl=en"
                className="thumbnail-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="../media/googleplay.jpg" alt="Download Endless Football" />
              </a>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    </div>
  );


export default Projects;

