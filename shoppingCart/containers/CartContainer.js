import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTotal, getCartProducts } from '../reducers'
import Cart from './Cart'
import shop from '../api/shop'

const CartContainer = ({ products, total, checkout }) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)} />
)


const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: 'CHECKOUT_REQUEST'
  })
  shop.buyProducts(products, () => {
    dispatch({type: 'CHECKOUT_SUCCESS',cart})
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: 'CHECKOUT_FAILURE', cart })
  })
}

export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}


