import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container'
import {Route, Switch} from 'react-router-dom'
import './api/axiosDefaults';
import SignUpForm from './pages/auth/SignUpForm'
import SignInForm from './pages/auth/SignInForm';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      await axios.get('dj-rest-auth/user/')
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    handleMount()
  }, [])


  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={()=> <h1>Home Page</h1>} />
          <Route exact path="/signin" render={()=> <SignInForm />} />
          <Route exact path="/signup" render={()=> <SignUpForm />} />
          <Route render={()=> <p>Page not found</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;