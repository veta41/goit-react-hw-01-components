import PropTypes from 'prop-types';
import FriendListItem from './FrendListItem';
import {FriendWrapper } from './FriendList.styled';

export default function FriendList({ friends, children }){

  return(
    <FriendWrapper>  {children}

{friends.map(({id, avatar, name, isOnline}) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
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