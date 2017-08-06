import React from 'react';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';

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
          <div>
            <p>Home</p>
            <p>About Me</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
        </Col>
         <Col xs={4} md={2} >
          <div>
            <p>GitHub</p>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Reddit</p>
          </div>
        </Col>
      </Row>
    </div>

export default FooterContent;