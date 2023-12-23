import React, { createContext, useState } from 'react'
// @ts-ignore
export const moviesContext =  createContext();
export function MakeMoviesAvailable({children}) {
    
    const [movies, setMovies] = useState(null);

  return (
  < moviesContext.Provider value={{data:movies,setMovies}}>
     {children}
 </ moviesContext.Provider>
  )
}
