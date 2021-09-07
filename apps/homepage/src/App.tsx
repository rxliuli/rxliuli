import React from 'react'
import 'normalize.css'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Header } from './views/home/component/Header'
import HomePage from './views/home'
import AboutPage from './views/about'
import NotMatchPage from './views/404'

const App: React.FC = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path={'/'} exact={true}>
          <HomePage />
        </Route>
        <Route path={'/about'}>
          <AboutPage />
        </Route>
        <Route path={'*'}>
          <NotMatchPage />
        </Route>
      </Switch>
    </HashRouter>
  )
}

export default App