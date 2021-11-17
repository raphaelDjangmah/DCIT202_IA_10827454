import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { API_KEY, requests } from '../APIRequest/requests'

export const GenderContext = createContext()
export const BrandsContext = createContext()
export const AuthContext = createContext()
function Context({ children }) {


    const [genders, setGenders] = useState([])
    const [brands, setbrands] = useState(null)

    return (
        <GenderContext.Provider value={genders} >
            <BrandsContext.Provider value={brands} >
                {children}
            </BrandsContext.Provider>
        </GenderContext.Provider>
    )
}

export default Context
