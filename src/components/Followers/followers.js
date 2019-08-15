import React, { PureComponent } from 'react'
import { getisLoading, getData } from 'modules/Followers'
import styles from './followers.module.css'
import { connect } from 'react-redux'
import cx from 'classnames'

class Followers extends PureComponent {
  renderFollowers = data => {
    if (!data.length)
      return <div className={styles.followers}>{data.message}</div>
    return data.map(follower => (
      <div key={follower.login} className={styles.followers}>
        <img
          src={follower.avatar_url}
          alt={follower.login}
          className={styles.followerImg}
        />
        <p className={styles.followerLogin}>{follower.login}</p>
      </div>
    ))
  }

  render() {
    const { isLoading, data } = this.props

    if (!data)
      return <div className={styles.root}>Нет информации о подписчиках</div>
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    return isLoading ? (
      <div className={styles.root}>Loading data...</div>
    ) : (
      <div className={cx(styles.root, 't-followers')}>
        {this.renderFollowers(data)}
      </div>
    )
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({
  data: getData(state),
  isLoading: getisLoading(state)
}))(Followers)
