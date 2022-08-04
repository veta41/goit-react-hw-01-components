import PropTypes from 'prop-types';
import { Avatar, FriendItem, FriendWripper, Name, StatusOffline, StatusOnline } from './FriendList.styled';

export default function FriendList({friends}){

  return(
    <FriendWripper>
  {friends.map(friend => (
      <FriendItem key={friend.id}>
        <span
          className={
            friend.isOnline ? StatusOnline : StatusOffline
          }
        ></span>
        <Avatar src={friend.avatar} alt={friend.avatar} width="48" />
        <Name>{friend.name}</Name>
      </FriendItem>
    ))}
</FriendWripper>
  )
  
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};