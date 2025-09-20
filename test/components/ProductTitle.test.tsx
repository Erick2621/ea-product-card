import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1, product2 } from '../data/products';
import { domToJSON } from '../functions/domToJSON';


describe('ProductTitle', () => {
    test('debe de mostrar el componente correctamente con el titulo personalizado', () => {

        const { container } = render(<ProductTitle title="Custom Product" className='custom-class' />);

        // Convertir el primer nodo hijo (el span) a JSON
        const json = domToJSON(container.firstChild as HTMLElement);
        console.log(json);

        expect(json).toMatchSnapshot();
    });

    test('debe de mostrar el componente  con el nombre del producto', () => {

        const { container } = render(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        );

        // Convertir el primer nodo hijo (el span) a JSON
        const json = domToJSON(container.firstChild as HTMLElement);
        console.log(json);

        expect(json).toMatchSnapshot();
    });
});


