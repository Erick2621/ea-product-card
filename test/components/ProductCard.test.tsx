import { describe, expect, test } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { ProductCard } from '../../src/components';
import { product1, } from '../data/products';
import { domToJSON } from '../functions/domToJSON';


describe('ProductCard', () => {
    test('debe de mostrar el componente correctamente', () => {

        const { container } = render(
            <ProductCard product={product1}>
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>
        );

        // Convertir el primer nodo hijo (el span) a JSON
        const json = domToJSON(container.firstChild as HTMLElement);
        console.log(json);

        expect(json).toMatchSnapshot();
    });

    test('debe de incrementar el contador', () => {
        const { container, getByText } = render(
            <ProductCard product={product1}>
                {({ count, increaseBy }) => (
                    <>
                        <h1>Product Card</h1>
                        <span>{count}</span>
                        <button onClick={() => increaseBy(1)}>Increment</button>
                    </>
                )}
            </ProductCard>
        );

        // Antes del click: solo children
        const treeAntes = domToJSON(container.firstChild as HTMLElement);
        console.log('Antes del click (children):');
        console.log(JSON.stringify(treeAntes.props.children, null, 2));

        // Hacer click
        fireEvent.click(getByText('Increment'));

        // Después del click: solo children
        const treeDespues = domToJSON(container.firstChild as HTMLElement);
        console.log('Después del click (children):');
        console.log(JSON.stringify(treeDespues.props.children, null, 2));

        // Verificación visual
        expect(getByText('1')).toBeTruthy();
    });
});


