import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";

export interface Teams {
    _id: string,
    name: string,
    factory: string,
    rider1: string,
    rider2: string,
    logoUrl: string
};

export const TeamsContext = createContext<{
    isLoaded: boolean,
    teams: Teams[]
}>({
    isLoaded: false,
    teams: []
});

const TeamsContextProvider : FC<PropsWithChildren>= ({ children }) => {
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ teams, setTeams ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/api/team')
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setTeams(result);
            },
            (error) => {
              setIsLoaded(false)
            })
      }, [])

    return (
        <TeamsContext.Provider value={{
          teams,
          isLoaded
        }}>
            {children}
        </TeamsContext.Provider>
    )
};

export default TeamsContextProvider;