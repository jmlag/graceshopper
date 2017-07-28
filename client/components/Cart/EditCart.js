import React from 'react'
import { connect } from 'react-redux'

import { putCartQuantity, destroyCartItem } from '../../store'

function EditCart(props){
  return (
    <form onSubmit={props.editCartQuantity}>
      <div className="row">
        <div className="input-field col s12">
          <input defaultValue={props.quantity} id="quantity" type="number" min="0" step="1" className="validate" />
          <label className="active" htmlFor="quantity">Quantity</label>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <button type="submit" className="btn secondaryColor right">Submit</button>
        </div>
      </div>
    </form>
  )
}

function mapStateToProps(state, oldProps) {
  return {
    quantity: oldProps.quantity,
  }
}

function mapDispatchToProps(dispatch, oldProps) {
  return {
    editCartQuantity(evt){
      evt.preventDefault()
      const newQuantity = evt.target.quantity.value
      if (!newQuantity && newQuantity !== 0) {
        return
      } else if (+newQuantity === 0) {
        dispatch(destroyCartItem(oldProps.pkg.id))
      } else {
        dispatch(putCartQuantity(oldProps.pkg, newQuantity))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCart)
