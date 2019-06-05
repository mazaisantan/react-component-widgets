import React from 'react'
import { createStore,applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './containers/App'
import shop from './api/shop'
import thunk from 'redux-thunk'

const middleware = [ thunk ];
const store = createStore(
  reducer,
  applyMiddleware(...middleware))

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch({
      type: 'RECEIVE_PRODUCTS',
      products
    })
  })
}

store.dispatch(getAllProducts())

 const ShoppingCart = ()=>(
  <Provider store={store}>
    <App />
  </Provider>
)

export default ShoppingCart