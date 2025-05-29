import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import TournamentDetails from './pages/TournamentDetails';
import TournamentList from './components/TournamentList';
import RegistrationForm from './components/RegistrationForm';
import TeamManagement from './components/TeamManagement';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Gaming Tournament Registration</h1>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/tournaments" exact component={TournamentList} />
                    <Route path="/tournaments/:id" component={TournamentDetails} />
                    <Route path="/register" component={RegistrationForm} />
                    <Route path="/team-management" component={TeamManagement} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;