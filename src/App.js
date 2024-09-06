import {Route, Switch} from 'react-router-dom'
// import switch

import Home from './components/Home'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  // route should be wrapped inside switch component
  <Switch>
    {/* exact keword should be used */}
    {/* path parameter for route we need to use ":" */}
    <Route exact path="/" component={Home} />
    <Route path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFound} />
  </Switch>
)

export default App
