import { DarkMode, LightMode } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useState } from 'react';
import logoMotoGP from '../assets/Moto_Gp_logo_white.png';

const Header = () => {

    const [ theme, setTheme ] = useState('dark');

    return(
        <div className="header" style={{'border': 'solid 5px white', 'borderTop': 'none','borderRadius': '2em'}}>
            <Button variant="contained" sx={{
                border: 'solid 2px white',
                backgroundColor: '#252527',
                '&:hover': {
                    backgroundColor: '#007FFF',
                    transform: 'scale(1.03)'
                },
            }} onClick={() => setTheme(theme === 'ligth' ? 'dark' : 'ligth') } >{theme ===  'light' ? <DarkMode /> : <LightMode/>}</Button>
            <img src={logoMotoGP} style={{ 'width': '20em'}} alt='motoGP' />
        </div>
    )
};

export default Header;