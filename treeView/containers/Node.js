import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

export class Node extends React.Component {
  constructor(props){
    super(props)
  }

  handleIncrementClick (){
    const { increment, id } = this.props
    increment(id)
  }

  handleAddChildClick(e){
    e.preventDefault()

    const { addChild, createNode, id } = this.props
    const childId = createNode().nodeId
    addChild(id, childId)
  }

  handleRemoveClick(e){
    e.preventDefault()

    const { removeChild, deleteNode, parentId, id } = this.props
    removeChild(parentId, id)
    deleteNode(id)
  }

  renderChild(childId){
    const { id } = this.props
    return (
      <li key={childId}>
        <ConnectedNode id={childId} parentId={id} />
      </li>
    )
  }

  render() {
    const { counter, parentId, childIds } = this.props
    return (
      <div>
        Counter: {counter}
        {' '}
        <button onClick={this.handleIncrementClick.bind(this)}>
          +
        </button>
        {' '}
        {typeof parentId !== 'undefined' &&
          <a href="#" onClick={this.handleRemoveClick.bind(this)} // eslint-disable-line jsx-a11y/anchor-is-valid
             style={{ color: 'lightgray', textDecoration: 'none' }}>
            ×
          </a>
        }
        <ul>
          {childIds.map(this.renderChild.bind(this))}
          <li key="add">
            <a href="#" // eslint-disable-line jsx-a11y/anchor-is-valid
              onClick={this.handleAddChildClick.bind(this)}
            >
              Add child
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return state[ownProps.id]
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)
export default ConnectedNode