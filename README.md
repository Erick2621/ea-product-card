#EA-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Erick Espinola

## Ejemplo
```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from "es-product-card"
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10
  }}
>
  {
    ({ reset, isMaxCountReached, increaseBy, count }) => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )
  }

</ProductCard>
```