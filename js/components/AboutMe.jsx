import React from 'react';
import {Button} from 'react-bootstrap';

const AboutMe = () =>
  (
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
                  <li>e: <a href="mailto:pinion31@gmail.com" target="_blank" rel="noopener noreferrer">pinion31@gmail.com</a></li>
                  <li>w: <a href="http://www.onechriscantu.com">www.onechriscantu.com</a></li>
                  <li>m: 512-922-5824</li>
                </ul>
              </div>
              <div className="clear" />
            </div>

            <div id="mainArea" className="quickFade delayFive">
              <section>
                <article>
                  <div className="sectionTitle">
                    <h1>Personal Profile</h1>
                  </div>

                  <div className="sectionContent">
                    <p>Creating websites is the perfect union of my passions - technology
                    and art. I love learning new technologies and creating
                    elegant, responsive and effective applications.</p>
                  </div>
                </article>
                <div className="clear" />
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
                    <li>React Native</li>
                    <li>Angular</li>
                    <li>Web3/Ethereum</li>
                    <li>Bootstrap</li>
                    <li>Flexbox</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>Git/Github</li>
                    <li>Webpack</li>
                    <li>Sass</li>
                    <li>Python</li>
                    <li>Unity3D</li>
                    <li>Unityscript</li>
                    <li>3D Studio Max</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Premiere</li>
                    <li>Adobe AfterEffects</li>
                  </ul>
                </div>
                <div className="clear" />
              </section>

              <section>
                <div className="sectionTitle">
                  <h1>Work Experience</h1>
                </div>

                <div className="sectionContent">
                  <article>
                    <h2><b>Keystoke LLC</b> - Full Stack Javascript Developer</h2>
                    <p className="subDetails">Nov 2017 - Present</p>
                    <ul>
                      <li>Planned and developed front-end (React) and back-end (NodeJS) for MVP applications </li>
                      <li>Converted UI mockups and design documents into full stack web and progressive web applications</li>
                      <li>Completed projects to client specifications within scrum environment.</li>
                      <li>Utilized Ethereum blockchain technology</li>
                    </ul>
                  </article>
                  <article>
                    <h2><b>Dali Blue Games</b> - Game Programmer/Artist</h2>
                    <p className="subDetails">Dec 2011 - Nov 2017</p>
                    <ul>
                      <li>Designed, developed and released Chess Runner for Android and iOS (10,000 downloads)</li>
                      <li>Developed and released Endless Football for Android (&#60; 1,000 downloads)</li>
                      <li>Utilized Unityscript(Javascript) and C# in game development</li>
                      <li>Modelled and rigged 3D models in 3D Studio Max</li>
                    </ul>
                  </article>
                  <article>
                    <h2><b>Freeway Insurance</b> - Senior Underwriter</h2>
                    <p className="subDetails">Oct 2012 - June 2017</p>
                    <ul>
                      <li>Trained and mentored new underwriters</li>
                      <li>Provided technical and retail support to agents in field</li>
                      <li>Developed new guidelines and workflows for underwriting department</li>
                    </ul>
                  </article>
                  <article>
                    <h2><b>Escape Hatch Entertainment,LLC</b> - Game Artist</h2>
                    <p className="subDetails">July 2010 - Dec 2011</p>
                    <ul>
                      <li>Created in-game environments and assets under deadline</li>
                      <li>Conceptualized, modeled and textured character models</li>
                      <li>Tested player experience</li>
                    </ul>
                  </article>
                </div>
                <div className="clear" />
              </section>
              <section>
                <div className="sectionTitle">
                  <h1>Education</h1>
                </div>

                <div className="sectionContent">
                  <article>
                    <h2><b>University of Texas</b></h2>
                    <p className="subDetails">Sept 2000 - May 2004</p>
                    <p><b>Radio-Television-Film</b>(Major)</p>
                    <p><b>Concentration in Computer Science</b> (Unofficial Minor)</p>
                  </article>
                  <article>
                    <h2><b>Austin Community College</b></h2>
                    <p className="subDetails">Jan 2009 - Dec 2010</p>
                    <p><b>Game Development</b>(Associates)</p>
                  </article>
                </div>
                <div className="clear" />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


export default AboutMe;
