import React from 'react';
import './App.css';
import './css/logoF.css';
import './css/Home.css';
import Loc from './Loc';
import LocK from './LocK';
import LocZ from './LocZ';
import LocL from './LocL';
import LocE from './LocE';
import LocS from './LocS';
import LocJ from './LocJ';
import LocP from './LocP';
import List from './List';
import ListK from './ListK';
import ListZ from './ListZ';
import ListL from './ListL';
import ListE from './ListE';
import ListS from './ListS';
import ListJ from './ListJ';
import ListP from './ListP';
import Home from'./Home';
import Search from'./Search';

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';


function App() {

  return (
    
    <Router>
    <div className="App">
     
     <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/loc" component={Loc} />
     <Route path="/lock" component={LocK} />
     <Route path="/locz" component={LocZ} />
     <Route path="/locl" component={LocL} />
     <Route path="/loce" component={LocE} />
     <Route path="/locs" component={LocS} />
     <Route path="/locj" component={LocJ} />
     <Route path="/locp" component={LocP} />
     <Route path="/list" component={List} />
     <Route path="/listk" component={ListK} />
     <Route path="/listz" component={ListZ} />
     <Route path="/listl" component={ListL} />
     <Route path="/liste" component={ListE} />
     <Route path="/lists" component={ListS} />
     <Route path="/listj" component={ListJ} />
     <Route path="/listp" component={ListP} />
     <Route path="/search" component={Search} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;
