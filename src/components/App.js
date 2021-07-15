import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Badges from '../components/pages/Badges';
import BadgeNew from './pages/BadgeNew';
import Layout from './Layout'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import BadgeEdit from './pages/BadgeEdit'
import BadgeDetailsContainer from './pages/BadgeDetailsContainer'

function App (){
        return ( 
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/badges" component={Badges}/>
                        <Route exact path="/badges/new" component={BadgeNew}/>
                        <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer}/>
                        <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>
            </Router>
         );
        }
 
export default App;