import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Counter from './components/Counter'
import Greetings from './components/Greetings'
import Post from './components/Post'
import SocialButton from './components/SocialButton'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/greetings" component={Greetings} />
        <Route exact path="/post" component={Post} />
        {<SocialButton exact path="/social-button" component={SocialButton} />}
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
