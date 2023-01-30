import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";

export interface Riders {
    _id: string,
    name: string,
    number: number,
    nationality: string,
    birth: string,
    team: string,
    helmetBrand: string,
    combiBrand: string,
    wins: number,
    podium: number,
    title: number,
    imageUrl: string
};

export const RidersContext = createContext<{
    isLoaded: boolean,
    riders: Riders[]
}>({
    isLoaded: false,
    riders: []
});

const RidersContextProvider : FC<PropsWithChildren>= ({ children }) => {
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ riders, setRiders ] = useState([]);

    console.log(riders)

    useEffect(() => {
        fetch('http://localhost:3002/api/rider')
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setRiders(result);
            },
            (error) => {
              setIsLoaded(false)
            })
      }, [])

    return (
        <RidersContext.Provider value={{
          riders,
          isLoaded
        }}>
            {children}
        </RidersContext.Provider>
    )
};

export default RidersContextProvider;