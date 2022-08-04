import PropTypes from 'prop-types';
import {  Avatar, Description, InfoProfile, Label, Location, Quantity, Stat, Stats, Tag, Username } from './Profile.styled';

export default function Profile ({
  username, 
  tag, 
  location, 
  avatar, 
  stats: {followers, views, likes}})
{
  return (
<InfoProfile>
  <Description>
    
    <Avatar  
      src={avatar}
      alt={avatar} 
    />
    <Username>{username}</Username>
    <Tag>{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Stats>
    <Stat>
      <Label>Followers</Label>
      <Quantity>{followers}</Quantity>
    </Stat>
    <Stat>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </Stat>
    <Stat>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </Stat>
  </Stats>
</InfoProfile>
  );
}




Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};