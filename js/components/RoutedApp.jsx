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
            <NavItem>
              Home
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
          <LinkContainer to='/GitHub'>
            <NavItem>
              <img className='other-social-icons' src='../media/Linkedin.png'/>
            </NavItem>
          </LinkContainer>
          <LinkContainer to='/GitHub'>
            <NavItem>
              <img className='other-social-icons' src='../media/Facebook.png'/>
            </NavItem>
          </LinkContainer>
          <LinkContainer to='/GitHub'>
            <NavItem>
              <img className='other-social-icons' src='../media/Twitter.png'/>
            </NavItem>
          </LinkContainer>
          <LinkContainer to='/GitHub'>
            <NavItem>
              <img className='other-social-icons' src='../media/Reddit.png'/>
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