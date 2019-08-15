import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer, { rootSaga } from './modules'

// Создайте sagaMiddleware
const sagaMiddleware = createSagaMiddleware()

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    undefined,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )

  sagaMiddleware.run(rootSaga)

  return store

  // Подключите корневой редьюсер
  // Скорее всего вы захотите подключить Redux DevTools
  // Не забудьте подключить sagaMiddleware
}

export default createAppStore
