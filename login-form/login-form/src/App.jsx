import { useState } from 'react'
import './App.css'

function LoginForm() {
  const [isShowPasswordOn, setIsShowPasswordOn] = useState(true);

  function showPassword() {
    if (isShowPasswordOn) {
      setIsShowPasswordOn(false);
    } else {
      setIsShowPasswordOn(true);
    }
  }
  return (
    <div>
      <div className="input-text-container">
        <input type="text" placeholder="Email" />
        <div>
          <input
            type={isShowPasswordOn ? "text" : "password"}
            placeholder="Password"
          />
          <button className="show-btn" onClick={showPassword}>
            {isShowPasswordOn ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      <button>Login</button>
      <button>Sign up</button>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>Hello, welcome to my website</h1>
      <LoginForm />
    </>
  );
}

export default App
