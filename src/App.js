import logo from './logo.svg';
import './App.css';
import Profile from "./Profile.png"
import LinkedIn from "./LinkedIn.png"
import Email from "./Email.png"
import Facebook from "./Facebook Icon.png"
import Twitter from "./Twitter Icon.png"
import Github from "./GitHub Icon.png"
import Instagram from "./Instagram Icon.png"


function App() {
  return (
    <div className="App">
    <img src={Profile} alt="profile_img"  className='profile-img'/>
    <div className="body-container">
      <div className="body-content-1">
      <p  className="profile-name">Laura Smith</p>
      <p className="designation">Frontend Developer</p>
      <p className="website">laurasmith.website</p>
      </div>

      <div className="body-content-2">
      <img src={LinkedIn} alt="LinkedIn"  className='linkedIn'/>
      <img src={Email} alt="Email"  className='email'/>
      </div>

      <div className="body-content-3">
        <h2>About</h2>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
      </div>
      <div className="body-content-4"> 
      <h2>Interests</h2>
      <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </div>
    </div>

    <footer>
    
      <img src={Twitter} alt="Twitter_img"  className='Twitter-img'/>
    <img src={Facebook} alt="facebook_img"  className='Facebook-img'/>
    <img src={Instagram} alt="Instagram_img"  className='Instagram-img'/>
    <img src={Github} alt="Github_img"  className='Github-img'/>
   
    </footer>
     
    </div>
  );
}

export default App;
