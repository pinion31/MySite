webpackJsonp([0],{

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(227);

var _reactDom = __webpack_require__(31);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(133);

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

var _reactBootstrap = __webpack_require__(134);

var _reactRouterBootstrap = __webpack_require__(332);

var _reactRouter = __webpack_require__(32);

var _reactRouterDom = __webpack_require__(133);

var _AboutMe = __webpack_require__(784);

var _AboutMe2 = _interopRequireDefault(_AboutMe);

var _Projects = __webpack_require__(785);

var _Projects2 = _interopRequireDefault(_Projects);

var _Contact = __webpack_require__(786);

var _Contact2 = _interopRequireDefault(_Contact);

var _Blog = __webpack_require__(787);

var _Blog2 = _interopRequireDefault(_Blog);

var _FooterContent = __webpack_require__(788);

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
          { className: 'navbar-override' },
          'Home'
        )
      ),
      _react2.default.createElement(
        _reactRouterBootstrap.LinkContainer,
        { to: '/AboutMe' },
        _react2.default.createElement(
          _reactBootstrap.NavItem,
          { className: 'navbar-override' },
          'About Me'
        )
      ),
      _react2.default.createElement(
        _reactRouterBootstrap.LinkContainer,
        { to: '/Blog' },
        _react2.default.createElement(
          _reactBootstrap.NavItem,
          { className: 'navbar-override' },
          'Blog'
        )
      ),
      _react2.default.createElement(
        _reactRouterBootstrap.LinkContainer,
        { to: '/ContactMe' },
        _react2.default.createElement(
          _reactBootstrap.NavItem,
          { className: 'navbar-override' },
          'Contact'
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
            { className: 'social-buttons', href: 'https://www.github.com', target: '_blank' },
            _react2.default.createElement('em', { className: 'icon-github-circle' })
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
            { className: 'social-buttons', href: 'https://www.github.com', target: '_blank' },
            _react2.default.createElement('img', { className: 'other-social-icons', src: '../media/Linkedin.png' })
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
            { className: 'social-buttons', href: 'https://www.github.com', target: '_blank' },
            _react2.default.createElement('img', { className: 'other-social-icons', src: '../media/Facebook.png' })
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
            { className: 'social-buttons', href: 'https://www.github.com', target: '_blank' },
            _react2.default.createElement('img', { className: 'other-social-icons', src: '../media/Twitter.png' })
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
            { className: 'social-buttons', href: 'https://www.github.com', target: '_blank' },
            _react2.default.createElement('img', { className: 'other-social-icons', src: '../media/Reddit.png' })
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
        { className: 'name-title' },
        'Chris Cantu'
      ),
      _react2.default.createElement(
        'h1',
        { className: 'job-title' },
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
      _react2.default.createElement(_reactRouter.Route, { path: '/Contact', component: _Contact2.default }),
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutMe = function AboutMe() {
  return _react2.default.createElement(
    'h1',
    null,
    'About Me '
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

var _reactBootstrap = __webpack_require__(134);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Projects = function Projects() {
  return _react2.default.createElement(
    'div',
    null,
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
            _react2.default.createElement(_reactBootstrap.Image, { className: 'site-image', src: '../media/voterific.png', alt: 'Voterific', responsive: true }),
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
                { href: 'https://github.com/pinion31/Voterific', target: '_blank' },
                'Github'
              ),
              _react2.default.createElement(
                'a',
                { href: 'https://voterific.herokuapp.com', target: '_blank' },
                'App Site'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'tech-icons' },
              _react2.default.createElement(
                'em',
                { className: 'icon-react' },
                ' '
              ),
              _react2.default.createElement(
                'em',
                { className: 'icon-nodejs' },
                ' '
              ),
              _react2.default.createElement(
                'span',
                { className: 'icon-express-alt' },
                'e'
              ),
              _react2.default.createElement(
                'em',
                { className: 'icon-mongodb' },
                ' '
              ),
              _react2.default.createElement(
                'em',
                { className: 'icon-bootstrap' },
                ' '
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 6, md: 4 },
          _react2.default.createElement(
            _reactBootstrap.Thumbnail,
            null,
            _react2.default.createElement(_reactBootstrap.Image, { className: 'site-image', src: '../media/nightflight.png', alt: 'Nightflight', responsive: true }),
            _react2.default.createElement(
              'h3',
              { className: 'thumbnail-title' },
              'Night Flight '
            ),
            _react2.default.createElement(
              'p',
              { className: 'thumbnail-text' },
              'A Full-Stack App for Nightlife Coordination'
            ),
            _react2.default.createElement(
              'div',
              { className: 'app-links' },
              _react2.default.createElement(
                'a',
                { href: 'https://github.com/pinion31/NightFlight', target: '_blank' },
                'Github'
              ),
              _react2.default.createElement(
                'a',
                { href: 'https://nightflight.herokuapp.com', target: '_blank' },
                'App Site'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'tech-icons' },
              _react2.default.createElement(
                'em',
                { className: 'icon-react' },
                ' '
              ),
              _react2.default.createElement(
                'em',
                { className: 'icon-nodejs' },
                ' '
              ),
              _react2.default.createElement(
                'span',
                { className: 'icon-express-alt' },
                'e'
              ),
              _react2.default.createElement(
                'em',
                { className: 'icon-mongodb' },
                ' '
              ),
              _react2.default.createElement(
                'em',
                { className: 'icon-bootstrap' },
                ' '
              )
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
                { href: 'http://bit.ly/1OtX60z', className: 'thumbnail-text' },
                _react2.default.createElement('img', { src: '../media/googleplay.jpg', alt: 'Download Chess Runner' })
              ),
              _react2.default.createElement(
                'a',
                { href: 'http://apple.co/1VMk1Fx', className: 'thumbnail-text' },
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
              { href: 'https://play.google.com/store/apps/details?id=com.DaliBlue.EndlessFootball&hl=en',
                className: 'thumbnail-text' },
              _react2.default.createElement('img', { src: '../media/googleplay.jpg', alt: 'Download Endless Football' })
            )
          )
        )
      )
    )
  );
};

exports.default = Projects;

// <p className='thumbnail-text'>Google Play</p>
// <p className='thumbnail-text'>App Store</p>

/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contact = function Contact() {
  return _react2.default.createElement('div', null);
};

exports.default = Contact;

/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blog = function Blog() {
  return _react2.default.createElement('div', null);
};

exports.default = Blog;

/***/ }),

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(134);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FooterContent = function FooterContent() {
  return _react2.default.createElement(
    'div',
    { className: 'footer' },
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
          null,
          _react2.default.createElement(
            'p',
            null,
            'Home'
          ),
          _react2.default.createElement(
            'p',
            null,
            'About Me'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Blog'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Contact'
          )
        )
      ),
      _react2.default.createElement(
        _reactBootstrap.Col,
        { xs: 4, md: 2 },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            'GitHub'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Twitter'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Facebook'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Reddit'
          )
        )
      )
    )
  );
};

exports.default = FooterContent;

/***/ })

},[334]);