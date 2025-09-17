import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import useShoppingCart from "../hooks/useShoppingCart"

import '../styles/custom-styles.css'

const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange, products } = useShoppingCart();

    return (
        <div >
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className="bg-dark text-white"
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductImage className='custom-image' />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>
                    ))
                }

            </div>

            {/* 
                <input
                    value={counter}
                    onChange={(e)=> setCounter(e.target.value)}
                />
             */}

            <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            key={key}
                            product={product}
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            onChange={onProductCountChange} // 👈 importante para que funcione también en el carrito
                            value={product.count}
                        >
                            <ProductImage className='custom-image' style={{ boxShadow: '10px 10px 10px rgba' }} />
                            <ProductButtons
                                className='custom-buttons'
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            />
                        </ProductCard>
                    ))
                }


            </div>
            {/* <div>
                <code>
                    {JSON.stringify(shoppingCart, null, 5)}
                </code>
            </div> */}
        </div>
    )
}

export default ShoppingPage