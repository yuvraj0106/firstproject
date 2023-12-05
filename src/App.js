import logo from './logo.svg';
import './App.css';
import './youTube.jsx';
import NavCenter from './NavCenter.jsx';
import NavLeft from './NavLeft.jsx';
import NavRight from './NavRight.jsx';
import SideBar from './Ysidebar/SideBar.jsx';


function App() {
  return (
   <div>
   
    <div id="YT">
    <> 
      <youTube/>
    <NavCenter/>

    <NavLeft/>
    <NavRight/>
    </>
    </div>
   <div>
   <SideBar/>
   <shorts/>
   </div>
   </div>
  );
}

export default App;
