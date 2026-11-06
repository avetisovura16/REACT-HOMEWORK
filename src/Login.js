import { useState } from 'react';
import App from './App';

function Login() {
  const [mail, setMail] = useState('');

  const [password, setPassword] = useState('');

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  

  function handleSubmit(event) {
    event.preventDefault();
    if (mail === 'random@gmail.com' && password === 'random123') {
      setIsLoggedIn(true);
    } else {
      console.log('something is wrong');
    }
  }

  if (isLoggedIn) {
    return <App />;
  }

  return (



    <form onSubmit={handleSubmit}>


      <h1>Login</h1>



    <label htmlFor="mail">Email</label>
      <input
        type="text"
        value={mail}
        id="mail"
        onChange={(event) => setMail(event.target.value)}
      />


    <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />


            <button type="submit">Login</button>



    </form>
  );
}

export default Login;