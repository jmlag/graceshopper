import axios from 'axios'

const GET_PACKAGES_FROM_SERVER = 'GET_PACKAGES_FROM_SERVER' // too verbose; stay consistent
const GET_PACKAGE = 'GET_PACKAGE'
const REMOVE_PACKAGE = 'REMOVE_PACKAGE'
const EDIT_PACKAGE = 'EDIT_PACKAGE'

// personal opinion: trailing commas when not on new lines is a little pointless and looks a little ridiculous?
const getPackagesFromServer = pkgs => ({type: GET_PACKAGES_FROM_SERVER, pkgs, })
const getPackage = pkg => ({type: GET_PACKAGE, pkg, })
const removePackage = pkg => ({type: REMOVE_PACKAGE, pkg, })
const editPackage = pkg => ({type: EDIT_PACKAGE, pkg, })

/* The fact that most the thunks use the HTTP method words - except for
'fetch' (/get) really bothers me. Meanwhile, 'get' is used for one of the
synchronous actions - this sit not well with me. Consider just using the CRUD
words for sync actions? */
export const postPackage = function(pkg){
  return function thunk(dispatch){
    axios.post('/api/packages', pkg)
    .then(postedPkg => dispatch(getPackage(postedPkg)))
    .catch(err => console.log(err)) // do we want to be handling errors a little
    // differently in future? Consider showing user what went wrong?
  }
}

export const putPackage = function(pkg){
  return function thunk(dispatch){
    axios.put(`/api/packages/${pkg.id}`, pkg)
    .then(putPkg => dispatch(editPackage(putPkg)))
    .catch(err => console.log(err))
  }
}

export const deletePackage = function(pkg){
  return function thunk(dispatch){
    axios.delete(`/api/packages/${pkg.id}`)
    .then(() => dispatch(removePackage(pkg)))
    .catch(err => console.log(err))
  }
}

export const fetchPackages = function(){
  return function thunk(dispatch){
    axios.get('/api/packages')
    .then(packages => dispatch(getPackagesFromServer(packages)))
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
