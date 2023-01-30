import { Avatar, Box, Card, CircularProgress, Typography } from "@mui/material";
import { useContext } from "react";
import { RidersContext } from "../contexts/Riders";

const Riders = () => {

    const {riders, isLoaded} = useContext(RidersContext);

    console.log(riders)
    
    return(
        <div className="riders" style={{"border": "solid #1E4976 0.5px", "borderRadius":"10px", "margin": "1em", "padding": "2em", "backgroundColor":"#001E3D", "maxWidth": "40%"}}>
            <Typography variant="h3">Riders</Typography>
            <Box className='ridersContainer' sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:'center', padding:2}} >
                {
                    isLoaded
                    ?
                      riders.map((rider) => (
                        <Card sx={{
                            width: '13em',
                            m: 2,
                            p: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            // color: 'white',
                            borderRight: 3,
                            borderBottom: 3,
                            borderRadius: 5,
                            borderColor: 'white',
                            backgroundColor: '#007FFF',
                            '&:hover': {
                            //     backgroundColor: hoverBackgroundColor,
                                transform: 'scale(1.03)'
                            },
                        }} key={rider._id}>
                            <Avatar src={rider.imageUrl} sx={{
                                width: '8em',
                                height: '8em',
                                border: 'solid 8px white',
                                boxShadow: 10
                            }}/>
                            <Typography variant='h4' sx={{
                                marginTop: 1,
                                textAlign: 'center',
                                textShadow: 5,
                                fontFamily: 'revert'
                            }}>{rider.name}</Typography>
                            <Typography variant="h6">{rider.number}</Typography>
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