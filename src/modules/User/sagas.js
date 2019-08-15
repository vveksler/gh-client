import { takeLatest, select, put, call, fork } from 'redux-saga/effects'
import { fetchRequest, fetchSuccess, fetchFailure } from './actions'
import { getApiKey } from 'modules/Auth'
import { getUserInfo } from './api'

function* fetchUserWatcher() {
  yield takeLatest(fetchRequest.toString(), fetchUserFlow)
}

export function* fetchUserFlow(action) {
  try {
    const token = yield select(getApiKey)
    const user = action.payload

    let response

    if (token && user) {
      response = yield call(getUserInfo, token, user)
    }

    yield put(fetchSuccess(response))
  } catch (error) {
    yield put(fetchFailure(error))
  }
}

export default function*() {
  yield fork(fetchUserWatcher)
}
