import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'

const ProductsList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
)

const ProductsContainer = ({ products, addToCart }) => (
  <ProductsList title="Products">
    {products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)} />
    )}
  </ProductsList>
)


const mapStateToProps = state => ({
  products: state.products.visibleIds.map(id => state.products.byId[id])
})


export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch({
      type: 'ADD_TO_CART',
      productId
    })
  }
}

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}