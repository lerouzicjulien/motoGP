
import { Box } from '@mui/material';
import { useContext } from 'react';
import './App.scss';
import Header from './components/Header';
import Riders from './components/Riders';
import Teams from './components/Teams';
import RidersContextProvider from './contexts/Riders';
import { TabsContext } from './contexts/Tabs';
import TeamsContextProvider from './contexts/Teams';

function App() {

  const { tabsValue } = useContext(TabsContext);

  return (
    <div className="App" style={{ 'display': 'flex', 'flexDirection': 'column' ,'alignItems': 'center'}} >

        <Header />

        <Box className='container' >
          <RidersContextProvider>
            <TeamsContextProvider>
              {tabsValue === 0 && <Riders />}
              {tabsValue === 1 && <Teams />}
            </TeamsContextProvider>
          </RidersContextProvider>
        </Box>
    </div>
  );
}

export default App;
