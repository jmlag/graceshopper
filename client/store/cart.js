import axios from 'axios'

const GET_CART_FROM_SERVER = 'GET_CART_FROM_SERVER'
const GET_CART_ITEM = 'GET_CART_ITEM'
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
const EMPTY_CART = 'EMPTY_CART'

const getCartFromServer = cart => ({type: GET_CART_FROM_SERVER, cart, })
const getCartItem = item => ({type: GET_CART_ITEM, item, })
const removeCartItem = id => ({type: REMOVE_CART_ITEM, id, })
const emptyCart = () => ({type: EMPTY_CART, })

export function fetchCart(userId){
  return function thunk(dispatch){
    axios.get(`/api/cart/`)
    .then(res => res.data)
    .then(cart => dispatch(getCartFromServer(cart)))
    .catch(err => console.log(err))
  }
}

export function deleteCartItem(packageId){
  return function thunk(dispatch){
    axios.delete(`/api/cart/${packageId}`)
    .then(() => dispatch(removeCartItem(packageId)))
    .catch(err => console.log(err))
  }
}

export function addCartItem(pkg){
  return function thunk(dispatch){
    axios.put('/api/cart', pkg)
    .then(dispatch(getCartItem(pkg)))
    .catch(err => console.log(err))
  }
}

export function deleteCart(){
  return function thunk(dispatch){
    axios.delete('/api/cart')
    .then(dispatch(emptyCart()))
    .catch(err => console.log(err))
  }
}

export default function cartReducer(state = [], action){
  switch (action.type){
    case GET_CART_FROM_SERVER:
      return action.cart
    case GET_CART_ITEM:
      return [...state, action.item]
    case REMOVE_CART_ITEM:
      return [...state.filter(item => item.id !== state.id)]
    case EMPTY_CART:
      return []
    default:
      return state
  }
}
