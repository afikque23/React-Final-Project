import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!items.length) {
    return (
      <section className="cart empty-cart">
        <p className="eyebrow">YOUR BAG</p>
        <h2>Your cart is waiting for a little green.</h2>
        <p>Add a plant from our collection to get started.</p>
      </section>
    );
  }

  return (
    <section className="cart">
      <div className="section-heading">
        <div><p className="eyebrow">YOUR BAG</p><h2>Shopping cart</h2></div>
        <p>{items.length} {items.length === 1 ? 'kind' : 'kinds'} of plant</p>
      </div>
      <div className="cart-layout">
        <div className="cart-items">
          {items.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <span>{item.category}</span>
                <h3>{item.name}</h3>
                <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                <div className="quantity">
                  <button type="button" aria-label={`Decrease ${item.name}`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button>
                  <span>{item.quantity}</span>
                  <button type="button" aria-label={`Increase ${item.name}`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                  <button className="remove" type="button" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <aside className="summary">
          <h3>Order summary</h3>
          <div><span>Subtotal</span><strong>${total.toFixed(2)}</strong></div>
          <div><span>Delivery</span><span>Free</span></div>
          <hr />
          <div className="summary-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
          <button type="button" className="checkout">Checkout</button>
        </aside>
      </div>
    </section>
  );
}
