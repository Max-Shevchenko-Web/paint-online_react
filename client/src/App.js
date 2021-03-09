
import SettingBar from './components/SettingBar';
import Toolbar from './components/Toolbar';
import Canvas from './components/Canvas';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route path={'/:id'}>
          <Toolbar />
          <SettingBar />
          <Canvas />
        </Route>
        <Redirect to={`f${(+new Date).toString(16)}`}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
