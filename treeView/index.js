import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import generateTree from './generateTree'
import Node from './containers/Node.js'

const tree = generateTree()
const store = createStore(reducer, tree)

const TreeView = ()=>(
  <Provider store={store}>
    <Node id={0} />
  </Provider>
)

export default TreeView