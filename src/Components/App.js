import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Dashboard from './Screens/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Dashboard}></Route>
      </Switch>
    </div>
  );
}

export default App;
