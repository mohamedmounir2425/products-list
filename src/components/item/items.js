import React from 'react';

const Items = (props) => {
    const {items, del, increaseQuantity, decreaseQuantity} = props;
    let length = items.length
    const ListItem = length ? (
        items.map(item => {
            return(
                <div className="item" key={item.id}>
          <p>{item.product}</p>
          <p>${item.price}</p>
          <p>
            <button className='quantityBtn' onClick={() => decreaseQuantity(item.id)}>-</button>
            <span className='quantity'> {item.quantity}</span>
            <button className='quantityBtn' onClick={() => increaseQuantity(item.id)}>+</button>
          </p>
          <p className="delete" onClick={() => del(item.id)}>Delete</p>
        </div>
            )
        })
    ) : (
        <div className="text">There are no items, Try to add some.</div>
    )
    return (
        <div>
            <div className="header item">
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Edit</p>
            </div>
            {ListItem}
        </div>
    )
}

export default Items