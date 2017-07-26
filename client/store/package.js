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
    .then(() => dispatch(removePac))
  }
}
