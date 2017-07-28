import axios from 'axios'

const READ_CART = 'READ_CART'
const UPDATE_CART = 'UPDATE_CART'
const DELETE_CART = 'DELETE_CART'
const DELETE_CART_ITEM = 'DELETE_CART_ITEM'

const readCart = cart => ({type: READ_CART, cart})
const updateCart = cartItem => ({type: UPDATE_CART, cartItem})
const deleteCart = () => ({type: DELETE_CART})
const deleteCartItem = id => ({type: DELETE_CART_ITEM, id})

export function getCart(){
  return function thunk(dispatch){
    axios.get(`/api/cart/`)
    .then(res => res.data)
    .then(cart => dispatch(readCart(cart)))
    .catch(err => console.log(err))
  }
}

export function destroyCartItem(packageId){
  return function thunk(dispatch){
    axios.delete(`/api/cart/${packageId}`)
    .then(() => dispatch(deleteCartItem(packageId)))
    .catch(err => console.log(err))
  }
}

export function putCartQuantity(pkg, quantity){
  return function thunk(dispatch){
    axios.put(`/api/cart/${pkg.id}`, {quantity: quantity})
    .then(res => res.data)
    .then(cartItem => dispatch(updateCart(cartItem)))
    .catch(err => console.log(err))
  }
}

export function putCart(pkg){
  return function thunk(dispatch){
    axios.put('/api/cart', pkg)
    .then(res => res.data)
    .then(cartItem => dispatch(updateCart(cartItem)))
    .catch(err => console.log(err))
  }
}

export function destroyCart(){
  return function thunk(dispatch){
    axios.delete('/api/cart')
    .then(dispatch(deleteCart()))
    .catch(err => console.log(err))
  }
}

export default function cartReducer(state = [], action){
  switch (action.type){
    case READ_CART:
      return action.cart
    case UPDATE_CART:
      return [...state.filter(item => item.packageId !== action.cartItem.packageId), action.cartItem]
    case DELETE_CART_ITEM:
      return [...state.filter(item => item.packageId !== action.id)]
    case DELETE_CART:
      return []
    default:
      return state
  }
}
