import { Switch, Route, Redirect, Link} from 'react-router-dom';

import Get from './Container/Get';
import Post from './Container/Post';

import './App.css';

function App() {

  return (
    <div className="App">
      
      <Link style={{marginRight: '20px'}}to={"/"}>Get</Link>
      <Link style={{marginRight: '20px'}} to={"/post"}>Post</Link>
      <Link style={{marginRight: '20px'}} to={"/about"}>About</Link>
      
      <Switch>
        <Route exact path={'/'}>
          <Get/>
        </Route>

        <Route exact path='/post'>
          <Post/>
        </Route>
        
        <Route exact path='/about'>
          <h1>About page</h1>
        </Route>

        <Route path={'*'}>
          <Redirect to={'/404'}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
