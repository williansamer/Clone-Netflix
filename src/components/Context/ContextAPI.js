import React, {createContext} from 'react'

import useMovie from './hooks/useMovie'

const Context = createContext()

function ContextProvider({children}) {

    const {blackHeader, featuredData, movieList} = useMovie()

    return (
        <Context.Provider value={{blackHeader, featuredData, movieList}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider};