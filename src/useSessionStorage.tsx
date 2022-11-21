import { useEffect, useState } from "react"


type typeHookNumber = [
    a: number,
        b: React.Dispatch<React.SetStateAction<number>>
    ]
    
type typeHookBoolean = [
    a: boolean,
    b: React.Dispatch<React.SetStateAction<boolean>>
]
    
const useSessionStorage = (key: string): typeHookNumber => {

    const [value, setter] = useState(() => {
        let val = sessionStorage.getItem(key)
        return val ? parseInt(val) : 0
    })

    useEffect(() => {
        sessionStorage.setItem(key, value.toString())
    }, [key, value])

    return [value, setter]
}

const useSessionStorageBool = (key: string): typeHookBoolean => {

    const [value, setter] = useState(() => {
        let val = sessionStorage.getItem(key)
        return val ? val === 'true' : false
    })

    useEffect(() => {
        sessionStorage.setItem(key, value.toString())
    }, [key, value])

    return [value, setter]
}

export {useSessionStorage, useSessionStorageBool}