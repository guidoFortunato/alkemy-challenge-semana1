import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';  
import CreateForm from './components/CreateForm';
import DetallePosts from './components/DetallePosts';
import EditForm from './components/EditForm';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
//import PrivateRouteEditForm from './components/PrivateRouteEditForm';
import PrivateRouteLogin from './components/PrivateRouteLogin';
import PrivateRouteCreateForm from './components/PrivateRouteCreateForm';

import InfoProvider from './context/InfoProvider';
import LoginProvider from './context/LoginProvider';


function App() {
  return (
    <InfoProvider>    
      <LoginProvider>

          <Router>
            <Navbar />

            <Switch>


              <PrivateRouteLogin exact path='/login' component={Login} />

            {/* <PrivateRouteEditForm exact path='/edit-form/:id' component={EditForm} /> */}
            
            <PrivateRouteCreateForm exact path='/create-form' component={CreateForm} />
            

              <Route path='/edit-form/:id' exact>
                <EditForm />
            </Route>
            
              
            <Route path='/detail/:id' exact>
                <DetallePosts />
            </Route>
            
            {/* <Route path='/create-form' exact>
              <CreateForm />
            </Route> */}
            
            <Route path='/' exact>
              <Home />
            </Route>

            </Switch>
          
          </Router>
      </LoginProvider>
    </InfoProvider>
  );
}

export default App;

