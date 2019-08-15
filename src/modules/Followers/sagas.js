import { takeLatest, select, put, call, fork } from 'redux-saga/effects'
import { fetchRequest, fetchSuccess, fetchFailure } from './actions'
import { getApiKey } from 'modules/Auth'
import { getFollowersInfo } from './api'

function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest.toString(), fetchFollowersFlow) // Замените вопросительный знак на подходящий экшен
}

export function* fetchFollowersFlow(action) {
  // Реализуйте загрузку данных
  // Используйте экшены FETCH_SUCCESS / FETCH_FAILURE
  try {
    let response
    const token = yield select(getApiKey)
    const user = action.payload

    if (token && user) {
      response = yield call(getFollowersInfo, token, user)
    }

    yield put(fetchSuccess(response))
  } catch (error) {
    yield put(fetchFailure(error))
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher)
}
