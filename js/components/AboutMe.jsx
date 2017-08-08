import React,{Component} from 'react';
import {Button} from 'react-bootstrap';

const AboutMe = () => {
  return (
  <div>

  <div className="resumeBody">
   <div id="top">
    <div id="cv" className="instaFade">
      <Button className="downloadResume" bsStyle="primary" href="../media/ChrisCantuResume.pdf">Download Resume</Button>
      <div className="mainDetails">
        <div id="name">
          <h1 className="quickFade delayTwo">Chris Cantu</h1>
          <h2 className="quickFade delayThree">Web Developer</h2>
        </div>

        <div id="contactDetails" className="quickFade delayFour">
          <ul>
            <li>e: <a href="mailto:pinion31@gmail.com" target="_blank">pinion31@gmail.com</a></li>
            <li>w: <a href="http://www.onechriscantu.com">www.onechriscantu.com</a></li>
            <li>m: 512-922-5824</li>
          </ul>
        </div>
        <div className="clear"></div>
      </div>

      <div id="mainArea" className="quickFade delayFive">
        <section>
          <article>
            <div className="sectionTitle">
              <h1>Personal Profile</h1>
            </div>

            <div className="sectionContent">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor metus, interdum at scelerisque in, porta at lacus. Maecenas dapibus luctus cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
            </div>
          </article>
          <div className="clear"></div>
        </section>

          <section>
          <div className="sectionTitle">
            <h1>Skills/Tools</h1>
          </div>

          <div className="sectionContent">
            <ul className="keySkills">
              <li>Javascript(ES6)</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JQuery</li>
              <li>React/Redux</li>
              <li>React-Bootstrap</li>
              <li>Flexbox</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Git/Github</li>
              <li>Webpack</li>
              <li>Gulp</li>
              <li>Sass</li>
              <li>D3</li>
              <li>Python</li>
              <li>C#</li>
              <li>Unity3D</li>
              <li>Unityscript</li>
              <li>3D Studio Max</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Premiere</li>
              <li>Adobe AfterEffects</li>
            </ul>
          </div>
          <div className="clear"></div>
        </section>

        <section>
          <div className="sectionTitle">
            <h1>Work Experience</h1>
          </div>

          <div className="sectionContent">
            <article>
              <h2><b>Texas State Low Cost Insurance</b> - Senior Underwriter</h2>
              <p className="subDetails">Oct 2012 - June 2017</p>
              <ul>
                <li>Trained and guided new underwriters</li>
                <li>Provided technical and retail support to agents in field</li>
                <li>Developed new guidelines and workflows for underwriting department</li>
                <li>Assisted customer with policy changes and billing support</li>
              </ul>
            </article>

            <article>
              <h2><b>Escape Hatch Entertainment,LLC</b> - Game Artist</h2>
              <p className="subDetails">March 2010 - Sept 2011</p>
              <ul>
                <li>Created in-game environments and assets under deadline</li>
                <li>Conceptualized, modeled and textured character models</li>
                <li>Tested player experience</li>
              </ul>
            </article>

            <article>
              <h2><b>CBS 42 NEWS</b> - Video Editor</h2>
              <p className="subDetails">August 2004 - Jan 2009</p>
              <ul>
                <li>Developed new digital editing workflow  in transition from analog</li>
                <li>Collaborated with producers and reporters in a fast-paced environment to create content for evening news</li>
                <li>Introduced and trained new editors</li>
              </ul>
            </article>
          </div>
          <div className="clear"></div>
        </section>
        <section>
          <div className="sectionTitle">
            <h1>Education</h1>
          </div>

          <div className="sectionContent">
            <article>
              <h2><b>University of Texas</b></h2>
              <p className="subDetails">Sept 2000 - May 2004</p>
              <p>Radio-Television-Film</p>
            </article>

            <article>
              <h2><b>Austin Community College</b></h2>
              <p className="subDetails">Jan 2009 - Dec 2010</p>
              <p>Game Development</p>
            </article>
          </div>
          <div className="clear"></div>
        </section>
      </div>
    </div>
  </div>
  </div>
  </div>
  );
};

export default AboutMe;
