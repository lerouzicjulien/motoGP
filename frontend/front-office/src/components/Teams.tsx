import { Avatar, Box, Card, CircularProgress, Typography } from "@mui/material"
import { useContext } from "react";
import { TeamsContext } from "../contexts/Teams";

const Teams = () => {
    const { teams, isLoaded } = useContext(TeamsContext);

    return(
        <div className="teams" style={{"border": "solid #1E4976 0.5px", "borderRadius":"10px", "margin": "1em", "padding": "2em", "backgroundColor":"#001E3D", "maxWidth": "40%"}}>
            <Typography variant="h3">Teams</Typography>
            <Box className='teamsContainer' sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:'center', padding:2}} >
                {
                    isLoaded
                    ?
                        teams.map((team) => (
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
                            }} key={team._id}>
                                <Avatar src={team.logoUrl} sx={{
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
                                }}>{team.name}</Typography>
                                <Typography variant="h6">{team.factory}</Typography>
                                <Typography variant="h6">{team.rider1}</Typography>
                                <Typography variant="h6">{team.rider2}</Typography>
                            </Card>
                        ))

                    :
                        <CircularProgress size={300} />
                }
            </Box>
        </div>
    )
};

export default Teams;