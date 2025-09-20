import { describe, expect, test } from "vitest";
import ProductCard, { ProductImage } from "../../src/components";
import { product1, product2 } from "../data/products";
import { render } from "@testing-library/react";
import { domToJSON } from "../functions/domToJSON";


describe('ProductImage', () => {
    test('debe de mostrar el componente correctamente con la imagen personalizada', () => {

        const { container } = render(<ProductImage img="https://hola.jpg" />);

        // Convertir el primer nodo hijo (el span) a JSON
        const json = domToJSON(container.firstChild as HTMLElement);
        console.log(json);

        expect(json).toMatchSnapshot();
    });

    test('debe de mostrar el componente  con la imagen del producto', () => {

        const { container } = render(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        );

        // Convertir el primer nodo hijo (el span) a JSON
        const json = domToJSON(container.firstChild as HTMLElement);
        console.log(JSON.stringify(json, null, 2));


        expect(json).toMatchSnapshot();
    });
});