import { createContext } from 'react'

const login = {
    loginStatus: false
} // array of objects

export const LoginContext = createContext(login);