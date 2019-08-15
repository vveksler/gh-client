import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { fetchRequest, fetchSuccess, fetchFailure } from './actions'

const isLoading = handleActions(
  {
    [fetchRequest]: () => true,
    [fetchSuccess]: () => false,
    [fetchFailure]: () => false
  },
  false
)

const data = handleActions(
  {
    [fetchSuccess]: (_state, action) => action.payload
  },
  null
)

// selectors
export const getData = state => state.user.data
export const getisLoading = state => state.user.isLoading

export default combineReducers({
  isLoading,
  data
})
// Обратите внимание на тесты, они помогут вам написать код редьюсера
