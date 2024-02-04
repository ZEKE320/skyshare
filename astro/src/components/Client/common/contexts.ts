import React, {
    createContext
} from "react"

export type Session_info = {
    did: string | null,
    accessJwt: string | null,
    refreshJwt: string | null,
    handle: string | null,
}
export const Session_context = createContext({} as {
    session: Session_info
    setSession: React.Dispatch<React.SetStateAction<Session_info>>
})

export type msgInfo = {
    msg: string,
    isError: boolean,
}

export const Hidden_context = createContext({} as {
    hidden: boolean
    setHidden: React.Dispatch<React.SetStateAction<boolean>>
})