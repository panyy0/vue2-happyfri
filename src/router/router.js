import App from '../App'

const HOME = r => require.ensure([], () => r(require('page/home')), 'home');
const CLASSIFY = r => require.ensure([], () => r(require('page/classify')), 'classify');
const PLAY = r => require.ensure([], () => r(require('page/play')), 'play');
const MARKET = r => require.ensure([], () => r(require('page/market')), 'market');
const MINE = r => require.ensure([], () => r(require('page/mine')), 'mine');
const THEME = r => require.ensure([], () => r(require('page/theme')));


export default [
  {
    path: '/',
    component: App,
    children: [{
        path: '',
        redirect: '/home'
    }, {
      path: '/home'
      , component: HOME
    }, {
      path: '/classify',
      component: CLASSIFY
    }, {
      path: '/play',
      component: PLAY
    } , {
      path: '/mine',
      component: MINE
    }, {
      path: '/market',
      component: MARKET
    },{
      path: '/theme'
      , component: THEME
    }]
  }

]
