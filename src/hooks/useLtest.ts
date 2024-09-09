import { useRef, useLayoutEffect } from 'react';

const useLtest = <T>(value: T) => {
    const valueRef = useRef(value)

    useLayoutEffect(() => {
        valueRef.current = value
    })


    return valueRef
}

export default useLtest;
