import { useEffect, useState } from 'react'

export function useWidth() {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener("resize", function(event) {
            setWidth(window.innerWidth)
        })

    }, [])
    return width
}