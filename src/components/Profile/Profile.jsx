import propTypes from 'prop-types'
import { ProfileContainer } from './Profile.styled';

export default function Profile({user}) {
  return (
    <ProfileContainer>
      <div className="card">
        <div className="description">
          <img src={user.avatar} alt="" className="avatar" />
          <p className="name">{user.username}</p>
          <p className="tag">{user.tag}</p>
          <p className="location">{user.location}</p>
      </div>
        
      <ul className="stats">
        <li className="item">
          <span className="label">Followers</span>
          <span className="quantity">{user.stats.followers}</span>
        </li>
        <li className="item">
          <span className="label">Views</span>
          <span className="quantity">{user.stats.views}</span>
        </li>
        <li className="item">
          <span className="label">Likes</span>
          <span className="quantity">{user.stats.likes}</span>
        </li>
      </ul>

    </div>
    </ProfileContainer>
  )
}

Profile.propTypes = {
  avatar: propTypes.string,
  username: propTypes.string,
  tag: propTypes.string,
  location: propTypes.string,
  followers: propTypes.number,
  views: propTypes.number,
  likes: propTypes.number,
};