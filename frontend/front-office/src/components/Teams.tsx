import { Avatar, Box, Card, CircularProgress, Typography } from "@mui/material"
import { useContext } from "react";
import { TeamsContext } from "../contexts/Teams";

const Teams = () => {
    const { teams, isLoaded } = useContext(TeamsContext);

    return(
        <div className="teams" >
            <Box className='teamsContainer' sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:'center', padding:1}} >
                {
                    isLoaded
                    ?
                        teams.map((team) => (
                            <Card sx={{
                                width: '35em',
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
                                borderColor: `${team.teamColor}`,
                                backgroundColor: '#252527',
                                '&:hover': {
                                    backgroundColor: '#D70041',
                                    transform: 'scale(1.03)'
                                },
                            }} key={team._id}>
                                <Avatar src={team.logoUrl} variant="rounded" sx={{
                                    width: '10em',
                                    height: '10em',
                                    border: `solid 3px ${team.teamColor}`,
                                    boxShadow: 10
                                }}/>
                                <Typography variant='h3' sx={{
                                    marginTop: 1,
                                    textAlign: 'center',
                                    textShadow: 5,
                                    fontSize: '2.2em'
                                }}>{team.name}</Typography>
                                <Typography variant="h6">{team.factory}</Typography>
                                {/* <Typography variant="h5">riders : {team.rider1}</Typography>
                                <Typography variant="h5">{team.rider2}</Typography> */}
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