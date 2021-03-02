import './styles/App.css';
import Header from './componants/Header'
import Footer from './componants/Footer'
import HomeScreen from './Screens/HomeScreen'


function App() {
  return (
    <>

      <Header/>
      <main>
        <HomeScreen/>
      </main>
      
      <Footer/>
    </>
  );
}

export default App;
