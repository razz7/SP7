import React, { Component } from 'react';

function Login({ isLoggedIn, loginMsg, setLoginStatus }) {
    const handleBtnClick = () => {
      setLoginStatus(!isLoggedIn);
    };
    return (
      <div>
        <h2>{loginMsg}</h2>
        <button onClick={handleBtnClick}>{loginMsg}</button>
      </div>
    );
  }

  export default Login