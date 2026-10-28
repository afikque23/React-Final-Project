import { useSelector } from 'react-redux';
import { useState } from 'react';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');
  const itemCount = useSelector((state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));

  return (
    <div className="app">
      <header className="nav">
        <button className="brand" type="button" onClick={() => setPage('home')}>Paradise <em>Nursery</em></button>
        <nav>
          <button type="button" className={page === 'home' ? 'active' : ''} onClick={() => setPage('home')}>Home</button>
          <button type="button" onClick={() => setPage('shop')}>Shop</button>
          <button type="button" onClick={() => setPage('about')}>About us</button>
        </nav>
        <button className="cart-button" type="button" onClick={() => setPage('cart')}>Cart <span>{itemCount}</span></button>
      </header>
      {page === 'home' && (
        <>
          <main className="hero">
            <div className="hero-copy">
              <p className="eyebrow">BRING THE OUTDOORS IN</p>
              <h1>Make room for <em>green.</em></h1>
              <p className="hero-text">Thoughtfully grown houseplants for slower mornings, brighter rooms, and a life closer to nature.</p>
              <button className="primary-button" type="button" onClick={() => setPage('shop')}>Get Started <span>→</span></button>
            </div>
          </main>
          <AboutUs />
        </>
      )}
      {page === 'shop' && <ProductList />}
      {page === 'about' && <AboutUs />}
      {page === 'cart' && <CartItem />}
      <footer>© 2025 Paradise Nursery · Grown with care.</footer>
    </div>
  );
}
