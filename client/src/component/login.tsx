import React, { useState, useEffect } from 'react';

function Login() {
  const [count, setCounter] = useState(0);

  return (
    <>
      <form>
        <label htmlFor="userId">
          ID
          <input type="text" id="userId" />
        </label>
        <label htmlFor="userPW">
          Password
          <input type="password" id="userPW" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
