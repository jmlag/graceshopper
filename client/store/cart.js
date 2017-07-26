import axios from 'axios'

const GET_CART_FROM_SERVER = 'GET_CART_FROM_SERVER'
const GET_CART_ITEM = 'GET_CART_ITEM'
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
const EMPTY_CART = 'EMPTY_CART'

const getCartFromServer = cart => ({type: GET_CART_FROM_SERVER, cart, })
const getCartItem = item => ({type: GET_CART_ITEM, item, })
const removeCartItem = item => ({type: REMOVE_CART_ITEM, item, })
const emptyCart = item => ({type: EMPTY_CART, })

export function fetchCart(userId){
  return function thunk(dispatch){
    axios.get(`/api/cart/${userId}`)
    .then(res => res.data)
    .then(cart => dispatch(getCartFromServer(cart)))
    .catch(err => console.log(err))
  }
}

export function deleteCartItem(userId){
  return function thunk(dispatch){
    axios.put(`/api/cart/${userId}/remove`)
  }
}
