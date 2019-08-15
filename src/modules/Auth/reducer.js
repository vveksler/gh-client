import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { addApiKey } from './actions'

// В этом редьюсере вам нужно будет обрабатывать addApiKey экшен.
const apiKey = handleActions(
  {
    [addApiKey]: (_state, action) => action.payload
  },
  null
)

// Имеет смысл определить селекторы
// getIsAuthorized, getApiKey
export const getApiKey = state => state.auth.apiKey
export const getIsAuthorized = state => !!getApiKey(state)

export default combineReducers({
  apiKey
})
