import { useState } from "react"

interface UseProductProps {
    initialValue?: number;
}

const useProduct = ({ initialValue = 0 }: UseProductProps = {}) => {

    const [counter, setCounter] = useState(initialValue)

    const increaseBy = (value: number) => {
        setCounter((prev) => Math.max(prev + value, 0)); // asegura que no baje de 0
    };

    return {
        counter,
        increaseBy
    }
}

export default useProduct