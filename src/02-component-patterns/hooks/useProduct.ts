import { useEffect, useRef, useState } from "react"
import type { onChangeArgs, Product } from "../interfaces/interfaces";


interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {

    const [counter, setCounter] = useState(value);

    const isControlled = useRef(!!onChange);

    const increaseBy = (value: number) => {

        if (isControlled.current) {
            return onChange!({ count: value, product });
        }

        // console.log('isControlled', isControlled.current);

        const newValue = Math.max(counter + value, 0);
        setCounter(newValue); // asegura que no baje de 0

        onChange && onChange({ count: newValue, product });
    };

    useEffect(() => {
        setCounter(value)
    }, [value])


    return {
        counter,
        increaseBy
    }
}

export default useProduct