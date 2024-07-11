import './FeaturedProducts.css'

export default function FeaturedProducts()
{
    const products = [
        { id: 1, name: 'Robot', price: '$10',image: '/images/product1.png' },
        { id: 2, name: 'Chair', price: '$20',image: '/images/product2.png' },
        { id: 3, name: 'Console', price: '$30',image: '/images/product3.png' },
      ];

    return(
        <section className="featured-products">
        <h2>Featured Products</h2>
         <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div> 
      </section>
    )
}