
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import Introduction from './components/Introduction/Introduction';
import Navbar from './components/Navbar/Navbar';
import Notes from './components/Notes/Notes';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <Notes/>
      <AboutMe/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
