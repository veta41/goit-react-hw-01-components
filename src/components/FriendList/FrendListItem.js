import PropTypes from 'prop-types';
import { Avatar, FriendItem, Name, StatusOnline } from './FriendList.styled';

export default function FriendListItem({ avatar, name, isOnline }){
   const status = isOnline ? 'green' : 'red';
   
  return(
    
  <FriendItem>
    <StatusOnline  style={{ backgroundColor: status }}></StatusOnline>
      <Avatar src={avatar} 
        alt="User avatar" 
        width="48" />
      <Name>{name}</Name>
  </FriendItem>
  );
}




FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};