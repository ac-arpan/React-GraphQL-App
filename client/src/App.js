import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import './App.css'
import logoAlt from './logoAlt.jpg'
import Launches from './components/Launches'
import Launch from './components/Launch'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
  
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img src={logoAlt} alt="SpaceX" style={{ width: '300px', display: 'block', margin: '1rem auto' }} />
          <Switch>
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App;
