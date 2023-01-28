
import './App.scss';
import Header from './components/Header';
import Riders from './components/Riders';
import Teams from './components/Teams';
import RidersContextProvider from './contexts/Riders';
import TeamsContextProvider from './contexts/Teams';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container' style={{"border": "solid black 1px", "display": "flex", "justifyContent": "space-around", "padding": "2em", "margin": "3em"}}>
        <RidersContextProvider>
          <Riders />
        </RidersContextProvider>
        <TeamsContextProvider>
          <Teams />
        </TeamsContextProvider>
      </div>
    </div>
  );
}

export default App;
