import {useState} from 'react';
import { Button, FormGroup, FormControl, FormLabel} from "react-bootstrap";

export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    function performValidation() {
      return username.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {
      event.preventDefault();
      props.handler(false)
    }
    return (
      <div style = {styles.login}>
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="username" bsSize = "large">
            <FormLabel style={styles.label}>Username</FormLabel>
            <FormControl
            autoFocus
            type="text"
            value = {username}
            onChange ={e => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize = "large">
            <FormLabel style={styles.label}>Password</FormLabel>
            <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            />
          </FormGroup>
          <Button block bsSize="large" disabled={!performValidation()}
          type="submit">
            Login
          </Button>
        </form>
      </div>
    );
}

const styles = {
  login: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  }, 
  label: {
    fontSize: 20, 
  }
}