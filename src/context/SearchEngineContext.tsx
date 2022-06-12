import { createContext, ReactNode, useState } from "react";
import { PictureContextType, PictureType } from "./types/SearchEngineType";

export const SearchEngineContext = createContext<PictureContextType>({
    pictures: [],
    setPictures: () => null
})

export const SearchEngineProvider = ({ children }: { children: ReactNode }) => {

    const [ pictures, setPictures ] = useState<PictureType[]>([])

    return (
        <SearchEngineContext.Provider value={{
            pictures,
            setPictures
        }}>
            { children }
        </SearchEngineContext.Provider>
    )

}