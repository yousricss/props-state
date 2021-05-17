import './App.css';
import Profile from './profile/Profile';

function App() {
  const handleName =(name) => {
    alert(`Hi, I am ${name}`)
  }
  return (
    <div className="App">
      <Profile fullName='Yousri Bahloul' bio='Building quality websites and applications with HTML, CSS, and JavaScript'
      profession='WEB DEVELOPER'
      handleName={handleName}

      >
        <div>
          <img src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-with-glasses.jpg" alt="profile " 
          style={{width:"400px",height:"500px"}}/>
        </div>
      </Profile>  
      
    </div>
  );
}

export default App;
