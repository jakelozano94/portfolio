import './App.css';
import Skills from './Components/Skills.js'
import Projects from './Components/Projects'
import Blogs from './Components/Blogs'
import Social from './Components/Social'

const aboutMe = "Full Stack Software Engineer with BS in Cellular and Molecular Biology and 6 years of high end kitchen experience, including at Eleven Madison Park (San Pelligrino’s Best Restaurant in the World). Thrive in environments that are high pressure, reward independence, and have high quality craftsmanship.  Goal oriented and driven to master large scale problems by breaking them into digestible chunks, implementing the plan, and then triaging and solving emerging problems. Passionate about working independently and with a team to manipulate and use data in unintuitive ways to solve real world problems and create meaningful web and data applications to help people."

function App() {

  return (
    <>
      <div className="sidenav">
            <div id="profile_pic">
              <img src="https://i.imgur.com/zglnxly.png"/>
            </div>
            <h1 id="sidebar_name"> Jake Lozano</h1>
        <div id="links">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="content">
        <div className="header">
            <h1>Hi! im jacob.</h1>
        </div>
        <div className="break"></div>
        <div className ="about_me">
          {aboutMe}
        </div>
          <Skills/>
          <Projects/>
          <Blogs/>
      </div>
       
    </>
  );
}

export default App;
