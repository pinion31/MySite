import React,{Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Route} from 'react-router';
import {Switch} from 'react-router-dom';
import AboutMe from './AboutMe';
import Projects from './Projects';
import FooterContent from './FooterContent';

const NoMatch = () => <h2>This page does not exist! Please go back!</h2>;

 const NavBarHead = () => {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>Chris Cantu</Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <LinkContainer to='/'>
            <NavItem>
              Home
            </NavItem>
          </LinkContainer>
           <LinkContainer to='/Projects'>
            <NavItem>
              My Work
            </NavItem>
          </LinkContainer>
          <LinkContainer to='/AboutMe'>
            <NavItem>
              About Me
            </NavItem>
          </LinkContainer>
          <LinkContainer to='/Blog'>
            <NavItem>
              Blog
            </NavItem>
          </LinkContainer>
          <LinkContainer to='/ContactMe'>
            <NavItem>
              Contact
            </NavItem>
          </LinkContainer>
           <LinkContainer to='/GitHub'>
            <NavItem>
              <em className="icon-github-circle"></em>
            </NavItem>
          </LinkContainer>
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
      <div className='menu-box'>
        <div className='link-box'>
          <LinkContainer to='/Projects'>
            <h1>My Work</h1>
          </LinkContainer>
        </div>
        <div className='link-box'>
          <LinkContainer to='/AboutMe'>
            <h1>About Me</h1>
          </LinkContainer>
        </div>
        <div className='link-box'>
          <LinkContainer to='/ContactMe'>
            <h1>Contact</h1>
          </LinkContainer>
        </div>
      </div>
    </div>
  );
};

const MainContent = () => {
    return (
      <main className="main">
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/Projects" component={Projects} />
          <Route path="/AboutMe" component={AboutMe} />
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