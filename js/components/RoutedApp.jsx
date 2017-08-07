import React,{Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Route} from 'react-router';
import {Switch} from 'react-router-dom';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Blog from './Blog';
import FooterContent from './FooterContent';

const NoMatch = () => <h2>This page does not exist! Please go back!</h2>;

 const NavBarHead = () => {
    return (
      <Navbar>
         <Nav pullRight>
          <LinkContainer to='/'>
            <NavItem className="navbar-override">
              Home
            </NavItem>
          </LinkContainer>
          <LinkContainer to='/AboutMe'>
            <NavItem className="navbar-override">
              About Me
            </NavItem>
          </LinkContainer>
          <LinkContainer to='/Blog'>
            <NavItem className="navbar-override">
              Blog
            </NavItem>
          </LinkContainer>
          <LinkContainer to='/ContactMe'>
            <NavItem className="navbar-override">
              Contact
            </NavItem>
          </LinkContainer>
            <li>
              <div>
                <a className='social-buttons' href="https://www.github.com" target="_blank">
                  <em className="icon-github-circle"></em>
                </a>
              </div>
            </li>
            <li>
              <div>
                <a className='social-buttons' href="https://www.github.com" target="_blank">
                  <img className='other-social-icons' src='../media/Linkedin.png'/>
                </a>
              </div>
            </li>
            <li>
              <div>
                <a className='social-buttons' href="https://www.github.com" target="_blank">
                  <img className='other-social-icons' src='../media/Facebook.png'/>
                </a>
              </div>
            </li>
            <li>
              <div>
                <a className='social-buttons' href="https://www.github.com" target="_blank">
                  <img className='other-social-icons' src='../media/Twitter.png'/>
                </a>
              </div>
            </li>
            <li>
              <div>
                <a className='social-buttons' href="https://www.github.com" target="_blank">
                  <img className='other-social-icons' src='../media/Reddit.png'/>
                </a>
              </div>
            </li>
          </Nav>
       </Navbar>
    );
 };

 const Intro = () => {
  return (
    <div>
      <div className='intro'>
         <h1 className='name-title'>Chris Cantu</h1>
         <h1 className='job-title'>Web Developer</h1>
      </div>
      <Projects />
    </div>
  );
};

const MainContent = () => {
    return (
      <main className="main">
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/AboutMe" component={AboutMe} />
          <Route path="/Blog" component={Blog} />
          <Route path="/Contact" component={Contact} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </main>
    );

 };


class RoutedApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavBar:false,
    }
  }

  render() {
    return (
      <div>
        <NavBarHead />
        <MainContent/>
        <footer>
          <FooterContent/>
        </footer>
      </div>
    );
  }
}

export default RoutedApp;