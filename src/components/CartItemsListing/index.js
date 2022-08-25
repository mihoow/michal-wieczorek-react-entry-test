import React from 'react'
import { connect } from 'react-redux'
import CartItem from '@Components/CartItem'
import './CartItemsListing.scss'

class CartItemsListing extends React.Component {
  render() {
    const { className = '', apolloClient, variant, items } = this.props

    return (
      <ul className={`cart-listing cart-listing--${variant} ${className}`}>
        {items.map(({ id, amount, attributes, prices }, index) => (
          <li key={index}>
            <CartItem
              className='cart-listing__item'
              apolloClient={apolloClient}
              variant={variant}
              productId={id}
              productIndex={index}
              amount={amount}
              savedPrices={prices}
              selectedAttributes={attributes}
            />
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.user.cart,
})

export default connect(mapStateToProps, {})(CartItemsListing)
