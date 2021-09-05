import { useState } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function performValidation() {
    return username.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({ username: username, password: password })
    };
    console.log(JSON.stringify({ username: username, password: password }));
    fetch('https://desolate-caverns-62377.herokuapp.com/https://life-camp-dashboard.herokuapp.com/token/auth', requestOptions, { mode: 'cors' })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var accessToken = data.acc_token
        var refreshToken = data["refresh tok"]
        var success = data.login
        return [accessToken, refreshToken, success]
      }).then(data_lst => {
        if (data_lst[2] == true) {
          localStorage.setItem("acc_tok", data_lst[0]);
          localStorage.setItem("ref_tok", data_lst[1])
          props.handler(false)
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });;

  }
  return (
    <div style={styles.login}>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="username" bsSize="large">
          <FormLabel style={styles.label}>Username</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
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