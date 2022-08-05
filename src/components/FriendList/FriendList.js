import PropTypes from 'prop-types';
import FriendListItem from './FrendListItem';
import {FriendWrapper } from './FriendList.styled';

export default function FriendList({ friends, children }){

  return(
    <FriendWrapper>  {children}

{friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
</FriendWrapper>
  )
  
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};