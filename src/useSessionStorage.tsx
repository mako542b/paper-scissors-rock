import { useEffect, useState, Dispatch, SetStateAction } from "react"

type returnType<T> = [
    value: T,
    setter: Dispatch<SetStateAction<T>>
]
    
function useSessionStorage<T>(key: string, initialValue: any): returnType<T> {

    const [value, setter] = useState<T>(() => {
        let val = sessionStorage.getItem(key)
        if(val) return JSON.parse(val)
        else if(initialValue instanceof Function) return initialValue()
        return initialValue
    })

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setter]
}

export default useSessionStorage