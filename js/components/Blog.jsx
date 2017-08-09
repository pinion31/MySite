import React from 'react';
import {PageHeader, Glyphicon, Well, Col} from 'react-bootstrap';

const Blog = () =>
  (
    <div>
      <Col xs={7} xsOffset={2} md={7} mdOffset={2}>

      <PageHeader className="pageheader">New Site Is Finally Up</PageHeader>


      <p className="timestamp">
        <Glyphicon glyph="time" className="timestamp" />{` Posted on August 08, 2017`}
      </p>


      <p>
        My new portfolio site, onechriscantu.com, is now up, as you can see.
        For years, I have used daliblue.com but now that is going to be
        exclusively for any games I create, which probably won&#39;t be any
        for awhile. I have too many web application ideas to make happen and
        I want to delve into React Native and Angular soon. For now, it&#39;s
        job search time. Here&#39;s to getting a great new job!
      </p>
      </Col>
      <Col xs={2} md={2} pullRight>
        <Well className="well-text">
          New Site Is Finally Up
        </Well>
      </Col>
    </div>
  );


export default Blog;
