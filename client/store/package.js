import axios from 'axios'

const CREATE_PACKAGE = 'CREATE_PACKAGE'
const READ_PACKAGES = 'READ_PACKAGES'
const READ_PACKAGE = 'READ_PACKAGE'
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
    .then(res => res.data)
    .then(putPkg => dispatch(updatePackage(putPkg)))
    .catch(err => console.log(err))
  }
}

export const destroyPackage = function(pkg){
  return function thunk(dispatch){
    axios.delete(`/api/packages/${pkg.id}`)
    .then(res => res.data)
    .then(() => dispatch(deletePackage(pkg)))
    .catch(err => console.log(err))
  }
}

export const getPackages = function(){
  return function thunk(dispatch){
    axios.get('/api/packages')
    .then(res => res.data)
    .then(packages => dispatch(readPackages(packages)))
    .catch(err => console.log(err))
  }
}

//{packageId: package{id, price, imageUrl...}}   props.packages[packageId] -> returns the package u want
export default function packageReducer(state = {}, action) {
  let out = Object.assign({}, state)
  switch (action.type){
    case CREATE_PACKAGE:
      out[action.pkg.id] = action.pkg
      break
    case READ_PACKAGES:
      action.pkgs.forEach(pkg => out[pkg.id] = pkg)
      break
    case DELETE_PACKAGE:
      delete out[action.pkg.id]
      break
    case UPDATE_PACKAGE:
      out[action.pkg.id] = action.pkg
      break
  }
  return out
}
