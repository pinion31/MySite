webpackJsonp([0],{

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(228);

var _reactDom = __webpack_require__(31);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(134);

__webpack_require__(644);

var _RoutedApp = __webpack_require__(645);

var _RoutedApp2 = _interopRequireDefault(_RoutedApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _reactRouterDom.HashRouter,
  null,
  _react2.default.createElement(_RoutedApp2.default, null)
), document.getElementById('app'));

/***/ }),

/***/ 644:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(91);

var _reactRouterBootstrap = __webpack_require__(220);

var _reactRouter = __webpack_require__(32);

var _reactRouterDom = __webpack_require__(134);

var _AboutMe = __webpack_require__(784);

var _AboutMe2 = _interopRequireDefault(_AboutMe);

var _Projects = __webpack_require__(785);

var _Projects2 = _interopRequireDefault(_Projects);

var _Blog = __webpack_require__(786);

var _Blog2 = _interopRequireDefault(_Blog);

var _FooterContent = __webpack_require__(787);

var _FooterContent2 = _interopRequireDefault(_FooterContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NoMatch = function NoMatch() {
  return _react2.default.createElement(
    'h2',
    null,
    'This page does not exist! Please go back!'
  );
};

var NavBarHead = function NavBarHead() {
  return _react2.default.createElement(
    _reactBootstrap.Navbar,
    null,
    _react2.default.createElement(
      _reactBootstrap.Nav,
      { pullRight: true },
      _react2.default.createElement(
        _reactRouterBootstrap.LinkContainer,
        { to: '/' },
        _react2.default.createElement(
          _reactBootstrap.NavItem,
          { className: 'tabs' },
          'Home'
        )
      ),
      _react2.default.createElement(
        _reactRouterBootstrap.LinkContainer,
        { to: '/AboutMe' },
        _react2.default.createElement(
          _reactBootstrap.NavItem,
          { className: 'tabs' },
          'About Me'
        )
      ),
      _react2.default.createElement(
        _reactRouterBootstrap.LinkContainer,
        { to: '/Blog' },
        _react2.default.createElement(
          _reactBootstrap.NavItem,
          { className: 'tabs' },
          'Blog'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            {
              className: 'social-buttons',
              href: 'https://github.com/pinion31',
              target: '_blank',
              rel: 'noopener noreferrer'
            },
            _react2.default.createElement('img', { className: 'other-social-icons', src: '../media/Github.png', alt: 'Github' })
          )
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            {
              className: 'social-buttons',
              href: 'https://www.linkedin.com/in/chris-cantu-9a46b9a',
              target: '_blank',
              rel: 'noopener noreferrer'
            },
            _react2.default.createElement('img', { className: 'other-social-icons', src: '../media/Linkedin.png', alt: 'Linkedin' })
          )
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            {
              className: 'social-buttons',
              href: 'https://www.facebook.com/chris.cantu.16',
              target: '_blank',
              rel: 'noopener noreferrer'
            },
            _react2.default.createElement('img', { className: 'other-social-icons', src: '../media/Facebook.png', alt: 'Facebook' })
          )
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            {
              className: 'social-buttons',
              href: 'https://twitter.com/IntheLight81',
              target: '_blank',
              rel: 'noopener noreferrer'
            },
            _react2.default.createElement('img', { className: 'other-social-icons', src: '../media/Twitter.png', alt: 'Twitter' })
          )
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            {
              className: 'social-buttons',
              href: 'https://www.reddit.com/user/Daliblue',
              target: '_blank',
              rel: 'noopener noreferrer'
            },
            _react2.default.createElement('img', { className: 'other-social-icons', src: '../media/Reddit.png', alt: 'Reddit' })
          )
        )
      )
    )
  );
};

var Intro = function Intro() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'intro' },
      _react2.default.createElement(
        'h1',
        { className: 'name-title quickFade' },
        'Chris Cantu'
      ),
      _react2.default.createElement(
        'h1',
        { className: 'job-title quickFade' },
        'Web Developer'
      )
    ),
    _react2.default.createElement(_Projects2.default, null)
  );
};

var MainContent = function MainContent() {
  return _react2.default.createElement(
    'main',
    { className: 'main' },
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouter.Route, { exact: true, path: '/', component: Intro }),
      _react2.default.createElement(_reactRouter.Route, { path: '/AboutMe', component: _AboutMe2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/Blog', component: _Blog2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '*', component: NoMatch })
    )
  );
};

var RoutedApp = function (_Component) {
  _inherits(RoutedApp, _Component);

  function RoutedApp(props) {
    _classCallCheck(this, RoutedApp);

    var _this = _possibleConstructorReturn(this, (RoutedApp.__proto__ || Object.getPrototypeOf(RoutedApp)).call(this, props));

    _this.state = {
      showNavBar: false
    };
    return _this;
  }

  _createClass(RoutedApp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(NavBarHead, null),
        _react2.default.createElement(MainContent, null),
        _react2.default.createElement(
          'footer',
          null,
          _react2.default.createElement(_FooterContent2.default, null)
        )
      );
    }
  }]);

  return RoutedApp;
}(_react.Component);

exports.default = RoutedApp;

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(91);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutMe = function AboutMe() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'resumeBody' },
      _react2.default.createElement(
        'div',
        { id: 'top' },
        _react2.default.createElement(
          'div',
          { id: 'cv', className: 'instaFade' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'downloadResume', bsStyle: 'primary', href: '../media/ChrisCantuResume.pdf' },
            'Download Resume'
          ),
          _react2.default.createElement(
            'div',
            { className: 'mainDetails' },
            _react2.default.createElement(
              'div',
              { id: 'name' },
              _react2.default.createElement(
                'h1',
                { className: 'quickFade delayTwo' },
                'Chris Cantu'
              ),
              _react2.default.createElement(
                'h2',
                { className: 'quickFade delayThree' },
                'Web Developer'
              )
            ),
            _react2.default.createElement(
              'div',
              { id: 'contactDetails', className: 'quickFade delayFour' },
              _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                  'li',
                  null,
                  'e: ',
                  _react2.default.createElement(
                    'a',
                    { href: 'mailto:pinion31@gmail.com', target: '_blank', rel: 'noopener noreferrer' },
                    'pinion31@gmail.com'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'w: ',
                  _react2.default.createElement(
                    'a',
                    { href: 'http://www.onechriscantu.com' },
                    'www.onechriscantu.com'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'm: 512-922-5824'
                )
              )
            ),
            _react2.default.createElement('div', { className: 'clear' })
          ),
          _react2.default.createElement(
            'div',
            { id: 'mainArea', className: 'quickFade delayFive' },
            _react2.default.createElement(
              'section',
              null,
              _react2.default.createElement(
                'article',
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'sectionTitle' },
                  _react2.default.createElement(
                    'h1',
                    null,
                    'Personal Profile'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'sectionContent' },
                  _react2.default.createElement(
                    'p',
                    null,
                    'Web development is the perfect union of my passions - Technology and Art - and, as an aspiring web developer, I hope to channel my passions towards creating elegant, responsive and effective websites.'
                  )
                )
              ),
              _react2.default.createElement('div', { className: 'clear' })
            ),
            _react2.default.createElement(
              'section',
              null,
              _react2.default.createElement(
                'div',
                { className: 'sectionTitle' },
                _react2.default.createElement(
                  'h1',
                  null,
                  'Skills/Tools'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'sectionContent' },
                _react2.default.createElement(
                  'ul',
                  { className: 'keySkills' },
                  _react2.default.createElement(
                    'li',
                    null,
                    'Javascript(ES6)'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'HTML'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'CSS'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'JQuery'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'React/Redux'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'React-Bootstrap'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Flexbox'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'NodeJS'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Express'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'MongoDB'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Git/Github'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Webpack'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Gulp'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Sass'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'D3'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Python'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'C#'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Unity3D'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Unityscript'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    '3D Studio Max'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Adobe Photoshop'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Adobe Premiere'
                  ),
                  _react2.default.createElement(
                    'li',
                    null,
                    'Adobe AfterEffects'
                  )
                )
              ),
              _react2.default.createElement('div', { className: 'clear' })
            ),
            _react2.default.createElement(
              'section',
              null,
              _react2.default.createElement(
                'div',
                { className: 'sectionTitle' },
                _react2.default.createElement(
                  'h1',
                  null,
                  'Work Experience'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'sectionContent' },
                _react2.default.createElement(
                  'article',
                  null,
                  _react2.default.createElement(
                    'h2',
                    null,
                    _react2.default.createElement(
                      'b',
                      null,
                      'Texas State Low Cost Insurance'
                    ),
                    ' - Senior Underwriter'
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'subDetails' },
                    'Oct 2012 - June 2017'
                  ),
                  _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                      'li',
                      null,
                      'Trained and guided new underwriters'
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      'Provided technical and retail support to agents in field'
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      'Developed new guidelines and workflows for underwriting department'
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      'Assisted customer with policy changes and billing support'
                    )
                  )
                ),
                _react2.default.createElement(
                  'article',
                  null,
                  _react2.default.createElement(
                    'h2',
                    null,
                    _react2.default.createElement(
                      'b',
                      null,
                      'Escape Hatch Entertainment,LLC'
                    ),
                    ' - Game Artist'
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'subDetails' },
                    'July 2010 - Dec 2011'
                  ),
                  _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                      'li',
                      null,
                      'Created in-game environments and assets under deadline'
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      'Conceptualized, modeled and textured character models'
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      'Tested player experience'
                    )
                  )
                ),
                _react2.default.createElement(
                  'article',
                  null,
                  _react2.default.createElement(
                    'h2',
                    null,
                    _react2.default.createElement(
                      'b',
                      null,
                      'CBS 42 NEWS'
                    ),
                    ' - Video Editor'
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'subDetails' },
                    'August 2004 - Jan 2009'
                  ),
                  _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                      'li',
                      null,
                      'Developed new digital editing workflow in transition from analog'
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      'Collaborated with producers and reporters in a fast-paced environment to create content for evening news'
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      'Introduced and trained new editors'
                    )
                  )
                )
              ),
              _react2.default.createElement('div', { className: 'clear' })
            ),
            _react2.default.createElement(
              'section',
              null,
              _react2.default.createElement(
                'div',
                { className: 'sectionTitle' },
                _react2.default.createElement(
                  'h1',
                  null,
                  'Education'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'sectionContent' },
                _react2.default.createElement(
                  'article',
                  null,
                  _react2.default.createElement(
                    'h2',
                    null,
                    _react2.default.createElement(
                      'b',
                      null,
                      'University of Texas'
                    )
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'subDetails' },
                    'Sept 2000 - May 2004'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                      'b',
                      null,
                      'Radio-Television-Film'
                    ),
                    '(Major)'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                      'b',
                      null,
                      'Concentration in Computer Science'
                    ),
                    ' (Unofficial Minor)'
                  )
                )
              ),
              _react2.default.createElement('div', { className: 'clear' })
            )
          )
        )
      )
    )
  );
};

exports.default = AboutMe;

/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(91);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Projects = function Projects() {
  return _react2.default.createElement(
    'div',
    { className: 'quickFade' },
    _react2.default.createElement(
      _reactBootstrap.Grid,
      null,
      _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 6, md: 4, className: 'link-box thumb-box' },
          _react2.default.createElement(
            'h1',
            null,
            'Portfolio'
          )
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 6, md: 4 },
          _react2.default.createElement(
            _reactBootstrap.Thumbnail,
            null,
            _react2.default.createElement(
              'a',
              { href: 'https://voterific.herokuapp.com', target: '_blank', rel: 'noopener noreferrer' },
              _react2.default.createElement(_reactBootstrap.Image, {
                className: 'site-image',
                src: '../media/voterific.png',
                alt: 'Voterific',
                responsive: true
              })
            ),
            _react2.default.createElement(
              'h3',
              { className: 'thumbnail-title' },
              'Voterific '
            ),
            _react2.default.createElement(
              'p',
              { className: 'thumbnail-text' },
              'A Full-Stack App To Create Online Polls'
            ),
            _react2.default.createElement(
              'div',
              { className: 'app-links' },
              _react2.default.createElement(
                'a',
                { href: 'https://github.com/pinion31/Voterific', target: '_blank', rel: 'noopener noreferrer' },
                'Github'
              ),
              _react2.default.createElement(
                'a',
                { href: 'https://voterific.herokuapp.com', target: '_blank', rel: 'noopener noreferrer' },
                'App Site'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'tech-icons' },
              _react2.default.createElement('em', { className: 'icon icon-react' }),
              _react2.default.createElement('em', { className: 'icon icon-nodejs' }),
              _react2.default.createElement(
                'span',
                { className: 'icon icon-express-alt' },
                'e'
              ),
              _react2.default.createElement('em', { className: 'icon icon-mongodb' }),
              _react2.default.createElement('em', { className: 'icon icon-bootstrap' })
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 6, md: 4 },
          _react2.default.createElement(
            _reactBootstrap.Thumbnail,
            null,
            _react2.default.createElement(
              'a',
              { href: 'https://nightflight.herokuapp.com', target: '_blank', rel: 'noopener noreferrer' },
              _react2.default.createElement(_reactBootstrap.Image, {
                className: 'site-image',
                src: '../media/nightflight.png',
                alt: 'Nightflight',
                responsive: true
              })
            ),
            _react2.default.createElement(
              'h3',
              { className: 'thumbnail-title' },
              'Night Flight '
            ),
            _react2.default.createElement(
              'p',
              { className: 'thumbnail-text' },
              'A Full-Stack App For Nightlife Coordination'
            ),
            _react2.default.createElement(
              'div',
              { className: 'app-links' },
              _react2.default.createElement(
                'a',
                { href: 'https://github.com/pinion31/NightFlight', target: '_blank', rel: 'noopener noreferrer' },
                'Github'
              ),
              _react2.default.createElement(
                'a',
                { href: 'https://nightflight.herokuapp.com', target: '_blank', rel: 'noopener noreferrer' },
                'App Site'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'tech-icons' },
              _react2.default.createElement('em', { className: 'icon icon-react' }),
              _react2.default.createElement('em', { className: 'icon icon-nodejs' }),
              _react2.default.createElement(
                'span',
                { className: 'icon icon-express-alt' },
                'e'
              ),
              _react2.default.createElement('em', { className: 'icon icon-mongodb' }),
              _react2.default.createElement('em', { className: 'icon icon-bootstrap' })
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 6, md: 4 },
          _react2.default.createElement(
            _reactBootstrap.Thumbnail,
            null,
            _react2.default.createElement(
              'a',
              { href: 'https://pinion31.github.io/GameOfLife', target: '_blank', rel: 'noopener noreferrer' },
              _react2.default.createElement(_reactBootstrap.Image, {
                className: 'site-image',
                src: '../media/gameoflife.png',
                alt: 'Game of Life',
                responsive: true
              })
            ),
            _react2.default.createElement(
              'h3',
              { className: 'thumbnail-title' },
              'Game of Life '
            ),
            _react2.default.createElement(
              'p',
              { className: 'thumbnail-text' },
              "A Game Based On John Conway's Game Of Life"
            ),
            _react2.default.createElement(
              'div',
              { className: 'app-links' },
              _react2.default.createElement(
                'a',
                { href: 'https://github.com/pinion31/GameOfLife', target: '_blank', rel: 'noopener noreferrer' },
                'Github'
              ),
              _react2.default.createElement(
                'a',
                { href: 'https://pinion31.github.io/GameOfLife', target: '_blank', rel: 'noopener noreferrer' },
                'App Site'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'tech-icons-life' },
              _react2.default.createElement('em', { className: 'icon icon-react' }),
              _react2.default.createElement('em', { className: 'icon icon-bootstrap' })
            )
          )
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 6, md: 4, className: 'link-box thumb-box' },
          _react2.default.createElement(
            'h1',
            null,
            'Other Projects'
          )
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 6, md: 4 },
          _react2.default.createElement(
            _reactBootstrap.Thumbnail,
            { src: '../media/ChessRunner.png', alt: 'Chess Runner' },
            _react2.default.createElement(
              'h3',
              { className: 'thumbnail-title' },
              'Chess Runner '
            ),
            _react2.default.createElement(
              'p',
              { className: 'thumbnail-text' },
              'Endless Runner Meets Real-time Chess'
            ),
            _react2.default.createElement(
              'div',
              { className: 'download-links' },
              _react2.default.createElement(
                'a',
                {
                  href: 'http://bit.ly/1OtX60z',
                  className: 'thumbnail-text',
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                _react2.default.createElement('img', { src: '../media/googleplay.jpg', alt: 'Download Chess Runner' })
              ),
              _react2.default.createElement(
                'a',
                { href: 'http://apple.co/1VMk1Fx', className: 'thumbnail-text', target: '_blank', rel: 'noopener noreferrer' },
                _react2.default.createElement('img', { src: '../media/appstore.jpg', alt: 'Download Chess Runner' })
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 6, md: 4 },
          _react2.default.createElement(
            _reactBootstrap.Thumbnail,
            { src: '../media/EndlessFootball.png', alt: 'Endless Football' },
            _react2.default.createElement(
              'h3',
              { className: 'thumbnail-title' },
              'Endless Football'
            ),
            _react2.default.createElement(
              'p',
              { className: 'thumbnail-text' },
              'Football Arcade Game'
            ),
            _react2.default.createElement(
              'a',
              {
                href: 'https://play.google.com/store/apps/details?id=com.DaliBlue.EndlessFootball&hl=en',
                className: 'thumbnail-text',
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              _react2.default.createElement('img', { src: '../media/googleplay.jpg', alt: 'Download Endless Football' })
            )
          )
        )
      )
    )
  );
};

exports.default = Projects;

/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(91);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blog = function Blog() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactBootstrap.Col,
      { xs: 7, xsOffset: 2, md: 7, mdOffset: 2 },
      _react2.default.createElement(
        _reactBootstrap.PageHeader,
        { className: 'pageheader' },
        'New Site Is Finally Up'
      ),
      _react2.default.createElement(
        'p',
        { className: 'timestamp' },
        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'time', className: 'timestamp' }),
        ' Posted on August 08, 2017'
      ),
      _react2.default.createElement(
        'p',
        null,
        'My new portfolio site, onechriscantu.com, is now up, as you can see. For years, I have used daliblue.com but now that is going to be exclusively for any games I create, which probably won\'t be any for awhile. I have too many web application ideas to make happen and I want to delve into React Native and Angular soon. For now, it\'s job search time. Here\'s to getting a great new job!'
      )
    ),
    _react2.default.createElement(
      _reactBootstrap.Col,
      { xs: 2, md: 2, pullRight: true },
      _react2.default.createElement(
        _reactBootstrap.Well,
        { className: 'well-text' },
        'New Site Is Finally Up'
      )
    )
  );
};

exports.default = Blog;

/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(91);

var _reactRouterBootstrap = __webpack_require__(220);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterContent = function FooterContent() {
  return _react2.default.createElement(
    'div',
    { className: 'footer-body' },
    _react2.default.createElement(
      _reactBootstrap.Row,
      null,
      _react2.default.createElement(
        _reactBootstrap.Col,
        { xs: 8, xsOffset: 1, md: 4, mdOffset: 1 },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Chris Cantu'
          )
        )
      )
    ),
    _react2.default.createElement(
      _reactBootstrap.Row,
      null,
      _react2.default.createElement(
        _reactBootstrap.Col,
        { xs: 4, xsOffset: 1, md: 2, mdOffset: 1 },
        _react2.default.createElement(
          'div',
          { className: 'footer-router-links' },
          _react2.default.createElement(
            _reactRouterBootstrap.LinkContainer,
            { to: '/' },
            _react2.default.createElement(
              'p',
              null,
              'Home'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'footer-router-links' },
          _react2.default.createElement(
            _reactRouterBootstrap.LinkContainer,
            { to: '/AboutMe' },
            _react2.default.createElement(
              'p',
              null,
              'About Me'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'footer-router-links' },
          _react2.default.createElement(
            _reactRouterBootstrap.LinkContainer,
            { to: '/Blog' },
            _react2.default.createElement(
              'p',
              null,
              'Blog'
            )
          )
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Col,
        { xs: 4, md: 2 },
        _react2.default.createElement(
          'div',
          { className: 'footer-links' },
          _react2.default.createElement(
            'a',
            { href: 'https://github.com/pinion31', target: '_blank', rel: 'noopener noreferrer' },
            _react2.default.createElement(
              'p',
              null,
              'GitHub'
            )
          ),
          _react2.default.createElement(
            'a',
            { href: 'https://www.linkedin.com/in/chris-cantu-9a46b9a', target: '_blank', rel: 'noopener noreferrer' },
            _react2.default.createElement(
              'p',
              null,
              'LinkedIn'
            )
          ),
          _react2.default.createElement(
            'a',
            { href: 'https://twitter.com/IntheLight81', target: '_blank', rel: 'noopener noreferrer' },
            _react2.default.createElement(
              'p',
              null,
              'Twitter'
            )
          ),
          _react2.default.createElement(
            'a',
            { href: 'https://www.facebook.com/chris.cantu.16', target: '_blank', rel: 'noopener noreferrer' },
            _react2.default.createElement(
              'p',
              null,
              'Facebook'
            )
          ),
          _react2.default.createElement(
            'a',
            { href: 'https://www.reddit.com/user/Daliblue', target: '_blank', rel: 'noopener noreferrer' },
            _react2.default.createElement(
              'p',
              null,
              'Reddit'
            )
          )
        )
      )
    )
  );
};

exports.default = FooterContent;

/***/ })

},[334]);