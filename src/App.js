import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <div className="form">
      <form >
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
       
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  
    </div>
  );
}

export default App;
