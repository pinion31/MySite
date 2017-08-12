import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Route} from 'react-router';
import {Switch} from 'react-router-dom';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Blog from './Blog';
import FooterContent from './FooterContent';

const NoMatch = () => <h2>This page does not exist! Please go back!</h2>;

const NavBarHead = () =>
  (
    <Navbar>
      <Nav pullRight>
        <LinkContainer to="/">
          <NavItem className="tabs">
            Home
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/AboutMe">
          <NavItem className="tabs">
            About Me
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/Blog">
          <NavItem className="tabs">
            Blog
          </NavItem>
        </LinkContainer>
        <li>
          <div>
            <a
              className="social-buttons"
              href="https://github.com/pinion31"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="other-social-icons" src="../media/Github.png" alt="Github" />
            </a>
          </div>
        </li>
        <li>
          <div>
            <a
              className="social-buttons"
              href="https://www.linkedin.com/in/chris-cantu-9a46b9a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="other-social-icons" src="../media/Linkedin.png" alt="Linkedin" />
            </a>
          </div>
        </li>
        <li>
          <div>
            <a
              className="social-buttons"
              href="https://www.facebook.com/chris.cantu.16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="other-social-icons" src="../media/Facebook.png" alt="Facebook" />
            </a>
          </div>
        </li>
        <li>
          <div>
            <a
              className="social-buttons"
              href="https://twitter.com/IntheLight81"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="other-social-icons" src="../media/Twitter.png" alt="Twitter" />
            </a>
          </div>
        </li>
        <li>
          <div>
            <a
              className="social-buttons"
              href="https://www.reddit.com/user/Daliblue"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="other-social-icons" src="../media/Reddit.png" alt="Reddit" />
            </a>
          </div>
        </li>
      </Nav>
    </Navbar>
  );


const Intro = () =>
  (
    <div>
      <div className="intro">
        <h1 className="name-title quickFade">Chris Cantu</h1>
        <h1 className="job-title quickFade">Web Developer</h1>
      </div>
      <Projects />
    </div>
  );


const MainContent = () =>
  (
    <main className="main">
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/AboutMe" component={AboutMe} />
        <Route path="/Blog" component={Blog} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </main>
  );

class RoutedApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavBar: false,
    };
  }

  render() {
    return (
      <div className="page-bg">
        <NavBarHead />
        <MainContent />
        <footer>
          <FooterContent />
        </footer>
      </div>
    );
  }
}

export default RoutedApp;
