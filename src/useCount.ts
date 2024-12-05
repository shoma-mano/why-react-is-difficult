import { useState } from "react"

export const useCount = ()=>{
    const [count, setCount] = useState(0)
    const nextCount = count +1
    const addCount = ()=>{
        setCount((count) => count + 1)
    }
    return {count, nextCount, addCount}
}