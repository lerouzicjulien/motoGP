import { Avatar, Box, Card, CircularProgress, Typography } from "@mui/material";
import { useContext } from "react";
import { RidersContext } from "../contexts/Riders";

const Riders = () => {

    const {riders, isLoaded} = useContext(RidersContext);

    console.log(riders)
    return(
        <div className="riders" style={{"border": "solid blue 1px", "margin": "1em", "padding": "2em"}}>
            <Typography variant="h3">Ici les Riders</Typography>
            <Box className='ridersContainer' sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:'center', padding:2}} >
                {
                    isLoaded
                    ?
                      riders.map((rider) => (
                        <Card sx={{
                            width: '15em',
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
                            // backgroundColor: backgroundColor,
                            // '&:hover': {
                            //     backgroundColor: hoverBackgroundColor,
                            //     transform: 'scale(1.03)'
                            // },
                        }} >
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