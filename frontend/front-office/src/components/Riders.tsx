import { Avatar, Box, Card, CircularProgress, Typography } from "@mui/material";
import { useContext } from "react";
import { RidersContext } from "../contexts/Riders";

const Riders = () => {

    const {riders, isLoaded} = useContext(RidersContext);

    console.log(riders)
    
    return(
        <div className="riders" style={{"margin": ".4em", "padding": "1em", "maxWidth": "55%"}}>
            <Typography variant="h3" sx={{mt: '.5em'}}>RIDERS</Typography>
            <Box className='ridersContainer' sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:'center', padding:1}} >
                {
                    isLoaded
                    ?
                      riders.map((rider) => (
                        <Card sx={{
                            width: '19em',
                            m: 2,
                            p: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            color: 'white',
                            borderRight: 4,
                            borderBottom: 4,
                            borderRadius: 5,
                            borderColor: `${rider.teamColor}`,
                            backgroundColor: '#252527',
                            '&:hover': {
                                backgroundColor: '#007FFF',
                                transform: 'scale(1.03)'
                            },
                        }} key={rider._id}>
                            <Avatar src={rider.imageUrl} sx={{
                                width: '8em',
                                height: '8em',
                                border: `solid 5px ${rider.teamColor}`,
                                boxShadow: 10,
                            }}/>
                            <Typography variant='h3' sx={{
                                marginTop: 1,
                                textAlign: 'center',
                                textShadow: 5,
                                fontSize: '2.2em'
                            }}>{rider.name}</Typography>
                            <Typography variant="h6">{rider.team}</Typography>
                        </Card>
                      ))
                    :
                      <CircularProgress size={300} />
                }
               

            </Box>
        </div>
    )
};

export default Riders