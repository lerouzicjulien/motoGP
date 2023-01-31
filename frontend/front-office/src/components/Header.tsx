import { DarkMode, LightMode } from '@mui/icons-material';
import { Button, Tab, Tabs } from '@mui/material';
import { useContext, useState } from 'react';
import logoMotoGP from '../assets/Moto_Gp_logo_white.png';
import { TabsContext } from '../contexts/Tabs';

const Header = () => {

    const [ theme, setTheme ] = useState('dark');
    const { tabsValue, setTabsValue} = useContext(TabsContext)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabsValue(newValue);
      };

    return(
        <div className="header" style={{'border': 'solid 5px white', 'borderTop': 'none','borderRadius': '2em', 'display': 'flex', 'justifyContent': 'space-around', 'width': '90%', "alignItems": 'center', 'backgroundColor': '#252527'}}>
            <img src={logoMotoGP} style={{ 'width': '20em'}} alt='motoGP' />
            <Tabs value={tabsValue} onChange={handleChange} selectionFollowsFocus centered indicatorColor='primary' textColor="inherit">
                <Tab label="Riders" value={0} sx={{color: 'white', fontSize: '2.5em'}}/>
                <Tab label="Teams" value={1} sx={{color: 'white', fontSize: '2.5em'}}/>
            </Tabs>
            <div className='buttons'>
                <Button variant="contained" sx={{
                    height: '4em',
                    border: 'solid 2px white',
                    backgroundColor: '#252527',
                    '&:hover': {
                        backgroundColor: '#007FFF',
                        transform: 'scale(1.03)'
                    },
                }} onClick={() => setTheme(theme === 'ligth' ? 'dark' : 'ligth') } >{theme ===  'light' ? <DarkMode /> : <LightMode/>}</Button>
                <Button variant="contained" sx={{
                    height: '4em',
                    border: 'solid 2px white',
                    backgroundColor: '#252527',
                    '&:hover': {
                        backgroundColor: '#007FFF',
                        transform: 'scale(1.03)'
                    },
                }}>Back Office</Button>
            </div>
        </div>
    )
};

export default Header;