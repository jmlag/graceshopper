import axios from 'axios'

const CREATE_PACKAGE = 'CREATE_PACKAGE'
const READ_PACKAGES = 'READ_PACKAGES'
const UPDATE_PACKAGE = 'UPDATE_PACKAGE'
const DELETE_PACKAGE = 'DELETE_PACKAGE'

const createPackage = pkg => ({type: CREATE_PACKAGE, pkg})
const readPackages = pkgs => ({type: READ_PACKAGES, pkgs})
const updatePackage = pkg => ({type: UPDATE_PACKAGE, pkg})
const deletePackage = pkg => ({type: DELETE_PACKAGE, pkg})

export const postPackage = function(pkg){
  return function thunk(dispatch){
    axios.post('/api/packages', pkg)
    .then(postedPkg => dispatch(createPackage(postedPkg)))
    .catch(err => console.log(err))
  }
}

export const putPackage = function(pkg){
  return function thunk(dispatch){
    axios.put(`/api/packages/${pkg.id}`, pkg)
    .then(putPkg => dispatch(updatePackage(putPkg)))
    .catch(err => console.log(err))
  }
}

export const destroyPackage = function(pkg){
  return function thunk(dispatch){
    axios.delete(`/api/packages/${pkg.id}`)
    .then(() => dispatch(deletePackage(pkg)))
    .catch(err => console.log(err))
  }
}

export const getPackages = function(){
  return function thunk(dispatch){
    axios.get('/api/packages')
    .then(packages => dispatch(readPackages(packages)))
    .catch(err => console.log(err))
  }
}

export default function packageReducer(state = [], action) {
  switch (action.type){
    case CREATE_PACKAGE:
      return [...state, action.pkg]
    case READ_PACKAGES:
      return action.pkgs
    case DELETE_PACKAGE:
      return [...state.filter(pkg => pkg.id !== action.pkg.id)]
    case UPDATE_PACKAGE:
      return state.map(pkg => pkg.id === action.pkg.id ? action.pkg : pkg)
    default:
      return state
  }
}
