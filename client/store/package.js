import axios from 'axios'

const GET_PACKAGES_FROM_SERVER = 'GET_PACKAGES_FROM_SERVER'
const GET_PACKAGE = 'GET_PACKAGE'
const REMOVE_PACKAGE = 'REMOVE_PACKAGE'
const EDIT_PACKAGE = 'EDIT_PACKAGE'

const getPackagesFromServer = pkgs => ({type: GET_PACKAGES_FROM_SERVER, pkgs, })
const getPackage = pkg => ({type: GET_PACKAGE, pkg, })
const removePackage = pkg => ({type: REMOVE_PACKAGE, pkg, })
const editPackage = pkg => ({type: EDIT_PACKAGE, pkg, })

export const postPackage = function(pkg){
  return function thunk(dispatch){
    axios.post('/api/package', pkg)
    .then(postedPkg => dispatch(getPackage(postedPkg)))
    .catch(err => console.log(err))
  }
}

export const putPackage = function(pkg){
  return function thunk(dispatch){
    axios.put(`/api/package/${pkg.id}`, pkg)
    .then(putPkg => dispatch(editPackage(putPkg)))
    .catch(err => console.log(err))
  }
}

export const deletePackage = function(pkg){
  return function thunk(dispatch){
    axios.delete(`/api/package/${pkg.id}`)
    .then(() => dispatch(removePackage(pkg)))
    .catch(err => console.log(err))
  }
}

export default function packageReducer(state = [], action) {
  switch (action.type){
    case GET_PACKAGES_FROM_SERVER:
      return action.pkgs
    case GET_PACKAGE:
      return [...state, action.pkg]
    case REMOVE_PACKAGE:
      return [...state.filter(pkg => pkg.id !== action.pkg.id)]
    case EDIT_PACKAGE:
      return state.map(pkg => pkg.id === action.pkg.id ? action.pkg : pkg)
    default:
      return state
  }
}
