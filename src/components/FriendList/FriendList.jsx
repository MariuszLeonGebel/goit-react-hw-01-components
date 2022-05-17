import propTypes from 'prop-types'
import { FriendsContainer } from './FriendList.styled';

export default function FriendList({friends}) {
  return (
    <FriendsContainer>
      <ul className="friendList">
        {friends.map(friend => (
          <li className="item"
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}>
            <span className={(friend.isOnline) ? "status" : "noActive"}></span>
            <img className="avatar" src={friend.avatar} alt={friend.name} width="48" />
            <p className="name">{friend.name}</p>
          </li>
        ))}
      </ul>
    </FriendsContainer>
  )
}

FriendList.propTypes = {
  id: propTypes.number,
  avatar: propTypes.string,
  name: propTypes.string,
  isOnline: propTypes.bool,
}
