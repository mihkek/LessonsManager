import { Switch, Route } from 'react-router-dom'
import { LoginForm } from './LoginForm'

export const MainRouter = () => (
  <main>
    <Switch>
      {/* <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/> */}
      <Route path='/Sing in' component={LoginForm}/>
    </Switch>
  </main>
)