import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as injectTapEventPlugin from 'react-tap-event-plugin'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Components
import App from './components/app'
import Signin from './components/signIn'
import Sider from './components/sider'
import Home from './components/home'
import Profile from './components/profile'
import Data from './components/data'
import Title from './components/title'

import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker'

import './scss/index.scss'

const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(middleware),
))

// Needed for onTouchTap
injectTapEventPlugin()

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <MuiThemeProvider>
                <App>
                    <Switch>
                        <Route path="/" component={Sider}/>
                    </Switch>
                    <div >
                       <Route path="/" component={Title}/>
                    </div>
                    <div style={{marginLeft: 122, marginTop: 10}}>
                        <Route path="/" component={Home}/>
                        <Route exact={true} path="/signin" component={Signin}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/data" component={Data}/>
                    </div>
                </App>
            </MuiThemeProvider>
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
)
registerServiceWorker()
