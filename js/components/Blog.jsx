import React from 'react';
import {PageHeader, Glyphicon, Col} from 'react-bootstrap';

const Blog = () =>
  (
    <div>
      <Col xs={7} xsOffset={2} md={7} mdOffset={2}>
        <PageHeader className="pageheader">New Site Is Finally Up</PageHeader>
        <p className="timestamp">
          <Glyphicon glyph="time" className="timestamp" />{'Posted on August 08, 2017'}
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
      <Col xs={7} xsOffset={2} md={7} mdOffset={2}>
        <PageHeader className="pageheader">The Trouble with Backgrounds</PageHeader>
        <p className="timestamp">
          <Glyphicon glyph="time" className="timestamp" />{'Posted on August 14, 2017'}
        </p>
        <p>
          I have spent several hours the past few days, trying to get the background
          for this site to appear correctly on mobile browsers. The first issue appear
          on Firefox for Android. When I first swiping down on my page, the background
          image appears to jump then snap back into place. This happens only when I start
          swiping from the top or bottom of the page. It appears this is just a quirk with
          Firefox. I found other pages with full-screen background images and they were
          performed the same way. I also created a basic page that contained only a background
          image (I wanted to see if React or Bootstrap were the culprits) but it performed
          the same way. The second major issue is that the background image appears differently
          on webkit browsers vs moz or any desktop versions. On Chrome on Android or other webkit
          browsers, for example, the background image enlarges according to the amount of content
          on page - resulting in an ultra-enlarged version of the background and not being able
          to distinguish what the image is. However, on mobile Firefox, the background is sized
          correctly (or closer to the desktop version) where I can see the keyboard clearly.
          I tried to workaround this issue by setting the background size manually, according
          to the screen resolution size. Unfortunately, I then learned Chrome on Android ignores
          &#34;background-attachment:fixed&#34; so any user would scroll down past the background
          instead the background remaining in place. I decided to live with ultra-enlarged
          backgrounds for the time being. So, on some mobile browsers, the background appears
          mostly black as a result of an enlarged background.
        </p>
      </Col>

    </div>
  );

export default Blog;

     /*
      <Col xs={2} md={2} pullRight>
        <Well className="well-text">
          New Site Is Finally Up
        </Well>
      </Col>*/