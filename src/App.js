import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link to='/admin'>Admin</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

function Home() {
  return <h2>Home</h2>
}

function Dashboard() {
  return <h2>Dashboard</h2>
}

function Admin() {
  return <h2>Admin</h2>
}
