import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

export const products = [
  { id: 1, name: 'Monstera Deliciosa', category: 'Tropical', price: 28, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80' },
  { id: 2, name: 'Snake Plant', category: 'Low Light', price: 22, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2c8a?auto=format&fit=crop&w=600&q=80' },
  { id: 3, name: 'Fiddle Leaf Fig', category: 'Statement', price: 42, image: 'https://images.unsplash.com/photo-1617713964959-d9a36bbc7b52?auto=format&fit=crop&w=600&q=80' },
  { id: 4, name: 'Pothos', category: 'Easy Care', price: 18, image: 'https://images.unsplash.com/photo-1616761154384-8b5f6f7c3d6c?auto=format&fit=crop&w=600&q=80' },
  { id: 5, name: 'Rubber Plant', category: 'Tropical', price: 32, image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80' },
  { id: 6, name: 'Calathea Orbifolia', category: 'Pet Friendly', price: 36, image: 'https://images.unsplash.com/photo-1597055181300-d9b7c36c6b7b?auto=format&fit=crop&w=600&q=80' },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <section className="products" id="shop">
      <div className="section-heading">
        <div>
          <p className="eyebrow">THE COLLECTION</p>
          <h2>Find your new favorite plant.</h2>
        </div>
        <p>Curated greenery for bright windows, cozy corners, and every space between.</p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <span>{product.category}</span>
              <h3>{product.name}</h3>
              <div className="product-footer">
                <strong>${product.price.toFixed(2)}</strong>
                <button type="button" onClick={() => dispatch(addItem(product))}>Add to cart</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
