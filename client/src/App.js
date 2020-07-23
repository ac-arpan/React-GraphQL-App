import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import './App.css'
import logo from './logo.jpg'
import Launches from './components/Launches'
import Launch from './components/Launch'
import Navbar from './components/Navbar'
import About from './components/About'
import History from './components/History'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
  
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Navbar/>
          <img src={logo} alt="SpaceX" style={{ width: '300px', display: 'block', margin: '1rem auto' }} />
          <Switch>
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
            <Route exact path="/about" component={About} />
            <Route exact path="/history" component={History} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App;
