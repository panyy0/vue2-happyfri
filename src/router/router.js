import App from '../App'


const home = r => require.ensure([], () => r(require('../page/home')), 'home');
const classify = r => require.ensure([], () => r(require('../page/classify')), 'classify');
const play = r => require.ensure([], () => r(require('../page/play')), 'play');
const market = r => require.ensure([], () => r(require('../page/market')), 'market');
const mine = r => require.ensure([], () => r(require('../page/mine')), 'mine');


export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: home
    }, {
      path: '/home',
      component: home
    }, {
      path: '/classify',
      component: classify
    }, {
      path: '/play',
      component: play
    }, {
      path: '/market',
      component: market
    }, {
      path: '/mine',
      component: mine
    }]
}]
