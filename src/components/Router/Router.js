import React, { PureComponent } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Login from 'components/Login'
import Search from 'components/Search'
import PrivateRoute from 'components/PrivateRoute'
//import styles from './Router.module.css'

class Router extends PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/" component={Login} exact />
        <PrivateRoute path="/search" component={Search} exact />
        <Redirect to="/" />
      </Switch>
    )
  }
}

export default withRouter(Router)

// Реализуйте роутер

// Роутер должен иметь роуты для компонентов Login и Search
// Вам потребуется использовать PrivateRoute для Search
// По умолчанию нужно перенаправлять на страницу логина
