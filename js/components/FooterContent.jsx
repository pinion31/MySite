import React from 'react';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const FooterContent = () =>
    <div className="footer">
      <Row>
        <Col xs={8} xsOffset={1} md={4} mdOffset={1}>
          <div>
            <h3>Chris Cantu</h3>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={4} xsOffset={1} md={2} mdOffset={1}>
          <div className="footer-router-links">
            <LinkContainer to="/">
              <p>Home</p>
            </LinkContainer>
          </div>
          <div className="footer-router-links">
            <LinkContainer to="/AboutMe">
              <p>About Me</p>
            </LinkContainer>
          </div>
          <div className="footer-router-links">
            <LinkContainer to="/Blog">
              <p>Blog</p>
            </LinkContainer>
          </div>
        </Col>
         <Col xs={4} md={2} >
          <div className="footer-links" >
            <a href="https://github.com/pinion31" target="_blank">
              <p>GitHub</p>
            </a>
            <a href="https://www.linkedin.com/in/chris-cantu-9a46b9a" target="_blank">
              <p>LinkedIn</p>
            </a>
            <a href="https://twitter.com/IntheLight81" target="_blank">
              <p>Twitter</p>
            </a>
            <a href="https://www.facebook.com/chris.cantu.16" target="_blank">
              <p>Facebook</p>
            </a>
            <a href="https://www.reddit.com/user/Daliblue" target="_blank">
              <p>Reddit</p>
            </a>
          </div>
        </Col>
      </Row>
    </div>

export default FooterContent;